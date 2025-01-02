import React from 'react'
import './we_are.css'

function We_are_best() {
    return (
        <>
            <h1 className='text-[32px] font-bold text-[#3FC041] p-2'>Krishiyan is Best For</h1>
            <h1 className='w-20 h-1 rounded-lg bg-[#3390FF] m-auto'></h1>
            <div className='bg-[#C0DDFF] font-medium text-lg cont mt-5'>
                <div className='first_cards'>
                    <div className='w-28'>
                        <img src="./Images/Group5.png" alt="loading" />
                        <h1 className='p-3'>Seamless Integration</h1>
                    </div>
                    <div className='w-28'>
                        <img src="./Images/Group1.png" alt="loading" />
                        <h1 className='p-3 w-24'>Market Insights</h1>
                    </div>
                    <div className='w-28'>
                        <img src="./Images/Group2.png" alt="loading" />
                        <h1 className='p-3'>Quality Assessment</h1>
                    </div>
                    <div className='w-28'>
                        <img src="./Images/Group3.png" alt="loading" />
                        <h1 className='p-3'>Direct Connection</h1>
                    </div>
                    <div className='w-28'>
                        <img src="./Images/Group4.png" alt="loading" />
                        <h1 className='p-3 xl:w-36'>Efficiency & Sustainability</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default We_are_best