import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { postData } from '../../utils/api';
import OtpBox from '../Common/otpBox';
import verifyImg from '../Common/security.png';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';


const Verify = () => {
  const navigate= useNavigate() ; 
  const context = useContext(AppContext) ;
  const [otp, setOtp] = useState('');
  const userEmail = localStorage.getItem('userEmail'); 

  const handleOtpChange = (value) => {
    setOtp(value);
  };

 const verifyOTP = async (e) => {
  e.preventDefault();
  const actionType = localStorage.getItem("actionType");

  if (actionType !== "forgot-password") {
    try {
      const response = await postData("/api/user/verifyEmail", {
        email: userEmail,
        otp: otp,
      });
      console.log("Verification Response:", response);
      context.alertBox(response.message, "success");
      navigate("/login");
    } catch (error) {
      console.error("OTP Verification Failed:", error);
      context.alertBox(error?.response?.data?.message || "Something went wrong", "error");
    }
  } else {
    postData("/api/user/verify-forgot-password", {
      email: userEmail,
      otp: otp,
    })
      .then((res) => {
        if (res?.error === false) {
          context.alertBox(res.message, "success");
          navigate("/reset-password");
        } else {
          context.alertBox(res.message || "OTP verification failed", "error");
        }
      })
      .catch((error) => {
        console.error("OTP Verification Failed:", error);
        context.alertBox(error?.response?.data?.message || "Something went wrong", "error");
      });
  }
};

  return (
    <section className="section py-10 bg-pink-500 min-h-screen flex items-center justify-center">
      <div className="card shadow-md rounded-md p-6 w-[400px] bg-white">
        <div className="text-center flex items-center justify-center mb-4">
          <img src={verifyImg} width="80" alt="Verify" />
        </div>

        <h3 className="text-center text-[18px] text-black mb-1">
          Enter the 6-digit OTP sent to:
        </h3>
        <p className="text-center text-blue-600 font-semibold mb-4">
          {userEmail || 'your email'}
        </p>

        <OtpBox length={6} onChange={handleOtpChange} />

        <div className="mt-6 text-center">
          <Button
            variant="contained"
            color="primary"
            onClick={verifyOTP}
            disabled={otp.length !== 6}
          >
            Verify OTP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Verify;
