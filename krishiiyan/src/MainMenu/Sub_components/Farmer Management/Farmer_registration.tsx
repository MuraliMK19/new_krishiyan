import React, { useState } from 'react';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function Farmer_registration() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = useState(false);


    const handleFileUpload = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            console.log(`File uploaded: ${file.name}`);
        }
    };

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    const closeRegistrationPopup = () => {
        setIsRegistrationPopupOpen(false);
    };
    const openRegistrationPopup = () => {
        setIsPopupOpen(false); // Close the OTP popup
        setIsRegistrationPopupOpen(true); // Open the registration popup
    };

    return (
        <div className="bg-white h-[100%] rounded-md">
            <div className="flex justify-between p-5">
                <div className="text-left ml-5">
                    <h1 className="text-xl font-normal">Hello,</h1>
                    <p className="text-base text-[#3a3a3a]">
                        Easily Add farmers by either registering individually or uploading in bulk
                    </p>
                </div>
                <div className="mr-5">
                    <button
                        className="inline-flex p-2 rounded-sm bg-[#3fc041] text-white items-center"
                        onClick={togglePopup}
                    >
                        <PersonAddOutlinedIcon className="mr-1" />
                        Register Farmer
                    </button>
                </div>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center w-4/5 m-auto h-3/5 justify-center">
                <label
                    htmlFor="fileUpload"
                    className="cursor-pointer flex flex-col items-center text-center"
                >
                    <input
                        type="file"
                        id="fileUpload"
                        accept=".xls,.xlsx"
                        className="hidden"
                        onChange={handleFileUpload}
                    />
                    <div className="bg-white border-2 border-[#3fc041] text-[#3fc041] px-3 py-1 rounded-md text-sm font-medium flex items-center">
                        <FileUploadOutlinedIcon className="mr-1" /> Upload Data
                    </div>
                </label>
                <a href="/sample.csv" className='p-2'>Click here to download <span className='text-[#3fc041] underline'>sample.csv</span></a>
                <p className="text-gray-500 mt-2 text-sm">
                    Upload farmer records in .xls or .xlsx format for bulk registration.
                </p>
            </div>

            {/* Popup */}
            {isPopupOpen && (
                <div>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white w-[600px] rounded-lg shadow-lg p-6 relative">
                            {/* Close Button */}
                            <button
                                className="absolute top-2 bg-white right-2 text-gray-500 text-xl font-bold"
                                onClick={togglePopup}
                            >
                                X
                            </button>
                            <h2 className="text-xl font-semibold mb-4">Farmer Registration</h2>
                            <form className="space-y-4">
                                <div className='w-1/2 m-auto'>
                                    <label htmlFor="name" className="block text-sm font-medium text-left p-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-3 py-2 border border-black rounded-sm h-9"
                                    />
                                </div>
                                <div className='w-1/2 m-auto'>
                                    <label htmlFor="whatsappNumber" className="block text-sm font-medium mb-2 text-left">
                                        WhatsApp Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="whatsappNumber"
                                            className="w-full h-9 border border-black rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"

                                        />
                                        <button
                                            type="button"
                                            className="absolute right-0 top-[13px] h-9 mr-0 transform -translate-y-1/2 bg-[#3fc041] text-white px-4 py-1 rounded-sm text-sm font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        >
                                            Get OTP
                                        </button>
                                    </div>
                                </div>
                                <button type="button" className="text-sm text-right mr-0 w-1/2 text-[#3fc041]">
                                    Not Received? Resend
                                </button>

                                <div className='w-1/2 m-auto'>
                                    <label htmlFor="otp" className="block text-sm font-medium text-left p-2">
                                        Enter OTP
                                    </label>
                                    <div className="flex space-x-2 text-center w-1/2 justify-center m-auto">
                                        {Array(4)
                                            .fill("")
                                            .map((_, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    maxLength={1}
                                                    className="w-10 h-10 border rounded-md text-center border-black"
                                                />
                                            ))}
                                    </div>
                                </div>
                                <div className="flex justify-center items-center w-1/2 m-auto">
                                    <button
                                        type="submit"
                                        className="bg-[#3fc041] text-white px-4 py-2 rounded-md w-full"
                                        onClick={openRegistrationPopup}
                                    >
                                        Verify
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {/* Farmer Registration Popup */}
            {isRegistrationPopupOpen && (
                <div>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                    <div className="fixed inset-0 flex justify-center items-center z-50">
                        <div className="bg-white w-[800px] rounded-lg shadow-lg p-6 relative">
                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 bg-white text-gray-500 text-xl font-bold"
                                onClick={closeRegistrationPopup}
                            >
                                X
                            </button>
                            <h2 className="text-xl font-semibold mb-2 text-center">Farmer Registration</h2>
                            <form className="space-y-3">
                                <h3 className="text-lg font-semibold text-left ">Farmer Details:</h3>
                                <div className="grid grid-cols-3 gap-4 text-left">
                                    <div>
                                        <label className="block text-sm font-medium">Farmer Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Contact</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Pincode</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Village</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">District</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">State</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Total Farm Area</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Leased Area in Acre</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Owned Area in Acre</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Type of Cultivation</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold pt-3 pb-3 text-left">Bank Details:</h3>
                                <div className="grid grid-cols-3 gap-4 text-left">
                                    <div>
                                        <label className="block text-sm font-medium">Bank Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Holder Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Account Number</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">IFSC Code</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">PAN Number</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Aadhaar Number</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center mt-6">
                                    <button
                                        type="submit"
                                        className="bg-[#3fc041] text-white px-6 py-2 rounded-sm w-1/2"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}

export default Farmer_registration;
