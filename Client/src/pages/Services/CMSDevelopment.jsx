// CMS Development Page (Red Shaded Theme)

import React from 'react';
import CMS from './CMS.jpg'
const CMSDevelopment = () => {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-r from-rose-600 to-red-500 text-white min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
         
          <h1 className="text-5xl font-extrabold leading-tight mb-4">CMS<br />Development</h1>
          <p className="text-lg text-white/90 mb-6 max-w-xl">
            Simplify content updates and publishing with powerful CMS solutions tailored to your workflow and brand.
          </p>

          <ul className="text-white space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-white text-xl">📝</span>
              Easy-to-Manage Dashboards
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white text-xl">🔌</span>
              WordPress, Headless CMS, and More
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white text-xl">📈</span>
              SEO & Plugin Integration
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-white text-red-700 font-semibold rounded-md hover:bg-gray-100 transition">
            <a href="/request-quote"> REQUEST A QUOTE →</a>
            
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 text-center">
          <img
            src={CMS}
            alt="CMS Development"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CMSDevelopment;
