import React from 'react'
import './Cultivating.css'

function Cultivating() {
    return (
        <>
            <div className='xl:flex justify-around cul'>
                <div className='xl:ml-24 xl:mt-10 cultivate'>
                    <h1 className='text-4xl text-left font-bold xl:ml-2 culti'>Phygital Model for Maximum Reach</h1>
                    {/* <h1 className='text-[#3390FF] text-4xl text-left font-bold ml-2'>Success for Every</h1> */}
                    <h1 className='text-[#3390FF] text-2xl mt-2 text-left font-bold ml-2'>KrishiYan functions on a Phygital Model</h1>
                    <p className='pl-2 pt-5 text-left text-xl text-[#616161]'>Combining digital cloud services with local, on-ground support from FPO hubs. Farmers access KrishiYan’s digital platform remotely for advisory and market services, while local FPO centers provide hands-on assistance, ensuring comprehensive support at every step of the farming process</p>
                    <ul className='text-xl text-left list-disc ml-14 leading-10 mt-4'>
                        <li>Capacity Building and Infrastructure Support</li>
                        <li>Quality Control and Market Competitiveness</li>
                        <li>Continuous Training and Knowledge Sharing</li>
                    </ul>
                </div>

                <div className='container'>
                    <img src="./Images/image4.png" alt="loading" className='image_top' />
                    <img src="./Images/image.png" alt="loading" className='image_left' />
                    <img src="./Images/image9.png" alt="loading" className='image_right' />
                    <div className='h-20 w-20 bg-[#3390FF] rounded-full bigblue'></div>
                    <div className='h-32 w-32 bg-[#3FC041] rounded-full smallgreen'></div>
                    <div className='h-7 w-7 bg-[#3390FF] rounded-full smallblue'></div>
                </div>
            </div>
        </>
    )
}

export default Cultivating