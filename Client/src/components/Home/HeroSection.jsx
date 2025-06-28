import React from 'react';
import backgroundImage from '../../assets/background.avif'; // Adjust path as needed

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-black bg-opacity-20 w-full h-full flex items-center justify-center">
        <div className="text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            You Need  <span className="text-emerald-400">Website</span>,<br />
            We Create <span className="text-emerald-400">Websites</span>
          </h1>
          <p className="text-gray-200 text-lg mb-8">
            From personal portfolios to full-scale business solutions — we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pink-500 hover:bg-gray-300 text-white px-6 py-3 rounded-full shadow-lg transition duration-300 hover:text-black font-bold">
              <a href="/services">Get Started</a>
            </button>
            <button className="bg-pink-500 hover:bg-gray-300 text-white px-10 py-3 rounded-full shadow-lg transition duration-300 hover:text-black font-bold text-0.5xl">
              <a href="/Login">Login</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
