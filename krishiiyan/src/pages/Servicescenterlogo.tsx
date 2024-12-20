import React from 'react'
import './centerlogo.css'
function Servicescenterlogo() {
    return (
        <div className="center-logo">
            <h1 className='text-[32px] font-bold mt-5 text-[#3fc041]'>Services Offered By KrishiYan</h1>
            <div className='h-1 w-14 rounded-xl bg-[#616161] mx-auto xl:mt-[20px] xl:mb-[30px]'></div>
            <p className='points'></p>
            <div className="logo-container mx-auto xl:w-[60vw] mb-[20px] hidden lg:block">
                <img src="/Images/Chart.png" alt="loading" />
            </div>
            <h1 className='text-[#3fc041] font-semibold text-lg pt-5 xl:hidden lg:hidden block'>Services to FPO's</h1>
            <div className='mobile-boxes m-2 font-semibold xl:hidden'>
                <div className='rounded-lg p-3 service-box'>
                    <img src="/Images/majesticons_data.png" alt="loading.." className='h-8 w-8 m-auto' />
                    <p className='text-xs'>Cultivation Insights and Data Analytics</p>
                </div>
                <div className=' rounded-lg p-3 service-box'>
                    <img src="/Images/gis_network.png" alt="loading.." className='h-8 w-8 m-auto' />
                    <p className='text-xs'>Seamless networking With Industries</p>
                </div>
                <div className=' rounded-lg p-3 service-box'>
                    <img src="/Images/icon-park-outline_sales-report.png" alt="loading.." className='h-8 w-8 m-auto' />
                    <p className='text-xs'>Enquiry posting and sales deal Connectivity</p>
                </div>
            </div>
            <div className='flex justify-around space-x-5 ml-16 mr-16 font-semibold xl:hidden lg:hidden'>
                <div className=' rounded-lg p-3 service-box wide1'>
                    <img src="/Images/fluent_communication-person-20-filled.png" alt="loading.." className='h-8 w-8 m-auto' />
                    <p className='text-xs'>Real-time communication and negotiation</p>
                </div>
                <div className=' rounded-lg p-3 service-box wide2'>
                    <img src="/Images/hugeicons_trade-up.png" alt="loading.." className='h-8 w-8 m-auto' />
                    <p className='text-xs'>Transparent trade management</p>
                </div>
            </div>
            {/* {next service} */}
            <h1 className='text-[#3390FF] font-semibold text-lg pt-10 xl:hidden lg:hidden block'>Services to Industries</h1>
            <div className='mobile-boxes m-2 font-semibold xl:hidden'>
                <div className='rounded-lg p-3 service-box1'>
                    <img src="/Images/carbon_scis-transparent-supply.png" alt="loading.." className='h-8 w-8 m-auto' />
                    <p className='text-xs'>Logistics and supply chain management </p>
                </div>
                <div className=' rounded-lg p-3 service-box1'>
                    <img src="/Images/mdi_tag-check.png" alt="loading.." className='h-8 w-8 m-auto' />
                    <p className='text-xs'>Quality control and assurance</p>
                </div>
                <div className=' rounded-lg p-3 service-box1'>
                    <img src="/Images/clarity_process-on-vm-line.png" alt="loading.." className='h-8 w-8 m-auto' />
                    <p className='text-xs'>Streamlined procurement process</p>
                </div>
            </div>
            <div className='flex justify-around space-x-5 ml-16 mr-16 font-semibold xl:hidden lg:hidden'>
                <div className=' rounded-lg p-3 service-box1 wide1'>
                    <img src="/Images/material-symbols-light_network-intel-node-rounded.png" alt="loading.." className='h-8 w-8 m-auto' />
                    <p className='text-xs'>Market intelligence and trends analysis</p>
                </div>
                <div className=' rounded-lg p-3 service-box1 wide2'>
                    <img src="/Images/devicon-plain_networkx.png" alt="loading.." className='h-8 w-8 m-auto' />
                    <p className='text-xs'>Access to a vast network of verified FPOs</p>
                </div>
            </div>

        </div>
    );
}

export default Servicescenterlogo