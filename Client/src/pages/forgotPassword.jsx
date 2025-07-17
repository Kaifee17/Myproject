import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from "../utils/api";
import AppContext from "../context/appContext";

const ForgotPassword = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
  const [isPasswordShow2, setIsPasswordShow2] = useState(false);
  const [FormFields, setFormFields] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "" , 
    confirmPassword : ""
  })

  const context = useContext(AppContext);
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const validValue = Object.values(FormFields).every(el => el);
    const handleSubmit = async (e) => {
        

      e.preventDefault();
        setIsLoading(true) ;
      const { newPassword, confirmPassword } = FormFields;

  
      if (!newPassword || !confirmPassword ) {
        context.alertBox('Please fill all fields.', 'error');
        setIsLoading(false);
        return;
      }
      if(newPassword!==confirmPassword){
        context.alertBox('Both entries are different', 'error');
        setIsLoading(false);    
        return  ; 
      }

      postData("/api/user/reset-password" , FormFields).then((res)=>{
        console.log(res) ; 
        localStorage.removeItem("userEmail") ; 
        localStorage.removeItem("actionType") ; 
        setIsLoading(false);
        navigate("/login") ; 

      })
  
    
    };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-pink-600 to-pink-100 py-10">
    <div className="container">
      <div className="card shadow-md w-[400px] m-auto rounded-md border p-6 bg-white">
        <h3 className="text-center text-[18px] font-semibold text-black mb-6">
          Reset Password
        </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* New Password Field */}
            <div className="relative">
              <TextField
                type={isPasswordShow ? "text" : "password"}
                label="New Password"
                variant="outlined"
                fullWidth
                value={FormFields.newPassword}
                name= "newPassword"
                onChange={onChangeInput}
                disabled={isLoading}
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow ? <IoMdEyeOff size={22} /> : <IoMdEye size={22} />}
              </span>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <TextField
                type={isPasswordShow2 ? "text" : "password"}
                label="Confirm Password"
                variant="outlined"
                fullWidth
                name="confirmPassword"
                 value={FormFields.confirmPassword}
                onChange={onChangeInput}
                disabled={isLoading}
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setIsPasswordShow2(!isPasswordShow2)}
              >
                {isPasswordShow2 ? <IoMdEyeOff size={22} /> : <IoMdEye size={22} />}
              </span>
            </div>

            {/* Submit Button */}
             <button
                        type="submit"
                        disabled={!validValue || isLoading}
                        className={`w-full font-bold py-2 rounded-md text-white flex items-center justify-center gap-2 transition-all duration-200 ${
                          validValue && !isLoading
                            ? 'bg-pink-600 hover:bg-pink-700'
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {isLoading ? <CircularProgress size={20} color="inherit" /> : <span>Reset Password</span>}
                      </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
