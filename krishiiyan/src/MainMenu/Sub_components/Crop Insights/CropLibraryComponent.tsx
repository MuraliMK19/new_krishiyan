import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Autocomplete, TextField, Button, Box } from '@mui/material';
import GeneralInfo from './GeneralInfo';
import Nutrient from './Nutrient';
import Varieties from './Varieties';
import Presowing from './Presowing';
import Crop_protection from './Crop_protection';
import IrrigationManagement from './IrrigationManagement';
import Harvest from './Harvest';
import FAQ from './FAQ';

function CropLibraryComponent() {
    const [crops, setCrops] = useState<string[]>([]);
    const [selectedCrop, setSelectedCrop] = useState<string | "Maize">("Maize");
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    useEffect(() => {
        const fetchCrops = async () => {
            try {
                const response = await axios.get('https://krishiyanback.vercel.app/api/all/crops');
                if (response.data.success) {
                    setCrops(response.data.data);
                } else {
                    console.error('Error fetching crops:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching crops:', error);
            }
        };

        fetchCrops();
    }, []);

    const handleCropChange = (_event: React.SyntheticEvent, newValue: string | null) => {
        setSelectedCrop(
            newValue === null ? 'Maize' : newValue
        );
    };

    const handleButtonClick = () => {
        console.log('Selected Crop:', selectedCrop);
        // Add further logic for button click if needed
        setActiveSubmenu("General Information");
    };

    const menuItems = {
        "General Information": "General Information",
        "Varieties": "Varieties",
        "Pre-sowing Practices": "Pre-sowing Practices",
        "Nutrient Management": "Nutrient Management",
        "Crop Protection": "Crop Protection",
        "Irrigation Management": "Irrigation Management",
        "Harvest": "Harvest",
        "FAQs": "FAQs",
    };
    const renderSubmenuContent = () => {
        switch (activeSubmenu) {
            case "General Information":
                return <GeneralInfo selectedCrop={selectedCrop} />;
            case "Varieties":
                return <Varieties selectedCrop={selectedCrop} />;
            case "Pre-sowing Practices":
                return <Presowing selectedCrop={selectedCrop} />;
            case "Nutrient Management":
                return <Nutrient selectedCrop={selectedCrop} />;
            case "Crop Protection":
                return <Crop_protection selectedCrop={selectedCrop} />
            case "Irrigation Management":
                return <IrrigationManagement selectedCrop={selectedCrop} />
            case "Harvest":
                return <Harvest selectedCrop={selectedCrop} />;
            case "FAQs":
                return <FAQ selectedCrop={selectedCrop} />
            default:
                return <GeneralInfo selectedCrop={selectedCrop} />;
        }
    }
    return (
        <div className='p-[4px] !important'>
            <div className='flex justify-between bg-white p-4 rounded-t-lg shadow-md'>
                <div>
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000' }} className='inline-block'>Crop Library</h3>
                    <div className='flex items-center'>
                        <img src="/Images/Maize.png" alt="loading.." className='h-20 w-20 m-5' />
                        <p className='text-xl'>{selectedCrop}</p>
                    </div>

                </div>

                <Box display="flex" alignItems="start" gap={2} mt={2}>
                    {/* Label */}
                    <label htmlFor="crop-autocomplete" style={{ fontSize: '16px', whiteSpace: 'nowrap' }}>
                        Select Your Crop :
                    </label>

                    {/* Autocomplete Dropdown */}
                    <Autocomplete
                        id="crop-autocomplete"
                        options={crops}
                        value={selectedCrop}
                        onChange={handleCropChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Select Crop Name"
                                variant="outlined"
                                size="small"
                                sx={{
                                    width: '250px',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '4px',
                                        padding: '4px 8px',
                                        fontSize: '14px',
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

                    {/* Search Button */}
                    <Button
                        onClick={handleButtonClick}
                        variant="contained"
                        sx={{
                            backgroundColor: '#3fc041',
                            color: '#fff',
                            padding: '6px 16px',
                            fontSize: '14px',
                            borderRadius: '4px',
                            '&:hover': {
                                backgroundColor: '#36ac39',
                            },
                        }}
                    >
                        Search
                    </Button>
                </Box>
            </div>
            <div className="bg-white rounded-lg shadow-md sticky top-20">
                <ul className="flex items-center justify-around text-base">
                    {Object.keys(menuItems).map((menu) => (
                        <li
                            key={menu}
                            className={`p-3 cursor-pointer rounded-sm transition ${activeSubmenu === menu ? " border-b-4 border-[#3fc041] text-[#3fc041]" : "hover:bg-gray-200"
                                }`}
                            onClick={() => setActiveSubmenu(menu)}
                        >
                            {menu}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                {renderSubmenuContent()}
            </div>
        </div>
    );
}

export default CropLibraryComponent;
