import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import axios from "axios";
import { saveAs } from "file-saver";

interface ApiResponse {
    message: string;
    errors?: { farmer: { name: string }; reason: string }[];
}

const BulkUploadFarmers = () => {
    const [farmersData, setFarmersData] = useState<any[]>([]);
    const [response, setResponse] = useState<ApiResponse | null>(null);

    const handleFileUpload = (data: any) => {
        const jsonData = data.map((row: any) => ({
            dealerNumber: row[0],
            name: row[1],
            whatsappNumber: row[2],
            totalOwnedFarm: row[3],
            geoLocationOwnedFarm: row[4],
            totalLeaseFarm: row[5],
            geoLocationLeaseFarm: row[6],
            pincode: row[7],
            village: row[8],
            district: row[9],
            state: row[10],
            address: row[11],
            typeOfCultivationPractice: row[12],
            bankName: row[13],
            accountName: row[14],
            accountNumber: row[15],
            ifscCode: row[16],
            pan: row[17],
            aadhaarNumber: row[18],
        }));
        setFarmersData(jsonData);
    };

    const handleUpload = async () => {
        try {
            const apiResponse = await axios.post("https://krishiyanback.vercel.app/api/appFarmer/farmer/bulk-upload", farmersData);
            setResponse(apiResponse.data);
        } catch (error) {
            console.error("Error uploading farmers data:", error);
        }
    };

    const handleDownloadResponse = () => {
        const blob = new Blob([JSON.stringify(response, null, 2)], { type: "application/json" });
        saveAs(blob, "upload_response.json");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Bulk Upload Farmers</h1>
            <div className="mb-4">
                <CSVReader
                    onFileLoaded={handleFileUpload}
                    parserOptions={{ skipEmptyLines: true }}
                    cssClass="csv-reader-input"
                    inputId="csv-upload"
                />
            </div>
            {farmersData.length > 0 && (
                <button
                    onClick={handleUpload}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Upload Farmers Data
                </button>
            )}
            {response && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Response Summary</h2>
                    <p>{response.message}</p>
                    {response.errors && response.errors.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold text-red-600">Errors</h3>
                            <ul className="list-disc list-inside">
                                {response.errors.map((error, index) => (
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
    );
};

export default BulkUploadFarmers;