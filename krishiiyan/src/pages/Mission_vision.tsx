import React from 'react';
import { motion } from 'framer-motion';
import './mission.css'

function Mission_vision() {
    return (
        <section id='about'>
            <div className="xl:flex p-10 text-white text-xl xl:space-x-16 justify-center wholebox">
                <div className="bg-[#3390FF] p-10 xl:w-[550px] rounded-xl xl:h-[320px] Mission_box">
                    <h1 className="text-2xl font-bold mb-4">Mission</h1>
                    <p>
                        By harnessing the power of cloud computing, KrishiYan offers farmers and FPOs a secure, scalable solution for digital farming. Its cloud-based capabilities enable real-time data access, efficient management, and market connectivity, all while supporting a sustainable and profitable farming ecosystem.
                    </p>
                </div>


                <div className="bg-[#3390FF] p-10 xl:w-[550px] h-[320px] rounded-xl Vision_box">
                    <h1 className="text-2xl font-bold mb-4">Vision</h1>
                    <p>
                        Our vision is to create a sustainable and inclusive agricultural ecosystem where every farmer has the opportunity to thrive, every buyer has access to quality produce, and every stakeholder benefits from transparent and efficient supply chains.
                    </p>
                </div>
            </div>
            <div className='flex justify-center mt-[-270px]'>
                <img src="./Images/logo1-bg.jpg" alt="loading" className="h-36 w-36 rounded-full  bg-white absolute image1 " />
            </div>
            <div className='h-[270px]'></div>
        </section>
    );
}

export default Mission_vision;
