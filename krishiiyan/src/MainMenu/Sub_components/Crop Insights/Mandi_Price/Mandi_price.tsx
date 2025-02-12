import { Autocomplete, Box, CircularProgress, Table, TextField, TextFieldProps } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DateRange } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import DateRange_Picker from './DataRange_Picker';
import { baseURL } from '../../../../Services/Api';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Menu, MenuItem, Button, IconButton } from '@mui/material';

interface MandiPriceProps {
    startDate: Date | null;
    endDate: Date | null;
}

const Mandi_price: React.FC<MandiPriceProps> = () => {
    const [selectedCrop, setSelectedCrop] = useState<string | null>(null);
    const [selectedDateRange, setSelectedDateRange] = useState<DateRange<Date>>([null, null]);
    const [State_list, setState_list] = useState<string[]>([]);
    const [District_list, setDistrict_list] = useState<string[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
    const [selectedState, setSelectedState] = useState<string | null>(null);
    const [selectedCommodity, setSelectedCommodity] = useState<string | null>(null);
    const [commodity_list, setCommodity_list] = useState<string[]>([]);
    const [initialDate, setInitialDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)
    const [price_table, setPrice_table] = useState<any[]>([])
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);

    const handleExportMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleExportMenuClose = () => {
        setAnchorEl(null);
    };

    const handleExport = (format: 'csv' | 'pdf') => {
        handleExportMenuClose(); // Close the dropdown menu
        if (price_table.length === 0) {
            alert('No data to export');
            return;
        }

        if (format === 'csv') {
            exportToCSV();
        } else if (format === 'pdf') {
            exportToPDF();
        }
    };

    const exportToCSV = () => {
        const headers = ['S.No', 'Crop Name', 'Market Place', 'Date', 'Min Price / Quintal', 'Avg Price / Quintal', 'Max Price / Quintal'];
        const csvContent = [
            headers.join(','),
            ...price_table.map((row, index) => [
                index + 1,
                row.commodity,
                row.market,
                row.arrival_date,
                row.min_price,
                row.modal_price,
                row.max_price,
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'mandi_prices.csv');
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        const headers = [['S.No', 'Crop Name', 'Market Place', 'Date', 'Min Price / Quintal', 'Avg Price / Quintal', 'Max Price / Quintal']];
        const data = price_table.map((row, index) => [
            index + 1,
            row.commodity,
            row.market,
            row.arrival_date,
            row.min_price,
            row.modal_price,
            row.max_price,
        ]);

        (doc as any).autoTable({
            head: headers,
            body: data,
            startY: 20,
            theme: 'grid',
            styles: { fontSize: 8 },
            headStyles: { fillColor: [63, 192, 65] },
        });

        doc.save('mandi_prices.pdf');
    };

    // Handle Sort Menu
    const handleSortMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setSortAnchorEl(event.currentTarget);
    };

    const handleSortMenuClose = () => {
        setSortAnchorEl(null);
    };

    // Sort Functionality
    const handleSort = (order: 'highToLow' | 'lowToHigh') => {
        handleSortMenuClose(); // Close the sort menu

        const sortedData = [...price_table].sort((a, b) => {
            if (order === 'highToLow') {
                return b.modal_price - a.modal_price; // High to Low
            } else {
                return a.modal_price - b.modal_price; // Low to High
            }
        });

        setPrice_table(sortedData); // Update the table with sorted data
    };

    const handleselectedStateChange = (event: React.ChangeEvent<{}>, newValue: string | null) => {
        setSelectedState(newValue);
    };

    const handleselectedDistrictChange = (event: React.ChangeEvent<{}>, newValue: string | null) => {
        setSelectedDistrict(newValue);
    }
    const handleselectedCommodityChange = (event: React.ChangeEvent<{}>, newValue: string | null) => {
        setSelectedCommodity(newValue);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${baseURL}/mandi/filter?`);
                const data = await response.json();
                setState_list(data.data ? data.data : []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${baseURL}/mandi/filter?stateName=${selectedState}`);
                const data = await response.json();
                setDistrict_list(data.data ? data.data : []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        }
        fetchData();
    }, [selectedState]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${baseURL}/mandi/filter?stateName=${selectedState}&districtName=${selectedDistrict}`);
                const data = await response.json();
                setCommodity_list(data.data ? data.data : []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        }
        fetchData();
    }, [selectedDistrict]);

    const formatDate = (date: Date | null): string | null => {
        if (!date) return null;
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`; // Format: DD/MM/YYYY
    };

    const handlesearch = async () => {
        try {
            const formattedInitialDate = formatDate(initialDate);
            const formattedEndDate = formatDate(endDate);

            const response = await fetch(
                `${baseURL}/mandi/mandiPrices?state=${selectedState}&district=${selectedDistrict}&commodity=${selectedCommodity}&initialDate=${formattedInitialDate}&finalDate=${formattedEndDate}`
            );

            const data = await response.json();
            console.log("API Response:", data);

            if (data && data.data) {
                setPrice_table(data.data);
            } else {
                setPrice_table([]);  // Set an empty array if `data.data` is undefined
            }
        } catch (error) {
            console.error('Error fetching mandi prices:', error);
            setPrice_table([]); // Prevent `undefined` assignment
        }
    };

    console.log(price_table);

    return (
        <>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-left text-2xl p-2'>Mandi Price</h1>
                </div>
                <div className='p-2'>
                    <button className='relative px-5 bg-white text-gray-600 border-2 border-[#616161]' onClick={handleExportMenuOpen}><FileUploadOutlinedIcon /> Export</button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleExportMenuClose}
                    >
                        <MenuItem onClick={() => handleExport('csv')}>Export .csv</MenuItem>
                        <MenuItem onClick={() => handleExport('pdf')}>Export .pdf</MenuItem>
                    </Menu>
                    <button className='px-5 bg-white text-gray-600 border-2 border-[#616161]' onClick={handleSortMenuOpen}><SwapVertIcon />Sort</button>
                    <Menu anchorEl={sortAnchorEl} open={Boolean(sortAnchorEl)} onClose={handleSortMenuClose}>
                        <MenuItem onClick={() => handleSort('highToLow')}>High to Low</MenuItem>
                        <MenuItem onClick={() => handleSort('lowToHigh')}>Low to High</MenuItem>
                    </Menu>
                </div>
            </div>
            <div className='flex space-x-14 justify-center items-center sticky top-20 bg-white'>
                <div className='flex flex-col items-start'>
                    <label htmlFor="crop-autocomplete" style={{ fontSize: '16px', whiteSpace: 'nowrap' }} className='text-left'>
                        Select State
                    </label>
                    <Autocomplete
                        id="crop-autocomplete"
                        options={State_list}
                        value={selectedState}
                        onChange={handleselectedStateChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Select State"
                                variant="outlined"
                                size="small"
                                sx={{
                                    width: '300px',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '4px',
                                        padding: '4px 8px',
                                        fontSize: '14px',
                                        backgroundColor: '#fff',
                                        border: '1px solid #616161',
                                    },
                                }}
                            />
                        )}
                        sx={{
                            width: '250px',
                            '& .MuiAutocomplete-popupIndicator': {
                                color: '#000',
                            },
                            '& .MuiAutocomplete-input': {
                                padding: '6px 8px',
                                fontSize: '14px',
                            },
                        }}
                    />
                </div>
                <div className='flex flex-col items-start'>
                    <label htmlFor="crop-autocomplete" style={{ fontSize: '16px', whiteSpace: 'nowrap' }} className='text-left'>
                        Select District
                    </label>
                    <Autocomplete
                        id="crop-autocomplete"
                        options={District_list}
                        value={selectedDistrict}
                        onChange={handleselectedDistrictChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Select District"
                                variant="outlined"
                                size="small"
                                sx={{
                                    width: '300px',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '4px',
                                        padding: '4px 8px',
                                        fontSize: '14px',
                                        backgroundColor: '#fff',
                                        border: '1px solid #616161',
                                    },
                                }}
                            />
                        )}
                        sx={{
                            width: '250px',
                            '& .MuiAutocomplete-popupIndicator': {
                                color: '#000',
                            },
                            '& .MuiAutocomplete-input': {
                                padding: '6px 8px',
                                fontSize: '14px',
                            },
                        }}
                    />
                </div>
                <div className='flex flex-col items-start'>
                    <label htmlFor="crop-autocomplete" style={{ fontSize: '16px', whiteSpace: 'nowrap' }} className='text-left'>
                        Select Commodity
                    </label>
                    <Autocomplete
                        id="crop-autocomplete"
                        options={commodity_list}
                        value={selectedCommodity}
                        onChange={handleselectedCommodityChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Select Commoditity"
                                variant="outlined"
                                size="small"
                                sx={{
                                    width: '300px',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '4px',
                                        padding: '4px 8px',
                                        fontSize: '14px',
                                        backgroundColor: '#fff',
                                        border: '1px solid #616161',
                                    },
                                }}
                            />
                        )}
                        sx={{
                            width: '250px',
                            '& .MuiAutocomplete-popupIndicator': {
                                color: '#000',
                            },
                            '& .MuiAutocomplete-input': {
                                padding: '6px 8px',
                                fontSize: '14px',
                            },
                        }}
                    />
                </div>
                <div className='flex flex-col items-start'>
                    <label htmlFor="crop-autocomplete" style={{ fontSize: '16px', whiteSpace: 'nowrap' }} className='text-left'>
                        Pick Date
                    </label>
                    <DateRange_Picker onDateChange={(startDate, endDate) => {
                        setInitialDate(startDate);
                        setEndDate(endDate)
                    }} />
                </div>
                <div className='items-end pt-5'>
                    <button className='p-2 w-[120px]' onClick={handlesearch}>Search</button>
                </div>
            </div>
            <div className="mr-5">
                {price_table.length > 0 ? (
                    <Table className='m-5 rounded-xl shadow-md'>
                        <thead className='bg-[#3fc041] text-white text-left font-light '>
                            <tr className=''>
                                <td className="p-3">S.No</td>
                                <td className="p-3">Crop Name</td>
                                <td className="p-3">Market Place</td>
                                <td className="p-3">Date</td>
                                <td className="p-3">Min Price / Quintal</td>
                                <td className="p-3">Avg Price / Quintal</td>
                                <td className="p-3">Max Price / Quintal</td>
                            </tr>
                        </thead>
                        <tbody>
                            {price_table.map((content, index) => (
                                <tr key={index} className='text-left space-y-2'
                                    style={{ backgroundColor: index % 2 === 0 ? 'transparent' : '#F0FFF0' }}>
                                    <td style={{ textTransform: 'capitalize' }} className='p-5'>{index + 1}</td>
                                    <td style={{ textTransform: 'capitalize' }} className='p-5'>{content.commodity}</td>
                                    <td style={{ textTransform: 'capitalize' }} className='p-5'>{content.market}</td>
                                    <td style={{ textTransform: 'capitalize' }} className='p-5'>{content.arrival_date}</td>
                                    <td style={{ textTransform: 'capitalize' }} className='p-5'>{content.min_price}</td>
                                    <td style={{ textTransform: 'capitalize' }} className='p-5'>{content.modal_price}</td>
                                    <td style={{ textTransform: 'capitalize' }} className='p-5'>{content.max_price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <div>
                        <p className="text-center text-gray-500">Loading...</p>
                        <CircularProgress color='success' />
                    </div>
                )}
            </div>

        </>
    )
}

export default Mandi_price