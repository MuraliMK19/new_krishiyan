import React, { useState, useEffect } from "react";
import { Input, Button, Textarea } from "@material-tailwind/react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Api from "../Services/Api";
import Header from "./layouts/Header";
import axios from "axios";

const AccountSetting = () => {
  const [Type, setType] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [address, setAddress] = useState("");
  const [primaryContactPerson, setPrimaryContactPerson] = useState("");
  const [primaryContactNumber, setPrimaryContactNumber] = useState("");
  const [mail, setMail] = useState("")
  const [numberOfFarmers, setNumberOfFarmers] = useState("");
  const [crops, setCrops] = useState([]);
  const [selectedCrops, setSelectedCrops] = useState([]);

  const handletypechange = (event: any, newValue: any) => {
    setType(newValue.name);
    console.log(Type);
  };

  const nameSuggestions = [
    { name: "FPO/FPC (Farmer Producer Organisation/Farmer Producer Company)" },
    { name: "PACS (Primary Agriculture Credit Society)" },
    { name: "Co-operatives" },
    { name: "FIG (Farmer Interest Group)" },
    { name: "Individual Proprietors" },
    { name: "Agri Input Dealers" },
    { name: "Others" },
  ];

  useEffect(() => {
    const storedDealerEmail = localStorage.getItem("dealerMail");
    if (storedDealerEmail) {
      fetchDealerData(storedDealerEmail);
    } else {
      console.log("yput email is null", storedDealerEmail);
    }
  }, []);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const [error, response] = await Api.getCrops();
        if (error) {
          toast.error("Failed to fetch crops");
        } else {
          const cropNames = response?.data.map(
            (crop: { localName: any }) => crop.localName
          );
          setCrops(cropNames);
        }
      } catch (err) {
        console.error("Error fetching crops:", err);
        toast.error("Error fetching crops");
      }
    };
    fetchCrops();
  }, []);

  const fetchDealerData = async (email: any) => {
    console.log("fetching dealer data");
    try {
      const storedDealerEmail = localStorage.getItem("dealerEmail");
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/get-dealer-by-email?email=${storedDealerEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch dealer data");
      }
      console.log(response);
      const dealerData = await response.json();
      console.log(dealerData);
      // Set default values in state based on dealerData
      // For example:
      setPrimaryContactNumber(dealerData.mobile);
      setPrimaryContactPerson(dealerData.name);
      setAddress(dealerData.fullAddress);
      setOrganizationName(dealerData.organizationName);
      setNumberOfFarmers(dealerData.numberOfFarmers);
      setType(dealerData.type);
      setSelectedCrops(dealerData.crops);
      // Set other fields as needed
    } catch (error) {
      console.error("Error fetching dealer data:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedDealerEmail = localStorage.getItem("dealerMail");
    if (!storedDealerEmail) {
      toast.error("Dealer email not found");
      return;
    }

    try {
      console.log(
        primaryContactPerson,
        address,
        Type,
        primaryContactNumber,
        numberOfFarmers,
        selectedCrops,
        organizationName
      );
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/auth/update-dealer/${storedDealerEmail}`,
        {
          name: primaryContactPerson,
          address: address,
          type: Type,
          primaryContactNumber: primaryContactNumber,
          numberOfFarmers: numberOfFarmers,
          crops: selectedCrops || [],
          organizationName: organizationName,
        }
      );

      toast.success("Dealer information updated successfully");
      console.log(response);
    } catch (error) {
      console.error("Error updating dealer:", error);
      toast.error("Failed to update dealer information");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">New Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="organization-name">Organization Name</label>
          <Input
            id="organization-name"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            placeholder="Enter organization name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address">Full Address</label>
          <Textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter full address"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="organization-type">Organization Type</label>
          <Autocomplete
            className="p-2 mt-6 rounded-xl border"
            options={nameSuggestions}
            getOptionLabel={(option) => option.name}
            onChange={handletypechange}
            renderInput={(params) => (
              <TextField
                {...params}
                margin="normal"
                required
                fullWidth
                id="type"
                label="Type of the Organization"
                name="Name of the Organization"
                autoComplete="type"
                autoFocus
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="primary-contact-person">Primary Contact Person</label>
          <Input
            id="primary-contact-person"
            value={primaryContactPerson}
            onChange={(e) => setPrimaryContactPerson(e.target.value)}
            placeholder="Enter primary contact person"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="primary-contact-number">Primary Contact Number</label>
          <Input
            id="primary-contact-number"
            value={primaryContactNumber}
            onChange={(e) => setPrimaryContactNumber(e.target.value)}
            placeholder="Enter primary contact number"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="number-of-farmers">Number of Farmers</label>
          <Input
            id="number-of-farmers"
            type="number"
            value={numberOfFarmers}
            onChange={(e) => setNumberOfFarmers(e.target.value)}
            placeholder="Enter number of farmers"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="crops">Crops</label>
          <Autocomplete
            multiple
            id="crops"
            options={crops || ""}
            onChange={(event, newValues) => {
              console.log("Selected Crops:", newValues); // Add this line to log selected crops
              setSelectedCrops(newValues);
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Select crops" />
            )}
          />
        </div>

        <div className="mb-4">
          <Button type="submit" color="blue" variant="filled">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AccountSetting;
