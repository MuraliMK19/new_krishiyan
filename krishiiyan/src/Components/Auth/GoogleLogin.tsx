import { useNavigate } from "react-router-dom";
import * as Api from "../../Services/Api";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const GoogleOauthLogin = () => {
  const navigate = useNavigate();

  //Handlesubmit
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let typeOfOrganization = data.get("type");
    let nameOfFpo = data.get("name");
    let organizationEmail = data.get("email");
    let password = data.get("password");
    let contactNumber = data.get("phone");
    let typeOfFpo = data.get("typeOfFpo");
    let promoterName = data.get("promoterName");

    const [err, res] = await Api.dealerRegistration(
      typeOfOrganization,
      nameOfFpo,
      organizationEmail,
      typeOfFpo,
      password,
      contactNumber,
      promoterName
    );

    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (res) {
      localStorage.setItem("authToken", res?.data?.token);
      localStorage.setItem("dealerName", res?.data?.result?.name);
      navigate("/");
      toast.success("Register Success !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleGoogleLogin = async (credentials: string) => {
    const [err, res] = await Api.dealerGoogleLogin(credentials);
    console.log(credentials);
    if (err) {
      toast.error(err.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if (res) {
      localStorage.setItem("authToken", res?.data?.token);
      localStorage.setItem("dealerName", res?.data?.user?.name);
      navigate("/");
      toast.success("Google Login Success !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div>
      <GoogleOAuthProvider
        clientId={
          "568794023475-7maqtsonf77a4s0hbinimvf4mv117585.apps.googleusercontent.com"
        }
      >
        <GoogleLogin
          onSuccess={(credentialResponse: any) => {
            // const decoded = jwt_decode(
            //   String(credentialResponse?.credential)
            // );
            // console.log(decoded);
            handleGoogleLogin(String(credentialResponse?.credential));
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleOauthLogin;
