import React from 'react'
import './Cultivating.css'

function Cultivating() {
    return (
        <>
            <div className='xl:flex xl:p-24 justify-between cul'>
                <div className='xl:w-[550px]'>
                    <h1 className='text-4xl text-left font-bold'>Cultivating Sustainable </h1>
                    <h1 className='text-[#3390FF] text-4xl text-left font-bold w-[300px]'>Success for Every Farmer</h1>
                    <p className='pl-10 pt-5 text-left text-xl text-[#616161]'>By Equiping farmers with knowledge and resources, Krishiyan enables them to : </p>
                    <ul className='text-xl text-left list-disc ml-14 leading-10 mt-4'>
                        <li>Maximize their productivity</li>
                        <li>Improve the quality of their product</li>
                        <li>Achieve fair prices for their crops.</li>
                    </ul>
                </div>

                <div className='container'>
                    <img src="./Images/image4.png" alt="loading" className='image_top' />
                    <img src="./Images/image.png" alt="loading" className='image_left' />
                    <img src="./Images/image9.png" alt="loading" className='image_right' />
                    <div className='h-20 w-20 bg-[#3390FF] rounded-full bigblue'></div>
                    <div className='h-32 w-32 bg-[#3FC041] rounded-full smallgreen'></div>
                    <div className='h-7 w-7 bg-[#3390FF] rounded-full smallblue'></div>
                </div>
            </div>
        </>
    )
}

export default Cultivating