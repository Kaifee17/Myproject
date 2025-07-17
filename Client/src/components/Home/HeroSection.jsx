import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/background.avif';
import { jwtDecode } from 'jwt-decode';
import AppContext from '../../context/AppContext';

const HeroSection = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(AppContext); 
  const context = useContext(AppContext)
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
  const accessToken = localStorage.getItem('accessToken');
  if (isLogin && accessToken) {
    try {
      const decoded = jwtDecode(accessToken);
      console.log('Decoded Token:', decoded); // 👈 Add this line

      const email = decoded?.email || decoded?.username || decoded?.sub || 'User';
      setUserEmail(email);
    } catch (error) {
      console.error('Failed to decode token:', error);
      setUserEmail('');
    }
  } else {
    setUserEmail('');
  }
}, [isLogin]);


  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-20 w-full h-full flex items-center justify-center">
        <div className="text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            You Need <span className="text-emerald-400">Website</span>,<br />
            We Create <span className="text-emerald-400">Websites</span>
          </h1>
          <p className="text-gray-200 text-lg mb-8">
            From personal portfolios to full-scale business solutions — we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pink-500 hover:bg-gray-300 text-white px-6 py-3 rounded-full shadow-lg transition duration-300 hover:text-black font-bold">
              <a href="/services">Get Started</a>
            </button>

            {isLogin ? (
               <div className="bg-gray-400 px-6 py-1 rounded-2xl shadow-lg font-bold text-white text-center leading-snug">
               <p className="text-s capitalize">{context?.userData?.name || 'User'}</p>
               <p className="text-xs">{context?.userData?.email || userEmail}</p>
                </div>
            ) : (
              <button className="bg-pink-500 hover:bg-gray-300 text-white px-10 py-3 rounded-full shadow-lg transition duration-300 hover:text-black font-bold">
                <a href="/login">Login</a>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
