import React, { useEffect, useState } from 'react';
import { baseURL } from '../../../Services/Api';
import { Table } from '@mui/material';

interface PresowingProps {
    selectedCrop: string;
}

function Presowing({ selectedCrop }: PresowingProps) {
    const [presowing, setPresowing] = useState<any | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${baseURL}/crops/${selectedCrop}`);
                const data = await response.json();
                setPresowing(data.data?.presowingPractices || {});
                console.log('Fetched data:', data.data.presowingPractices);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [selectedCrop]);

    console.log('Presowing:', presowing);

    return (
        <div>
            {presowing ? (
                <Table className='mr-5 p-5 rounded-xl shadow-md'>
                    <thead className='bg-[#3fc041] text-white text-left font-light'>
                        <tr>
                            <td className='p-3'>Land Preparation</td>
                            <td className='p-3'>Seed Treatment</td>
                            <td className='p-3'>Intercultural Operation</td>
                            <td className='p-3'>Soil Condition</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-left space-y-2'
                            style={{ backgroundColor: '#F0FFF0' }}>
                            <td style={{ textTransform: 'capitalize' }} className='p-5'>{presowing.Land_Preparation || 'N/A'}</td>
                            <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                {presowing.Seed_treatment
                                    ? `${presowing.Seed_treatment.nameOfChemical}, Dosage: ${presowing.Seed_treatment.Dosage}`
                                    : 'N/A'}
                            </td>
                            <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                {presowing.Intercultural_Operations?.length > 0
                                    ? presowing.Intercultural_Operations.join(', ')
                                    : 'N/A'}
                            </td>
                            <td style={{ textTransform: 'capitalize' }} className='p-5'>{presowing.Soil_Conditions || 'N/A'}</td>
                        </tr>
                    </tbody>
                </Table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Presowing;
