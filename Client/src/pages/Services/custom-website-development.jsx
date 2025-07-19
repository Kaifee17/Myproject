

import React from 'react';
import CWD from './CWD.jpg'

const CustomWebsiteDevelopment = () => {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-r from-blue-800 to-purple-800 text-white min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
         
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Custom Website<br />Design Company</h1>
          <p className="text-lg text-white/80 mb-6 max-w-xl">
            Partner with a top-rated custom website design company to create a fully optimized website,
            ready to drive engagement and conversions.
          </p>

          <ul className="text-white/90 space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-cyan-400 text-xl">▶</span>
              Create A Unique Digital Experience
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-400 text-xl">▶</span>
              Drive Higher Conversions
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-400 text-xl">▶</span>
              Attract Qualified Traffic
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-white text-blue-800 font-semibold rounded-md hover:bg-gray-100 transition">
            <a href="/request-quote"> REQUEST A QUOTE →</a>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 text-center">
          <img
            src={CWD}
            alt="Custom Web Design"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomWebsiteDevelopment;
