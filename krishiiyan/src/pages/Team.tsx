import React from 'react';
import ankitimg from '../assets/Images/profile.webp';

function Team() {
    return (
        <>
            <section className='bg-[#C0DDFF] sm:p-10 font-bold'>
                <h1 className='font-extrabold text-2xl sm:text-3xl sm:p-10'>Our Team</h1>
                <div className='h-1 w-14 rounded-xl bg-[#616161] mx-auto'></div>
                <div className='xl:flex'>
                    <figure className='w-full sm:w-1/4 m-5'>
                        <img src={"/Images/Ankit_photo.jpg"} alt="Ankit Mutpe" style={{ height: 250, width: 250 }} className="mx-auto rounded-full object-cover  outline outline-[10px] ring-[15px] ring-[#77CD94] outline-[#3FC041]" />
                        <figcaption className='xl:mx-12 mt-5 text-lg font-bold '>Ankit Mutpe</figcaption>
                        <figcaption className='text-gray-800 mx-12'>Co-Founder</figcaption>
                        <img src="/Images/Group39.png" alt="loading" className='m-auto' />
                    </figure>
                    <figure className='w-full sm:w-1/4 m-5'>
                        <img src={"/Images/Priya.jpeg"} alt="Priyadharshini" style={{ height: 250, width: 250 }} className="mx-auto rounded-full object-cover outline outline-[10px] ring-[15px] ring-[#77CD94] outline-[#3FC041]" />
                        <figcaption className=' xl:mx-12 mt-5 text-lg font-bold '>Priyadharshini</figcaption>
                        <figcaption className='text-gray-800  mx-12'>Co-Founder</figcaption>
                        <img src="/Images/Group39.png" alt="loading" className='m-auto' />
                    </figure>
                    <figure className='w-full sm:w-1/4 m-5'>
                        <img src={"/Images/Murali_photo.jpeg"} alt="Murali" style={{ height: 250, width: 250 }} className="mx-auto rounded-full object-cover outline outline-[10px] ring-[15px] ring-[#77CD94] outline-[#3FC041]" />
                        <figcaption className=' xl:mx-12 mt-5 text-lg font-bold '>Murali</figcaption>
                        <figcaption className='text-gray-800  mx-12'>Web Developer</figcaption>
                        <img src="/Images/Group39.png" alt="loading" className='m-auto' />
                    </figure>
                    <figure className='w-full sm:w-1/4 m-5'>
                        <img src={"/Images/chaitali.jpg"} alt="Vaibhav" style={{ height: 250, width: 250 }} className="mx-auto rounded-full object-cover outline outline-[10px] ring-[15px] ring-[#77CD94] outline-[#3FC041]" />
                        <figcaption className=' xl:mx-12 mt-5 text-lg font-bold '>Chaitali</figcaption>
                        <figcaption className='text-gray-800  mx-12'>App Developer</figcaption>
                        <img src="/Images/Group39.png" alt="loading" className='m-auto' />
                    </figure>
                </div>
            </section>
        </>
    );
}

export default Team;
