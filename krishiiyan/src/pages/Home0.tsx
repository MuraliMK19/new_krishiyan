import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Home0() {
    // const navigate = useNavigate()
    const handleclick = () => {
        window.open("https://calendly.com/krishiyan-info/30min", "_blank");
    }

    return (
        <section id='home0' className='pt-24'>
            <motion.div
                className='flex justify-between ml-10 gap-x-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <div className='w-1/2 text-left top-0
                '>
                    <div className='bg-[#F1F1F1] flex items-center w-[250px] rounded-3xl justify-center'>
                        <img src="/Images/tabler_cloud-computing.png" alt="loading..." className='h-10 w-10 p-2' />
                        <p className='p-2 text-[16px] text-[#00BA03] font-semibold'>Cloud-Powered Platform</p>
                    </div>
                    <h1 className='text-[40px] font-extrabold pt-5'>Cloud-Powered Integrated Solutions for FPOs</h1>
                    <p className='text-[#4F4F4F] text-xl pt-5 text-justify font-semibold ml-2'>KrishiYan by WetAcre Sustainable Solutions is a cloud-based platform empowering farmers and FPOs with advanced tools for efficient farming, real-time insights, and seamless market access, fostering sustainable and profitable agriculture.</p>
                    <button className='mt-5 p-3 rounded-3xl w-56 font-bold tracking-wider text-lg' onClick={handleclick}>Request a Demo <span className='text-xl font-extrabold'>→</span></button>
                </div>
                <div className='w-1/2 flex justify-end mr-10'>
                    <img src="/Images/Home-image.png" alt="loading..." className='h-[483px] w-[476]' />
                </div>
            </motion.div>
        </section>
    )
}

export default Home0