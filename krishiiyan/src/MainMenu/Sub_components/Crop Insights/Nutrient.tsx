import React, { useEffect, useState } from 'react';
import { baseURL } from '../../../Services/Api';
import { CircularProgress, Table } from '@mui/material';

interface NutrientProps {
    selectedCrop: string;
}

// Define the expected data structure
interface NutrientData {
    name: string;
    Dosage: string;
    age?: string;
    Method_application: string;
}

function Nutrient({ selectedCrop }: NutrientProps) {
    const [nutrient, setNutrient] = useState<NutrientData[]>([]); // Use an array instead of an object

    // console.log('Nutrient:', nutrient);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${baseURL}/crops/${selectedCrop}`);
                const data = await response.json();
                setNutrient(data.data.nutrient || []);
                // console.log('Fetched data:', data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [selectedCrop]);

    return (
        <div>
            {nutrient.length > 0 ? (
                <Table className='mr-5 p-5 rounded-xl shadow-md'>
                    <thead className='bg-[#3fc041] text-white text-left font-light'>
                        <tr>
                            <td className='p-3'>S.no</td>
                            <td className='p-3'>Nutrient</td>
                            <td className='p-3'>Dosage (kg/acre)</td>
                            <td className='p-3'>Age of the Crop</td>
                            <td className='p-3'>Method of Application</td>
                        </tr>
                    </thead>
                    <tbody>
                        {nutrient.map((nutrient: any, index: number) => {
                            if (nutrient.name && nutrient.Dosage && nutrient.age && nutrient.Method_application) {
                                return (
                                    <tr key={index} className='text-left space-y-2'
                                        style={{ backgroundColor: index % 2 === 0 ? '#F0FFF0' : 'transparent' }}>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                            {index + 1}
                                        </td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                            {nutrient.name}
                                        </td>
                                        <td className=" font-thin">
                                            {nutrient.Dosage}
                                        </td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                            {nutrient.age}
                                        </td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                            {nutrient.Method_application}
                                        </td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </Table>
            ) : (
                <div>
                    <CircularProgress color="success" />
                    <p>Loading nutrient data...</p>
                </div>
            )
            }
        </div>
    );
}

export default Nutrient;
