import React from 'react'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function Farmer_registration() {
    const handleFileUpload = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            console.log(`File uploaded: ${file.name}`);
        }
    };
    return (
        <div className='bg-white h-[100%] rounded-md'>
            <div className='flex justify-between p-5'>
                <div className='text-left ml-5'>
                    <h1 className='text-xl font-normal'>Hello,</h1>
                    <p className='text-base text-[#3a3a3a]'>Easily Add farmers by either registering individually or uploading in bulk</p>
                </div>
                <div className='mr-5'>
                    <button className='inline-flex p-2 rounded-sm'><PersonAddOutlinedIcon />Register Farmer</button>
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
                        <FileUploadOutlinedIcon /> Upload Data
                    </div>
                </label>
                <p className="text-gray-500 mt-2 text-sm">
                    Upload farmer records in .xls or .xlsx format for bulk registration.
                </p>
            </div>
        </div>
    )
}

export default Farmer_registration