import React, { useEffect, useState } from 'react';

function GeneralInfo() {
    interface Stage {
        images: string[];
        name: string;
    }

    const [stages, setStages] = useState<Stage[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://krishiyanback.vercel.app/api/crops/Maize');
                const data = await response.json();
                setStages(data.data.stages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {stages.map((stage, index) => (
                <div key={index}>
                    {/* Check if the images array has a valid image */}
                    {stage.images.length > 0 ? (
                        <img src={stage.images[0]} alt={`Stage ${index + 1}`} />
                    ) : (
                        <p>No image available</p>
                    )}
                    <p>{stage.name}</p>
                </div>
            ))}
        </div>
    );
}

export default GeneralInfo;
