// Website Maintenance Page (Dark Cream Theme)

import React from 'react';
import WM  from './WM.jpg'
const WebsiteMaintenance = () => {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-r from-amber-400 to-amber-400 text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Website<br />Maintenance</h1>
          <p className="text-lg text-gray-800 mb-6 max-w-xl">
            Keep your website up-to-date, secure, and running smoothly with our comprehensive maintenance services.
          </p>

          <ul className="text-gray-800 space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-amber-700 text-xl">🔄</span>
              Regular Content & Plugin Updates
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-700 text-xl">🛡️</span>
              Security Monitoring & Backups
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-700 text-xl">📊</span>
              Performance Optimization Reports
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-amber-700 text-white font-semibold rounded-md hover:bg-amber-800 transition">
            <a href="/request-quote"> REQUEST A QUOTE →</a>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 text-center">
          <img
            src={WM}
            alt="Website Maintenance"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WebsiteMaintenance;
