import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { postData } from '../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';
import AppContext from '../../context/appContext';



const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    name: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { name, email, password } = formFields;

    if (!name || !email || !password) {
      context.alertBox('Please fill all fields.', 'error');
      setIsLoading(false);
      return;
    }

    try {
      const res = await postData('/api/user/register', formFields);
      console.log('Registration Success:', res);

      context.alertBox('Registered successfully! Please verify your email.', 'success');

      localStorage.setItem('userEmail', email); 
      setFormFields({ name: '', email: '', password: '' });
      navigate('/verify'); 
    } catch (error) {
      console.error('Registration Failed:', error);
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
          Register your account
        </h3>

        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="name"
            value={formFields.name}
            onChange={onChangeInput}
            placeholder="Full Name"
            variant="outlined"
            fullWidth
            disabled={isLoading}
          />

          <TextField
            type="email"
            name="email"
            value={formFields.email}
            onChange={onChangeInput}
            placeholder="Email Id"
            variant="outlined"
            fullWidth
            disabled={isLoading}
          />

          <TextField
            type={isShowPassword ? 'text' : 'password'}
            name="password"
            value={formFields.password}
            onChange={onChangeInput}
            placeholder="Password"
            variant="outlined"
            fullWidth
            disabled={isLoading}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => setIsShowPassword(!isShowPassword)} edge="end">
                  {isShowPassword ? (
                    <IoMdEye className="text-[20px] opacity-75" />
                  ) : (
                    <IoMdEyeOff className="text-[20px] opacity-75" />
                  )}
                </IconButton>
              )
            }}
          />

          <button
            type="submit"
            disabled={!validValue || isLoading}
            className={`w-full font-bold py-2 rounded-md text-white flex items-center justify-center gap-2 transition-all duration-200 ${
              validValue && !isLoading
                ? 'bg-orange-600 hover:bg-orange-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {isLoading ? <CircularProgress size={20} color="inherit" /> : <span>Register</span>}
          </button>

          <div className="text-center text-sm text-gray-600">
            Already Registered?{' '}
            <Link to="/login" className="text-blue-600 font-medium hover:underline">
              Login
            </Link>
          </div>

          <div className="text-center text-sm text-gray-500">Or continue with social account</div>

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

export default Signup;
