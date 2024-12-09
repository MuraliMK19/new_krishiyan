import React from 'react'
import './we_are.css'

function We_are_best() {
    return (
        <>
            <h1 className='text-3xl text-[#3FC041] p-2'>We Are Best For</h1>
            <h1 className='w-20 h-1 rounded-lg bg-[#3390FF] m-auto'></h1>
            <div className='xl:flex justify-center gap-28 pt-10 mt-5 bg-[#C0DDFF] font-semibold text-md cont'>
                <div className='w-28 '>
                    <img src="./Images/Group5.png" alt="loading" />
                    <h1 className='p-3'>Seamless Integration</h1>
                </div>
                <div className='w-28'>
                    <img src="./Images/Group1.png" alt="loading" />
                    <h1 className='p-3'>Access to Market Insights</h1>
                </div>
                <div className='w-28'>
                    <img src="./Images/Group2.png" alt="loading" />
                    <h1 className='p-3'>Quality Assessment tool</h1>
                </div>
                <div className='w-28'>
                    <img src="./Images/Group3.png" alt="loading" />
                    <h1 className='p-3'>Direct Connection</h1>
                </div>
                <div className='w-28'>
                    <img src="./Images/Group4.png" alt="loading" />
                    <h1 className='p-3'>Efficiency & Sustainability</h1>
                </div>
            </div>
        </>
    )
}

export default We_are_best