import React from 'react'
import './centerlogo.css'
function Servicescenterlogo() {
    return (
        <div className="center-logo">
            <h1 className='text-3xl font-semibold mt-5'>Services</h1>
            <div className='h-1 w-14 rounded-xl bg-[#616161] mx-auto xl:mt-[20px] xl:mb-[30px]'></div>
            <p className='points'></p>
            <div className="logo-container mx-auto xl:w-[60vw] mb-[20px]">
                <img src="/Images/Chart.png" alt="loading" />
            </div>
        </div>
    );
}

export default Servicescenterlogo