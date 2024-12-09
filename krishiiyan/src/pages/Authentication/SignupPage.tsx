import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import zxcvbn from "zxcvbn";
import OTPVerification from "../farmer/OTPVerification";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Api from "../../Services/Api";
import { InputAdornment } from "@mui/material";
import './Signup.css'

let check1 = true;

const SignupPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [checkemail, setCheckEmail] = useState(false);
  const [email1, setEmail1] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const nameSuggestions = [
    { name: "FPO/FPC (Farmer Producer Organisation/Farmer Producer Company)" },
    { name: "PACS (Primary Agriculture Credit Society)" },
    { name: "Co-operatives" },
    { name: "FIG (Farmer Interest Group)" },
    { name: "Individual Proprietors" },
    { name: "Agri Input Dealers" },
    { name: "Others" },
  ];

  const validateEmail = async (email: string) => {
    const validDomains = ["@gmail.com", "@krishiyan.com", "info@", "@"];

    for (const domain of validDomains) {
      if (email.includes(domain)) {
        check1 = true;
        if (check1) {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/farmers/check-farmer/${email}`
          );

          const data = await response.json();
          if (data?.exists === false) {
            setCheckEmail(true);
          } else {
            setCheckEmail(false);
            setEmail1("");

            toast.error("User Already Exists! Enter new email", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        }
      }
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    const result = zxcvbn(password);

    switch (result.score) {
      case 0:
        setMessage("Password: Very Weak");
        break;
      case 1:
        setMessage("Password: Weak");
        break;
      case 2:
        setMessage("Password: Fair");
        break;
      case 3:
        setMessage("Password: Strong");
        break;
      case 4:
        setMessage("Password: Very Strong");
        break;
      default:
        setMessage("");
        break;
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail1(emailValue);
    validateEmail(emailValue);
  };

  const handleMobileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: event.target.value });
  };

  const handletypechange = (event: React.ChangeEvent<{}>, newValue: any) => {
    setFormData({ ...formData, type: newValue ? newValue.name : "" });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log("triggered ahndle close");
    setOpen(false);
    register();
    console.log("handle claose end");
  };

  const handleOtpSubmit = async () => {
    if (email1.trim() !== "" && checkemail) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/send-otp-email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email1 }),
          }
        );
        if (response.ok) {
          handleOpen();
        } else {
          console.log("Error sending OTP: Frontend error");
          console.log("Error details:", await response.json());
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const pass = data.get("password");
    const mobile = data.get("phone");
    const type = data.get("type");

    setFormData({
      type: type ? type.toString() : "",
      name: name ? name.toString() : "",
      phone: mobile ? mobile.toString() : "",
      email: email ? email.toString() : "",
      password: pass ? pass.toString() : "",
    });
    await handleOtpSubmit();
  };
  const register = async () => {
    console.log("triggered register");
    const { type, name, phone, email, password } = formData;
    const [err, res] = await Api.dealerRegistration(
      type,
      name,
      email,
      password,
      phone
    );

    if (err) {
      console.log("if triggered");
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (res && checkemail && check1) {
      localStorage.setItem("authToken", res?.data?.token);
      localStorage.setItem("dealerName", res?.data?.result?.name);
      localStorage.setItem("dealerMail", res?.data?.result?.email);
      navigate("/");
      toast.success("Register Success!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleOTPVerified = async () => {
    console.log("ahndlemotp vberfi troggerd");

    console.log("setp 2");
    setIsOtpVerified(true);
    console.log("setp 3");
    handleClose();
  };

  return (
    <>
      <img src="/Images/logoname.png" alt="logo-loading" className="h-16 w-40 m-5" />
      <section className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row rounded-2xl">
          {/* Image Container for Mobile */}
          <div className="md:hidden w-28">
            <img className="rounded-lg" src="Images/logo.png" alt="Ellipse" />
          </div>

          {/* Form Container */}
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-left">Sign Up</h2>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4"
            >
              <Autocomplete
                className="rounded-xl border"
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
                    placeholder="Type of the Organization"
                    name="type"
                    autoComplete="type"
                    autoFocus
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position="start">
                            <img
                              src="/Images/user.png" // Replace with the actual image path or URL
                              alt="User Icon"
                              style={{ width: 24, height: 24, marginTop: 0 }} // Adjust dimensions as needed
                            />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      ),
                    }}
                    className="type-field"
                  />
                )}
              />
              <TextField
                className="p- rounded-xl border"
                type="text"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name of Organization"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                className="p- rounded-xl border"
                type="tel"
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Phone Number (e.g 9835717655)"
                id="phone"
                autoComplete="current-phone"
                onChange={handleMobileChange}
              />
              <TextField
                className="p- rounded-xl border"
                type="email"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleEmailChange}
                inputProps={{
                  pattern:
                    "^(\\w+@(gmail\\.com|info|krishiyan|@\\.com|contact))?$",
                  title:
                    "Please enter a valid email address with domains @gmail.com, @info, or @krishiyan.com",
                }}
              />
              <TextField
                className="rounded-xl border"
                type="password"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
              />
              <p className="text-sm text-gray-500">{message}</p>

              <Button
                className="bg-[#05AB2A] rounded-xl text-white py-2 hover:scale-105 duration-300"
                type="submit"
                fullWidth
                variant="contained"
              >
                Sign Up
              </Button>
              <p className="text-black">By continuing, you agree to KrishiYan's <Link onClick={() => navigate("/terms")} className="hover:underline cursor-pointer text-black">Terms & Conditions</Link>. Read our <Link onClick={() => navigate("/privacy")} className="hover:underline cursor-pointer text-black"
              >Privacy Policy.</Link></p>

              <Grid container>
                <Grid item>
                  <Typography variant="body2">
                    Already have an account?{" "}
                    <Link
                      variant="subtitle2"
                      onClick={() => navigate("/login")}
                      sx={{ cursor: "pointer" }}
                    >
                      Sign In
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </div>

          {/* Image Container for Desktop */}
          <div className="hidden md:block md:w-1/2">
            <img className="rounded-2xl" src="Images/logo.png" alt="Ellipse" />
          </div>
        </div>

        <OTPVerification
          open={open}
          handleClose={handleClose}
          handleOTPVerified={handleOTPVerified}
          Phone={email1}
        />
      </section>
    </>
  );
};

export default SignupPage;
