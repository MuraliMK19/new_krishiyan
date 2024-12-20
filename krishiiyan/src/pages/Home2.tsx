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

                <motion.div
                    className="bg-[#3DB73E] opacity-90 rounded-xl p-4 md:p-10 h-[40vh]"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className='text-2xl md:text-4xl pb-2'>About Us</h1>
                    <p className='text-sm md:text-[22px] xl:leading-9 text-opacity-100'>
                        KrishiYan by WetAcre Sustainable Solutions is a comprehensive, cloud-based agricultural platform designed to revolutionize farming and agribusiness management. Built to support both farmers and FPOs, KrishiYan integrates advanced data analytics, real-time advisory, and streamlined logistics, all accessible through a centralized digital interface. By leveraging cloud technology, KrishiYan offers secure, scalable, and on-demand tools for every stage of the farming cycle, from cultivation to market linkage.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Home2;
