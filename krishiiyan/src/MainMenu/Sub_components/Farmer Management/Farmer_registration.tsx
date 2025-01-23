import React, { useState } from 'react';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import * as Api from "../../../Services/Api";
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import BulkUploadFarmers from './BulkUploadFarmers';
import axios from 'axios';
import saveAs from 'file-saver';
import CSVReader from 'react-csv-reader';

function Farmer_registration() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = useState(false);
    const [farmersData, setFarmersData] = useState<any[]>([]);
    const [response, setResponse] = useState<Response | null>(null);
    const navigate = useNavigate();

    //1st PopUp
    const [name, setName] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');

    //2nd PopUp
    const [farmerName, setFarmerName] = useState('');
    const [contact, setContact] = useState('');
    const [pincode, setPincode] = useState('');
    const [village, setVillage] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [totalFarmArea, setTotalFarmArea] = useState('');
    const [leasedArea, setLeasedArea] = useState('');
    const [ownedArea, setOwnedArea] = useState('');
    const [typeOfCultivation, setTypeOfCultivation] = useState('');
    const [bankName, setBankName] = useState('');
    const [holderName, setHolderName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [aadhaarNumber, setAadhaarNumber] = useState('');
    const [pinerror, setPinerror] = useState("");

    const handleFileUpload = (data: any) => {
        const jsonData = data.map((row: any) => ({
            dealerNumber: localStorage.getItem('dealermobile'),
            name: row[0],
            whatsappNumber: row[1],
            totalOwnedFarm: row[2],
            geoLocationOwnedFarm: row[3],
            totalLeaseFarm: row[4],
            geoLocationLeaseFarm: row[5],
            pincode: row[6],
            village: row[7],
            district: row[8],
            state: row[9],
            address: row[10],
            typeOfCultivationPractice: row[11],
            bankName: row[12],
            accountName: row[13],
            accountNumber: row[14],
            ifscCode: row[15],
            pan: row[16],
            aadhaarNumber: row[17],
        }));
        setFarmersData(jsonData);
    };
    const handleUpload = async () => {
        try {
            const apiResponse = await axios.post("https://krishiyanback.vercel.app/api/appFarmer/farmer/bulk-upload", farmersData);
            setResponse(apiResponse.data);
            toast.success("Farmers data uploaded successfully", {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            console.error("Error uploading farmers data:", error);
            toast.error("Error uploading farmers data", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

    const handleDownloadResponse = () => {
        const blob = new Blob([JSON.stringify(response, null, 2)], { type: "application/json" });
        saveAs(blob, "upload_response.json");
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

    function onverification(event: any) {
        event.preventDefault();
        if (whatsappNumber.length === 10) {
            openRegistrationPopup();
            console.log('Name:', name);
            console.log('Whatsapp Number:', whatsappNumber);
            localStorage.setItem('whatsappNumber', whatsappNumber);
        } else {
            alert('Invalid WhatsApp Number');
        }
    }
    const pincodeverification = async (event: React.FocusEvent<HTMLInputElement>) => {
        const pincode = event.target.value; // Get the value of the input field
        try {
            const [err, res] = await Api.postPincode(pincode);
            if (res) {
                if (res.data.PostOffice === null) {
                    toast.error('Invalid Pincode', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    setPinerror("Invalid Pincode");
                    return;
                }
                const district = (res.data.PostOffice[0].District);
                const State = (res.data.PostOffice[0].State);
                setDistrict(district);
                setState(State);
                setPinerror("");
                setPincode(pincode);
            } else {
                console.error('Error:', err);

            }
        } catch (error) {
            console.error('Unexpected error:', error);
        }
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let name = data.get('name');
        let whatsappNumber = localStorage.getItem('whatsappNumber');
        let pincode = data.get('pincode');
        let village = data.get('village');
        let district = data.get('district');
        let state = data.get('state');
        let totalLeaseFarm = data.get('leasedArea');
        let totalOwnedFarm = data.get('ownedArea');
        let typeOfCultivationPractice = data.get('typeOfCultivation');
        let dealerNumber = localStorage.getItem('dealermobile');

        console.log(data);

        console.log({
            name,
            whatsappNumber,
            pincode,
            village,
            district,
            state,
            totalLeaseFarm,
            totalOwnedFarm,
            typeOfCultivationPractice,
            dealerNumber
        });
        const [err, res] = await Api.registerFarmer(
            dealerNumber,
            name,
            whatsappNumber,
            totalOwnedFarm,
            totalLeaseFarm,
            pincode,
            village,
            district,
            state,
            typeOfCultivationPractice
        );
        if (res) {
            console.log("Response:", res);
            toast.success("Farmer Registered Successfully", {
                position: toast.POSITION.TOP_RIGHT
            });
            setIsRegistrationPopupOpen(false)
        } else {
            console.error("Error:", err);
            if (err) {
                toast.error(err.data, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
    }

    return (
        <div className='p-4  h-[100%]'>
            <div className="bg-white h-[100%] rounded-md shadow-md">
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
                        {/* <input
                            type="file"
                            id="fileUpload"
                            accept=".xls,.xlsx"
                            className="hidden"
                            onChange={handleFileUpload}
                        /> */}
                        <CSVReader
                            onFileLoaded={handleFileUpload}
                            parserOptions={{ skipEmptyLines: true }}
                            cssClass="csv-reader-input"
                            inputId="csv-upload"
                        />
                        <button className="bg-white border-2 border-[#3fc041] text-[#3fc041] px-3 py-1 rounded-md text-sm font-medium flex items-center">
                            <FileUploadOutlinedIcon className="mr-1" /> Upload Data
                        </button>
                    </label>
                    <a href="/sample.csv" className='p-2'>Click here to download <span className='text-[#3fc041] underline'>sample.csv</span></a>
                    <p className="text-gray-500 mt-2 text-sm">
                        Upload farmer records in .xls or .xlsx format for bulk registration.
                    </p>
                    {farmersData.length > 0 && (
                        <button
                            onClick={handleUpload}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
                        >
                            Upload Farmers Data
                        </button>
                    )}
                    {response && (
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold">Response Summary</h2>
                            <p>{(response as any)?.message || "No message available"}</p>
                            {response && 'errors' in response && (response as any).errors.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold text-red-600">Errors</h3>
                                    <ul className="list-disc list-inside">
                                        {(response as any).errors.map((error: any, index: number) => (
                                            <li key={index}>
                                                <strong>Farmer:</strong> {error.farmer.name || "Unknown"} <br />
                                                <strong>Reason:</strong> {error.reason}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <button
                                onClick={handleDownloadResponse}
                                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Download Response
                            </button>
                        </div>
                    )}
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
                                            onChange={(e) => setName(e.target.value)}
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
                                                onChange={(e) => setWhatsappNumber(e.target.value)}
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
                                            onClick={onverification}
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
                                <form className="space-y-3" onSubmit={handleSubmit}>
                                    <h3 className="text-lg font-semibold text-left ">Farmer Details:</h3>
                                    <div className="grid grid-cols-3 gap-4 text-left">
                                        <div>
                                            <label className="block text-sm font-medium">Farmer Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setFarmerName(e.target.value)}
                                                name='name'
                                            />
                                        </div>
                                        {/* <div>
                                        <label className="block text-sm font-medium">Contact</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                            onChange={(e) => setContact(e.target.value)}
                                        />
                                    </div> */}
                                        <div>
                                            <label className="block text-sm font-medium">Pincode</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onBlur={pincodeverification}
                                                // onChange={(e) => setPincode(e.target.value)}
                                                name='pincode'
                                            />
                                            <span className="text-red-500">{pinerror}</span>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">Village</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setVillage(e.target.value)}
                                                name='village'
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">District</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setDistrict(e.target.value)}
                                                value={district}
                                                name='district'
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">State</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setState(e.target.value)}
                                                value={state}
                                                name='state'
                                            />
                                        </div>
                                        {/* <div>
                                        <label className="block text-sm font-medium">Total Farm Area</label>
                                        <input
                                            type="number"
                                            className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                            onChange={(e) => setTotalFarmArea(e.target.value)}
                                        />
                                    </div> */}
                                        <div>
                                            <label className="block text-sm font-medium">Leased Area in Acre</label>
                                            <input
                                                type="number"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setLeasedArea(e.target.value)}
                                                name='leasedArea'
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">Owned Area in Acre</label>
                                            <input
                                                type="number"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setOwnedArea(e.target.value)}
                                                name='ownedArea'
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">Type of Cultivation</label>
                                            <select
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setTypeOfCultivation(e.target.value)}
                                                name='typeOfCultivation'
                                            >
                                                <option value="">Select Type of Cultivation</option>
                                                <option value="Organic">Organic</option>
                                                <option value="Inorganic">Inorganic</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold pt-3 pb-3 text-left">Bank Details:</h3>
                                    <div className="grid grid-cols-3 gap-4 text-left">
                                        <div>
                                            <label className="block text-sm font-medium">Bank Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setBankName(e.target.value)}
                                                name='bankName'
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">Holder Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setHolderName(e.target.value)}
                                                name='holderName'
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">Account Number</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setAccountNumber(e.target.value)}
                                                name='accountNumber'
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">IFSC Code</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setIfscCode(e.target.value)}
                                                name='ifscCode'
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">PAN Number</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setPanNumber(e.target.value)}
                                                name='panNumber'
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">Aadhaar Number</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 border border-black h-8 rounded-sm"
                                                onChange={(e) => setAadhaarNumber(e.target.value)}
                                                name='aadhaarNumber'
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
        </div>
    );

}

export default Farmer_registration;
