import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <section className="pt-20 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="shadow-md w-full max-w-md rounded-md bg-white px-8 py-8">
        <h3 className="text-center text-[20px] text-black font-semibold mb-6">
          Register your account
        </h3>

        <form className="w-full space-y-5">
          {/* Email Input */}
          <TextField
            type="Name"
            id="Name"
            placeholder="Full Name"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: false }}
          />
          <TextField
            type="email"
            id="email"
            placeholder="Email Id"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: false }}
          />

          {/* Password Input with Custom Toggle */}
          <TextField
            type={isShowPassword ? 'text' : 'password'}
            id="password"
            placeholder="Password"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: false }}
            InputProps={{
              endAdornment: (
                <Button
                  onClick={() => setIsShowPassword(!isShowPassword)}
                 
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

          

          {/* Login Button */}
          <Button
            fullWidth
            style={{
              backgroundColor: '#f55a42',
              color: '#fff',
              padding: '10px 0',
              fontWeight: 'bold',
            }}
          >
            Register
          </Button>

          {/* Not Registered */}
          <div className="text-center text-sm text-gray-600">
            Already Registered?{' '}
            <a
              href="/Login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login 
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
