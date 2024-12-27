import React from 'react'
import { useState } from "react";
import './Newcontact.css'


function NewContact() {
    const bgStyle = {
        backgroundImage: 'url("./Images/contact.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '10vh',
        color: 'white',
    };
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        subject: ""
    });

    const handleChange = (e: { target: { name: any; value: any } }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        const { name, email, phoneNumber, message, subject } = formData;
        const mailtoLink = `mailto:wetacre0@gmail.com?subject=${subject || 'Contact from Website'}&body=${message} - From: ${name}, Phone: ${phoneNumber}`;
        window.location.href = mailtoLink;
    };
    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
            subject: ""
        });
    };
    return (
        <section id='contact'>
            <div style={bgStyle} className='text-4xl p-5'>Contact Us</div>
            <section className="xl:flex xl:items-center xl:justify-between xl:p-10 whole-section">
                <div className="xl:w-1/2 space-y-5 mx-auto first-box">
                    <h1 className="text-lg font-semibold xl:text-left text-[#3390FF]">Send Us Email</h1>
                    <h1 className="text-3xl font-semibold xl:text-left pt-[-5px]">Feel Free to write</h1>
                    <div className='flex flex-wrap gap-5 ml-10 small-container'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border rounded p-2 w-full bg-[#EBF4FF] placeholder-[#616161] small-cont"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border rounded p-2 w-full bg-[#EBF4FF] placeholder-[#616161] small-cont "
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Enter Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="border rounded p-2 w-full bg-[#EBF4FF] placeholder-[#616161] small-cont"
                        />
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Enter Phone"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="border rounded p-2 w-full bg-[#EBF4FF] placeholder-[#616161] small-cont"
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Enter Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border rounded p-2 w-[93%] ml-[30px] h-32 bg-[#EBF4FF] placeholder-[#616161] text-area1"
                    ></textarea>
                    <div className='flex ml-10'>
                        <button
                            onClick={handleSubmit}
                            className="bg-[#3FC041] text-white px-6 py-2 rounded-md hover:bg-blue-600 flex justify-start xl:w-40"
                        >
                            Send Message
                        </button>
                        <button
                            onClick={handleReset}
                            className="bg-[#3FC041] text-white px-6 py-2 rounded-md hover:bg-blue-600 flex justify-start w-30"
                        >
                            Reset
                        </button>
                    </div>

                </div>
                <div className='second-box'>
                    <h1 className='text-left pb-3 text-lg text-[#3390ff] font-semibold'>Need Any Help?</h1>
                    <h1 className='text-left pb-3 text-2xl font-semibold'>Get in Touch with us</h1>
                    <p className='text-left pb-3 text-[#3390ff] '>At Krishiyan, we are dedicated to providing innovative solutions for farmers and Farmer Producer Organizations (FPOs). Reach out to us and let's work together to cultivate growth and sustainability.</p>
                    <div className='flex flex-col icon-box mt-5'>
                        <div className='flex gap-10 items-center text-left mb-10'>
                            <div>
                                <img src="/Images/material-symbols_call.png" alt="loading" />
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl'>Have a Question?</h1>
                                <p>+91 70667 44494</p>
                            </div>
                        </div>
                        <div className='flex gap-10 items-center  text-left mb-5'>
                            <div>
                                <img src="/Images/material-symbols_mail.png" alt="loading" />
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl'>Email Us</h1>
                                <p>info@krishiyan.com</p>
                            </div>
                        </div>
                        <div className='flex gap-10 items-center text-left mb-5'>
                            <div >
                                <img src="/Images/mdi_location.png" alt="loading" className='h-12 w-20 xl:w-14' />
                            </div>
                            <div>
                                <h1 className='font-semibold text-xl'>Contact Us</h1>
                                <p>WetAcre Sustainable Solution Private Limited, <br
                                /> CrAdLE, Village Bhat, Gandhinagar, Gujarat, <br />382428 - India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default NewContact