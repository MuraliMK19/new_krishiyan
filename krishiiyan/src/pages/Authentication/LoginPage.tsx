import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import * as Api from "../../Services/Api";
import { toast } from "react-toastify";
import './Login.css'
import LinearProgress from '@mui/material/LinearProgress';

// import GoogleOauthLogin from "../../Components/Auth/GoogleLogin";
import { InputAdornment } from "@mui/material";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  let email1 = "";
  let check1 = false;

  // const validateEmail = (email: string) => {
  //   const validDomains = ["@gmail.com", "@krishiyan.com", "info@", "@"];

  //   for (const domain of validDomains) {
  //     if (email.includes(domain)) {
  //       check1 = true;
  //       console.log("check 1 ", check1);
  //     }
  //     console.log("check 1 ", check1);
  //   }
  // };

  // const handleEmailChange = (event: any) => {
  //   email1 = event.target.value;
  //   console.log(email1);
  //   check1 = false;
  //   validateEmail(email1);
  // };

  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    let contactNumber = data.get("contactNumber");
    let pass = data.get("password");

    console.log("Contact Number:", contactNumber);
    console.log("Password:", pass);

    const [err, res] = await Api.dealerLogin(contactNumber, pass);
    if (res && res.data && res.data.data.fpoOrganization.typeOfOrganization !== "Farmer group") {
      console.log("Type of Organization:", res?.data?.data?.typeOfOrganization);
      toast.error("Invalid User", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false); // Stop loading
      return;
    }
    if (err) {
      console.error("Error:", err);
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      console.log("Response:", res);

      // if (res && check1) {
      //  console.log(res);
      if (res && res.data) {
        const userData = res.data.data.fpoOrganization;
        localStorage.setItem("authToken", res.data.token);
        localStorage.setItem("dealerName", userData.nameOfFpo);
        localStorage.setItem("dealermobile", userData.contactNumber);
        localStorage.setItem("dealerMail", userData.organizationalEmail);
        localStorage.setItem("dealerId", userData._id);
        navigate("/top");
        toast.success("Login Success !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      // }
    }
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <Box sx={{ width: '100%', color: 'grey.500' }}>
          <LinearProgress color="success" />
        </Box>
      )}
      <img src="/Images/logoname.png" alt="logo-loading" className="h-16 w-40 m-5" />
      <section className="flex items-center justify-center mt-5">
        {/* Wrap the form and image in a container */}
        <div className="flex flex-col md:flex-row">
          {/* Image for mobile view */}
          <div className="md:hidden w-full">
            <img className="rounded-2xl" src="Images/login.webp" alt="Login" />
          </div>

          {/* Form */}
          <div className="md:w-[400px] m-5">
            <h2 className="font-bold text-[20px] text-left font-sans">Welcome Back, Log In</h2>

            <form onSubmit={handleSubmit} noValidate className="login-form">
              <TextField
                margin="normal"
                required
                fullWidth
                id="contactNumber"
                placeholder="Mobile Number"
                name="contactNumber"
                autoComplete="tel"
                autoFocus
                // onChange={handleEmailChange}
                // inputProps={{
                //   pattern:
                //     "^(\\w+@(gmail\\.com|info|krishiyan\\.com|contact))?$",
                //   title:
                //     "Please enter a valid email address with domains @gmail.com, @info, or @krishiyan.com",
                // }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src="/Images/user.png" // Replace with the actual image path or URL
                        alt="User Icon"
                        style={{ width: 24, height: 24 }} // Adjust dimensions as needed
                      />
                    </InputAdornment>
                  ),
                }}
                className="custom-textfield"
              />
              <div className="relative">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  placeholder="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src="/Images/lock.png" // Replace with the actual image path or URL
                          alt="User Icon"
                          style={{ width: 24, height: 24 }} // Adjust dimensions as needed
                        />
                      </InputAdornment>
                    ),
                  }}
                  className="password-custom"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 16 16"
                ></svg>
              </div>
              <div className="grid-width text-right">
                <Link
                  variant="subtitle2"
                  onClick={() => navigate("/forgot-password")}
                  sx={{ cursor: "pointer" }}
                  className="forgot-pwd">
                  {" Forgot Password?"}
                </Link>
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="bg-[#3291FF] text-[#F3FFF1] flex shadow-[0px_4px_3px_rgba(0,0,0,0.25)] py-1 px-4 rounded mx-60 my-8 text-sm font-thin login-btn"
              >
                Log in
              </Button>
              <div className="inline-flex items-center justify-around w-full">
                <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <h2 className=" text-gray-700 dark:text-gray-300">
                  Or Log In With
                </h2>
                <hr className="w-20 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="mt-2 text-center">
                  <Typography variant="body2">
                    Login with Google: {""}
                    {/* <GoogleOauthLogin /> */}
                  </Typography>
                </div>
                <div className="mt-2 text-center">
                  <Typography variant="body2">
                    Don't have an account? {""}
                    <Link
                      variant="subtitle2"
                      onClick={() => navigate("/signup")}
                      sx={{ cursor: "pointer" }}
                    >
                      {" Sign Up"}
                    </Link>
                  </Typography>
                </div>
              </div>


            </form>
          </div>

          {/* Image for larger screens */}
          <div className="hidden md:block md:w-1/2">
            <img className="rounded-2xl" src="Images/login.webp" alt="Login" />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
