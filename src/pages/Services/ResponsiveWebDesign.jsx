// Responsive Web Design Page (Light Green Theme)

import React from 'react';

const ResponsiveWebDesign = () => {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-r from-green-500 to-emerald-700 text-white min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <nav className="text-sm text-white/70 mb-4">Home &gt; Web Design &gt; Responsive Web Design</nav>
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Responsive Web<br />Design</h1>
          <p className="text-lg text-white/90 mb-6 max-w-xl">
            Deliver seamless and consistent user experiences across all devices with our responsive design solutions.
          </p>

          <ul className="text-white space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-white text-xl">📱</span>
              Mobile-Friendly Layouts
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white text-xl">💻</span>
              Cross-Browser Compatibility
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white text-xl">⚡</span>
              Optimized Page Speed
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-white text-green-700 font-semibold rounded-md hover:bg-gray-100 transition">
            <a href="/request-quote"> REQUEST A QUOTE →</a>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 text-center">
          <img
            src="/images/services/responsive-web.png"
            alt="Responsive Web Design"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ResponsiveWebDesign;
