import React, { useState  , useContext} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useNavigate } from 'react-router-dom';
import { postData } from '../../utils/api';
import AppContext from '../../context/AppContext';


const Login = () => {
   const [isLoading, setIsLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [formFields, setFormFields] = useState({
      email: '',
      password: ''
    });

      const context = useContext(AppContext);
      const navigate = useNavigate();
    const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validValue = Object.values(formFields).every(el => el);

  const forgotPassword = async()=>{

    if(formFields.email === ""){
      context.alertBox(  " please enter the email" , "error") ; 
      return false; 
    }
    else{
      localStorage.setItem("userEmail" , formFields.email) ; 
      localStorage.setItem("actionType" , "forgot-password") ; 
      context.alertBox(  `Otp sent to ${formFields.email}` , "success") ; 
       try {
            const response = await postData('/api/user/forgot-password', {
              email: formFields.email
            });
            console.log('Verification Response:', response);
            navigate("/verify")
            context.alertBox(response.message, 'success');
          } catch (error) {
            console.error('OTP Verification Failed:', error);
            context.alertBox(response.message, 'error');
          }
    }
    
    
  }




  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
  
      const { email, password } = formFields;
  
      if (!email || !password) {
        context.alertBox('Please fill all fields.', 'error');
        setIsLoading(false);
        return;
      }
  
      try {
        const res = await postData('/api/user/login', formFields,{withCredentials : true });
        console.log('Registration Success:', res);
  
        context.alertBox('Logged in successfully!', 'success');
        localStorage.setItem("accessToken" , res?.data?.accessToken )
        localStorage.setItem("refreshToken" ,res?.data?.refreshToken )
        context.setIsLogin(true);
        setFormFields({  email: '', password: '' });
        navigate('/'); 
      } catch (error) {
        console.error('Logged in Failed:', error);
        const errMsg = error?.response?.data?.message || 'Something went wrong!';
        context.alertBox(errMsg, 'error');
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <section className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-400 to-pink-600">
      <div className="shadow-md w-full max-w-md rounded-md bg-white px-8 py-8">
        <h3 className="text-center text-[20px] text-black font-semibold mb-6">
          Login to your account
        </h3>

        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          
          <TextField
            type="email"
            id="email"
            name="email"
            value={formFields.email}
            onChange={onChangeInput}
            placeholder="Email Id"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: false }}
            disabled={isLoading}
          />

          {/* Password Input with Custom Toggle */}
          <TextField
            type={isShowPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formFields.password}
            onChange={onChangeInput}
            placeholder="Password"
            variant="outlined"
            fullWidth
            disabled={isLoading}
            InputLabelProps={{ shrink: false }}
            InputProps={{
              endAdornment: (
                <Button
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  style={{
                    minWidth: 'auto',
                    padding: 0,
                    marginRight: '-8px',
                  }}
                >
                  {isShowPassword ? (
                    <IoMdEye className="text-[20px] opacity-75" />
                  ) : (
                    <IoMdEyeOff className="text-[20px] opacity-75" />
                  )}
                </Button>
              ),
            }}
          />

          {/* Forgot Password */}
          <div className="text-left">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:underline"
              onClick={forgotPassword}
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
                      type="submit"
                      disabled={!validValue || isLoading}
                      className={`w-full font-bold py-2 rounded-md text-white flex items-center justify-center gap-2 transition-all duration-200 ${
                        validValue && !isLoading
                          ? 'bg-orange-600 hover:bg-orange-700'
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {isLoading ? <CircularProgress size={20} color="inherit" /> : <span>Login</span>}
                    </button>

          {/* Not Registered */}
          <div className="text-center text-sm text-gray-600">
            Not Registered?{' '}
            <a
              href="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign Up
            </a>
          </div>

          {/* Divider */}
          <div className="text-center text-sm text-gray-500">
            Or continue with social account
          </div>

          {/* Google Login Button */}
          <Button
            variant="outlined"
            fullWidth
            className="!flex !items-center !justify-center gap-2"
            style={{ padding: '10px 0', fontWeight: 'bold' }}
          >
            <FcGoogle className="text-xl" />
            LOGIN WITH GOOGLE
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
