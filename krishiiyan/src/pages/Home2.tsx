import React from 'react';
import { motion } from 'framer-motion';

function Home2() {
    const bgStyle = {
        backgroundImage: 'url("./Images/Aboutimg.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // paddingTop: '50px',
        color: 'white',
    };

    return (
        <section id='about' className='pt-24'>
            <motion.div
                style={bgStyle}
                className='md:p-20 flex flex-col justify-center items-center xl:mt-2 h-[44vh]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className='xl:mt-[-80px] ml-[-1300px]'>
                    <img src="./Images/double-bg.png" alt="loading" className='h-24 w-24 md:h-28 md:w-28' />
                </div>
                <motion.div
                    className="bg-[#3DB73E] opacity-90 rounded-xl rounded-br-none p-4 md:p-10 h-[40vh]"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className='text-2xl md:text-4xl pb-2'>About Us</h1>
                    <p className='text-sm md:text-xl text-opacity-100'>
                        Wetacre Sustainable Solutions Private Limited is a Gujarat-based startup founded in 2021 with the motive to encourage farming activity by integrating technology and real-time data to support farmers through Farmer Producer Organizations (FPOs). Our main objective is nurturing FPOs for systematic management of farmers and increasing the farmer engagement. The company works in the Phygital model, where Farmers can get seamless services from local FPOs through Krishiyan assisted platform for all type of services.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Home2;
