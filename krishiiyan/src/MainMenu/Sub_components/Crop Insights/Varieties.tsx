import React, { useEffect, useState } from 'react'
import { baseURL } from '../../../Services/Api';
import { Table } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';


interface VarietiesProps {
    selectedCrop: string;
}
function Varieties({ selectedCrop }: VarietiesProps) {

    const [variety, setVariety] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${baseURL}/varity/${selectedCrop}`);
                const data = await response.json();
                setVariety(data.data || []);
                // console.log('Fetched data:', data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [selectedCrop]);

    return (
        <div>
            {variety.length > 0 ? (
                <Table className='mr-5 p-5 rounded-xl shadow-md'>
                    <thead className='bg-[#3fc041] text-white text-left font-light'>
                        <tr>
                            <td className='p-3'>S.no</td>
                            <td className='p-3'>Name of the Variety/hybrid </td>
                            <td className='p-3'>Product Condition</td>
                            <td className='p-3'>Area of Adoption</td>
                            <td className='p-3'>Crop Cycle</td>
                            <td className='p-3'>Speciality</td>
                        </tr>
                    </thead>
                    <tbody>
                        {variety.map((variety: any, index: number) => {
                            if (variety.nameOfvariety && variety.productCondition && variety.areaOfadadoption && variety.cropCycle && variety.salientFeatures) {
                                return (
                                    <tr key={index} className='text-left space-y-2'
                                        style={{ backgroundColor: index % 2 === 0 ? '#F0FFF0' : 'transparent' }}>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                            {index + 1}
                                        </td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                            {variety.nameOfvariety}
                                        </td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                            {variety.productCondition}
                                        </td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                            {variety.areaOfadadoption}
                                        </td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                            {variety.cropCycle}
                                        </td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                            {variety.salientFeatures}
                                        </td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </Table>
            ) : (
                <div>
                    {/* <LinearProgress color="success" /> */}
                    <CircularProgress color="success" />
                    <p>Loading varieties...</p>
                </div>
            )}
        </div>
    )
}

export default Varieties