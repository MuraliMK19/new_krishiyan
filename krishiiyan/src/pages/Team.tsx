import { ClassNames } from '@emotion/react';
import React from 'react';

function Team() {
    return (
        <section className='bg-[#C0DDFF] font-bold pt-10 mt-5' id='team'>
            <h1 className='font-extrabold text-2xl sm:text-3xl sm:p-10'>Our Team</h1>
            <div className='h-1 w-14 rounded-xl bg-[#616161] mx-auto xl:mt-[-20px]'></div>
            <div className='xl:flex'>
                <figure className='w-full sm:w-1/2 m-5'>
                    <img src={"/Images/Ankit_photo.jpg"} alt="Ankit Mutpe" style={{ height: 230, width: 230 }} className="mx-auto rounded-full object-cover  outline outline-[10px] ring-[20px] ring-[#77CD94] outline-[#3FC041]" />
                    <figcaption className='xl:mx-12 mt-5 text-lg font-bold '>Ankit Mutpe</figcaption>
                    <figcaption className='text-gray-800 mx-12'>Co-Founder</figcaption>
                    <div className='flex w-24 justify-center m-auto'>
                        <img src="/Images/skill-icons_linkedin.png" alt="loading" className='m-auto h-[22px] w-[22px]' />
                        <img src="/Images/e-mail-filled.png" alt="loading" className='m-auto h-[22px] w-[22px]' />
                    </div>
                </figure>
                <figure className='w-full sm:w-1/2 m-5'>
                    <img src={"/Images/Priya.jpeg"} alt="Priyadharshini" style={{ height: 230, width: 230 }} className="mx-auto rounded-full object-cover outline outline-[10px] ring-[15px] ring-[#77CD94] outline-[#3FC041]" />
                    <figcaption className=' xl:mx-12 mt-5 text-lg font-bold '>Priyadharshini</figcaption>
                    <figcaption className='text-gray-800  mx-12'>Co-Founder</figcaption>
                    <div className='flex w-24 justify-center m-auto'>
                        <img src="/Images/skill-icons_linkedin.png" alt="loading" className='m-auto h-[22px] w-[22px]' />
                        <img src="/Images/e-mail-filled.png" alt="loading" className='m-auto h-[22px] w-[22px]' />
                    </div>
                </figure>
                <figure className='w-full sm:w-1/2 m-5'>
                    <img src={"/Images/Murali_photo.jpeg"} alt="Murali" style={{ height: 230, width: 230 }} className="mx-auto rounded-full object-cover outline outline-[10px] ring-[15px] ring-[#77CD94] outline-[#3FC041]" />
                    <figcaption className=' xl:mx-12 mt-5 text-lg font-bold '>Murali</figcaption>
                    <figcaption className='text-gray-800  mx-12'>Web Developer</figcaption>
                    <div className='flex w-24 justify-center m-auto'>
                        <img src="/Images/skill-icons_linkedin.png" alt="loading" className='m-auto h-[22px] w-[22px]' />
                        <img src="/Images/e-mail-filled.png" alt="loading" className='m-auto h-[22px] w-[22px]' />
                    </div>
                </figure>
                <figure className='w-full sm:w-1/2 m-5'>
                    <img src={"/Images/chaitali.jpg"} alt="Vaibhav" style={{ height: 230, width: 230 }} className="mx-auto rounded-full object-cover outline outline-[10px] ring-[15px] ring-[#77CD94] outline-[#3FC041]" />
                    <figcaption className=' xl:mx-12 mt-5 text-lg font-bold '>Chaitali</figcaption>
                    <figcaption className='text-gray-800  mx-12'>App Developer</figcaption>
                    <div className='flex w-24 justify-center m-auto'>
                        <img src="/Images/skill-icons_linkedin.png" alt="loading" className='m-auto h-[22px] w-[22px]' />
                        <img src="/Images/e-mail-filled.png" alt="loading" className='m-auto h-[22px] w-[22px]' />
                    </div>
                </figure>
            </div>
        </section>
    );
}

export default Team;
