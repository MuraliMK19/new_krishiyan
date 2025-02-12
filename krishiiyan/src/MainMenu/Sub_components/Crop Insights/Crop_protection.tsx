import React, { useEffect, useState } from 'react'
import { baseURL } from '../../../Services/Api';
import { Table } from '@mui/material';
import { extractCodeFromDriveLink } from '../../../handleImageCode';
interface Crop_protectionProps {
    selectedCrop: string;
}
function Crop_protection({ selectedCrop }: Crop_protectionProps) {

    const [cropProtection, setCropProtection] = useState<any | null>(null);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [pestManagement, setPestManagement] = useState<any[]>([]);
    const [diseaseManagement, setDiseaseManagement] = useState<any[]>([]);
    const [deficiencySymptoms, setDeficiencySymptoms] = useState<any[]>([]);
    const [weedManagement, setWeedManagement] = useState<any[]>([]);
    const [weatherInjuries, setWeatherInjuries] = useState<any[]>([]);


    const menuItems = {
        "Pest Management": "Pest Management",
        "Disease Management": "Disease Management",
        "Deficiency Symptoms": "Deficiency Symptoms",
        "Weed Management": "Weed Management",
        "Weather Injuries": "Weather Injuries",
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${baseURL}/crops/${selectedCrop}`);
                const data = await response.json();
                setPestManagement(data.data.pestManagement || {});
                setDiseaseManagement(data.data.diseaseManagement || {});
                setDeficiencySymptoms(data.data.deficiencySymptoms || {});
                setWeedManagement(data.data.weedManagement || {});
                setWeatherInjuries(data.data.weatherInjuries || {});
                // console.log('Fetched data:', data.data.weatherInjuries);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [selectedCrop]);
    return (
        <div>
            <div>
                <ul className='flex flex-row space-x-5 justify-center'>
                    {Object.keys(menuItems).map((menu) => (
                        <li
                            key={menu}
                            className={`py-2 px-4 cursor-pointer transition ${activeSubmenu === menu ? "border-4 shadow-md border-b-4 border-b-[#3fc041] border-gray-200 text-[#3fc041]" : "hover:bg-gray-200 border-2 shadow-md border-gray-200"
                                }`}
                            onClick={() => setActiveSubmenu(menu)}
                        >
                            {menu}
                        </li>
                    ))}
                </ul>
            </div>

            {/* {PEST MANAGEMENT} */}
            {activeSubmenu === 'Pest Management' && (
                <div className='p-5'>
                    {pestManagement ? (
                        <Table mr-5 p-5 rounded-xl shadow-md>
                            <thead className='bg-[#3fc041] text-white text-left font-light'>
                                <tr>
                                    <td className='p-3'>S.no</td>
                                    <td className='p-3'>Name of the Pest</td>
                                    <td className='p-3'>Image(Pest/Damage)</td>
                                    <td className='p-3'>Solution to the issue</td>
                                </tr>
                            </thead>
                            <tbody>
                                {pestManagement.map((item: any, index: number) => (
                                    <tr key={index} className='text-left space-y-2'
                                        style={{ backgroundColor: index % 2 === 0 ? 'transparent' : '#F0FFF0' }}>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{index + 1}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.name}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.images.map((image: any) => {
                                            return (
                                                <img
                                                    src={`https://drive.google.com/thumbnail?id=${extractCodeFromDriveLink(
                                                        image
                                                    )}&sz=w1000`}
                                                    style={{
                                                        marginTop: "20px",
                                                        width: "250px",
                                                        height: "200px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            );
                                        })}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.solutions}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </Table>
                    ) : (
                        <div>
                            <p>Loading pest data...</p>
                        </div>
                    )
                    }
                </div>
            )}
            {/* {DISEASE MANAGEMENT} */}
            {activeSubmenu === 'Disease Management' && (
                <div className='p-5'>
                    {diseaseManagement ? (
                        <Table mr-5 p-5 rounded-xl shadow-md>
                            <thead className='bg-[#3fc041] text-white text-left font-light'>
                                <tr>
                                    <td className='p-3'>S.no</td>
                                    <td className='p-3'>Name</td>
                                    <td className='p-3'>Image(Pest/Damage)</td>
                                    <td className='p-3'>Notable Symptoms</td>
                                    <td className='p-3'>Solution</td>
                                </tr>
                            </thead>
                            <tbody>
                                {diseaseManagement && diseaseManagement.map((item: any, index: number) => (
                                    <tr key={index} className='text-left space-y-2'
                                        style={{ backgroundColor: index % 2 === 0 ? '#F0FFF0' : 'transparent' }}>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{index + 1}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.name}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.images.map((image: any) => {
                                            return (
                                                <img
                                                    src={`https://drive.google.com/thumbnail?id=${extractCodeFromDriveLink(
                                                        image
                                                    )}&sz=w1000`}
                                                    style={{
                                                        marginTop: "20px",
                                                        width: "250px",
                                                        height: "200px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            );
                                        })}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.symptoms}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.solutions}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) : (
                        <div>
                            <p>Loading pest data...</p>
                        </div>
                    )
                    }
                </div>
            )}
            {/* DEFICIENCY MANAGEMENT */}
            {/* {activeSubmenu === 'Deficiency Symptoms' && (
                <div className='p-5'>
                    <Table mr-5 p-5 rounded-xl shadow-md>
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
                            {deficiencySymptoms && deficiencySymptoms.map((item: any, index: number) => (
                                <tr key={index} className='text-left space-y-2'
                                    style={{ backgroundColor: index % 2 === 0 ? '#F0FFF0' : 'transparent' }}>
                                    <td style={{ textTransform: 'capitalize' }} className='p-5'>{index + 1}</td>
                                    <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.name}</td>
                                    <td className=" font-thin">{item.Dosage}</td>
                                    <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.age}</td>
                                    <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.Method_application}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )} */}
            {/* WEED MANAGEMENT */}

            {activeSubmenu === 'Weed Management' && (
                <div className='p-5'>
                    {weedManagement ? (
                        <Table mr-5 p-5 rounded-xl shadow-md>
                            <thead className='bg-[#3fc041] text-white text-left font-light'>
                                <tr>
                                    <td className='p-3'>S.no</td>
                                    <td className='p-3'>Type of Weed</td>
                                    <td className='p-3'>Weed Name(Local)</td>
                                    <td className='p-3'>Weed Image</td>
                                    <td className='p-3'>Solution (Product)</td>
                                </tr>
                            </thead>
                            <tbody>
                                {weedManagement && weedManagement.map((item: any, index: number) => (
                                    <tr key={index} className='text-left space-y-2'
                                        style={{ backgroundColor: index % 2 === 0 ? 'transparent' : '#F0FFF0' }}>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{index + 1}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.category}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.name}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                            {Array.isArray(item.image) ? (
                                                item.image.map((image: any, imgIndex: number) => (
                                                    <img
                                                        key={imgIndex}
                                                        src={`https://drive.google.com/thumbnail?id=${extractCodeFromDriveLink(image)}&sz=w1000`}
                                                        style={{
                                                            marginTop: "20px",
                                                            width: "250px",
                                                            height: "200px",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                ))
                                            ) : (
                                                <img
                                                    src={`https://drive.google.com/thumbnail?id=${extractCodeFromDriveLink(item.image)}&sz=w1000`}
                                                    style={{
                                                        marginTop: "20px",
                                                        width: "250px",
                                                        height: "200px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            )}
                                        </td>

                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.solutions}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) : (
                        <div>
                            <p>Loading Weed data...</p>
                        </div>
                    )
                    }
                </div>
            )}

            {/* Weather Injuries */}
            {activeSubmenu === 'Weather Injuries' && (
                <div className='p-5'>
                    {weatherInjuries ? (
                        <Table mr-5 p-5 rounded-xl shadow-md>
                            <thead className='bg-[#3fc041] text-white text-left font-light'>
                                <tr>
                                    <td className='p-3'>S.no</td>
                                    <td className='p-3'>Type of Injury</td>
                                    <td className='p-3'>Image</td>
                                    <td className='p-3'>Causes</td>
                                    <td className='p-3'>Symptoms</td>
                                </tr>
                            </thead>
                            <tbody>
                                {weatherInjuries && weatherInjuries.map((item: any, index: number) => (
                                    <tr key={index} className='text-left space-y-2'
                                        style={{ backgroundColor: index % 2 === 0 ? 'transparent' : '#F0FFF0' }}>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{index + 1}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.type_injury}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>
                                            {Array.isArray(item.image) ? (
                                                item.image.map((image: any, imgIndex: number) => (
                                                    <img
                                                        key={imgIndex}
                                                        src={`https://drive.google.com/thumbnail?id=${extractCodeFromDriveLink(image)}&sz=w1000`}
                                                        style={{
                                                            marginTop: "20px",
                                                            width: "250px",
                                                            height: "200px",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                ))
                                            ) : (
                                                <img
                                                    src={`https://drive.google.com/thumbnail?id=${extractCodeFromDriveLink(item.image)}&sz=w1000`}
                                                    style={{
                                                        marginTop: "20px",
                                                        width: "250px",
                                                        height: "200px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            )}
                                        </td>

                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.causes}</td>
                                        <td style={{ textTransform: 'capitalize' }} className='p-5'>{item.symptoms}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) : (
                        <div>
                            <p>Loading Weed data...</p>
                        </div>
                    )
                    }
                </div>
            )}
        </div>
    )
}
export default Crop_protection