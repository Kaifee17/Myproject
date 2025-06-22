// Web Application Development Page (Light Yellow Theme)

import React from 'react';

const WebApplicationDevelopment = () => {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <nav className="text-sm text-gray-700 mb-4">Home &gt; Web Design &gt; Web Application Development</nav>
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Web Application<br />Development</h1>
          <p className="text-lg text-gray-800 mb-6 max-w-xl">
            We develop robust, scalable web applications tailored to your business logic, enhancing functionality and performance.
          </p>

          <ul className="text-gray-800 space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-yellow-600 text-xl">💡</span>
              Custom Business Logic Implementation
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-600 text-xl">🔐</span>
              Secure & Scalable Architecture
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-600 text-xl">🚀</span>
              Performance Optimization
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition">
            <a href="/request-quote"> REQUEST A QUOTE →</a>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 text-center">
          <img
            src="/images/services/web-app.png"
            alt="Web Application Development"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WebApplicationDevelopment;
