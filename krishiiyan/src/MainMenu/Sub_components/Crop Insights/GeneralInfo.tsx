import React, { useEffect, useState } from 'react';
import { extractCodeFromDriveLink } from '../../../handleImageCode';
import ForwardIcon from '@mui/icons-material/Forward';
import { baseURL } from "../../../Services/Api";
import { CircularProgress, Table } from '@mui/material';

interface GeneralInfoProps {
    selectedCrop: string;
}

function GeneralInfo({ selectedCrop }: GeneralInfoProps) {
    interface Stage {
        images: string[];
        name: string;
    }

    const [stages, setStages] = useState<Stage[]>([]);
    const [generalin, setGeneralin] = useState<{ [key: string]: string }>({});
    // const [generalInfo, setGeneralInfo] = useState<{ [key: string]: string }>({});
    // console.log('General Information:', generalin);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${baseURL}/crops/${selectedCrop}`);
                const data = await response.json();
                setStages(data.data.stages);
                setGeneralin(data.data.generalInformation || {});
                // console.log('Fetched data:', data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [selectedCrop]);

    // Log the updated stages state after it's set
    // useEffect(() => {
    //     console.log('Updated stages:', stages);
    // }, [stages]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', overflowY: 'auto' }} className=''>
            {stages.length > 0 ? (
                stages.map((stage, index) => (
                    <figure key={index} style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', gap: '15px', alignItems: 'center' }}>
                        <div>
                            {stage.images && stage.images.length > 0 ? (
                                stage.images.map((image, imgIndex) => (
                                    <div key={imgIndex}>
                                        <img loading="lazy"
                                            style={{ width: 108, height: 108, borderRadius: '50%' }}
                                            src={`https://drive.google.com/thumbnail?id=${extractCodeFromDriveLink(image)}&sz=w1000`}
                                            alt={`Stage ${stage.name}`}
                                        />
                                    </div>
                                ))
                            ) : (
                                <p>No image available</p>
                            )}
                            <figcaption style={{ fontSize: '15px' }}>
                                {stage.name}
                            </figcaption>
                        </div>
                        {index < stages.length - 1 && (
                            <div>
                                <ForwardIcon style={{ fontSize: '40px', fontWeight: 'bold', color: "#3fc041" }} />
                            </div>
                        )}
                    </figure>
                ))
            ) : (
                <div>
                    <p>Loading stages...</p>
                    <CircularProgress color="success" />
                </div>
            )}

            <Table className='m-5 rounded-xl shadow-md'>
                <thead className='bg-[#3fc041] text-white text-left font-light'>
                    <tr>
                        <td className='p-3'>Parameter</td>
                        <td className='p-3'>Specification</td>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(generalin).map(([key, value], index) => (
                        <tr
                            key={index}
                            className='text-left space-y-2'
                            style={{ backgroundColor: index % 2 === 0 ? '#F0FFF0' : 'transparent' }}
                        >
                            <td style={{ textTransform: 'capitalize' }} className='p-5'>{key.replace(/_/g, ' ')}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default GeneralInfo;
