import React, { useEffect, useState } from 'react'
import { baseURL } from '../../../Services/Api';
interface HarvestProps {
    selectedCrop: string;
}
function Harvest({ selectedCrop }: HarvestProps) {
    const [harvest, setHarvest] = useState<any | null>(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${baseURL}/crops/${selectedCrop}`);
                const data = await response.json();
                setHarvest(data.data.newHarvest || {});
                console.log('Fetched data:', data.data.newHarvest);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [selectedCrop]);

    return (
        <div>Harvest</div>
    )
}

export default Harvest