import React, { useEffect, useState } from 'react'
import { baseURL } from '../../../Services/Api';
import { CircularProgress, Table } from '@mui/material';
interface IrrigationManagementProps {
    selectedCrop: string;
}

function IrrigationManagement({ selectedCrop }: IrrigationManagementProps) {
    const [irrigation, setIrrigation] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseURL}/crops/${selectedCrop}`);
                const data = await response.json();
                setIrrigation(data.data.irrigation || []);
                console.log('Fetched data:', data.data.irrigation);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [selectedCrop]);

    return (
        <div>
            {irrigation.length > 0 ? (
                <div>
                    <div className=''>
                        <Table className='mr-5 p-5 rounded-xl shadow-md'>
                            <thead className='bg-[#3fc041] text-white text-left font-light'>
                                <tr>
                                    <td className='p-3'>S.no</td>
                                    <td className='p-3'>Age</td>
                                    <td className='p-3'>Critical Stage</td>
                                    <td className='p-3'>Methodology</td>
                                    <td className='p-3'>Operations</td>
                                </tr>
                            </thead>

                            <tbody>
                                {irrigation.map((irrigation: any, index: number) => {
                                    if (irrigation.age) {
                                        return (
                                            <tr key={index} className='text-left space-y-2'
                                                style={{ backgroundColor: index % 2 === 0 ? 'transparent' : '#F0FFF0' }}>
                                                <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                                    {index + 1}
                                                </td>
                                                <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                                    {irrigation.age}
                                                </td>
                                                <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                                    {irrigation.criticalStage}
                                                </td>
                                                <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                                    {irrigation.methodology}
                                                </td>
                                                <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                                    {irrigation.operations}
                                                </td>
                                            </tr>
                                        )
                                    }
                                    return null;
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            ) : (
                <div>
                    {/* <LinearProgress color="success" /> */}
                    <CircularProgress color="success" />
                    <p>Loading irrigation management...</p>
                </div>
            )}
        </div>
    );
}

export default IrrigationManagement