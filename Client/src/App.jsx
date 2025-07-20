import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import Home from './pages/Home';
import Price from './pages/Prices';
import Contact from './pages/Contact';
import Services from './pages/Services/Services';
import Testimonials from './pages/Testimonials';

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

import CustomWebsiteDevelopment from './pages/Services/custom-website-development';
import Ecommerce from './pages/Services/EcommerceWebsiteDevelopment';
import Responsive from './pages/Services/ResponsiveWebDesign';
import CMS from './pages/Services/CMSDevelopment';
import Web from './pages/Services/WebApplicationDevelopment';
import Maintain from './pages/Services/WebsiteMaintenance';
import Request from './pages/RequestQuote';
import Verify from './components/Auth/VerificationPage';
import { fetchDataFromApi } from './utils/api';
import ForgotPassword from './pages/forgotPassword';
import AppContext from './context/appContext';





const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setuserData] = useState(null)
  const alertBox = (msg, type) => {
    if (type === 'success') toast.success(msg);
    if (type === 'error') toast.error(msg);
  };


  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if(token !==undefined  && token !==null && token !== ""){
      setIsLogin(true) ; 
      fetchDataFromApi(`/api/user/user-details?token=${token}`).then((res)=>{
        console.log(res)
        setuserData(res.data) ; 
      })
    }
    else{
      setIsLogin(false) ; 
    }
  }, [isLogin]);
  

  const values = {
    isLogin,
    setIsLogin,
    alertBox,
    setuserData , 
    userData
  };

  return (
    <>
      <AppContext.Provider value={values}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services/custom-website-development" element={<CustomWebsiteDevelopment />} />
          <Route path="/services/ecommerce-website-development" element={<Ecommerce />} />
          <Route path="/services/responsive-web-design" element={<Responsive />} />
          <Route path="/services/cms-development" element={<CMS />} />
          <Route path="/services/web-application-development" element={<Web />} />
          <Route path="/services/website-maintenance" element={<Maintain />} />
          <Route path="/request-quote" element={<Request />} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/reset-password" element={<ForgotPassword/>} />
          
        </Routes>
        <Footer />
        <Toaster />
      </AppContext.Provider>
      </>
    
  );
};

export default App;
