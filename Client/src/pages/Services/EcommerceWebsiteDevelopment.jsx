// eCommerce Website Development Page (Orange Theme)

import React from 'react';

const EcommerceWebsiteDevelopment = () => {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <nav className="text-sm text-white/70 mb-4">Home &gt; Web Design &gt; eCommerce Web Design</nav>
          <h1 className="text-5xl font-extrabold leading-tight mb-4">eCommerce Website<br />Development</h1>
          <p className="text-lg text-white/90 mb-6 max-w-xl">
            From intuitive product catalogs to seamless payment integrations, our eCommerce web
            solutions are conversion-driven and mobile-ready.
          </p>

          <ul className="text-white space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-white text-xl">🛒</span>
              Intuitive Product Browsing
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white text-xl">💳</span>
              Seamless Payment Gateway Integration
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white text-xl">📱</span>
              Mobile-Optimized Experience
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-white text-orange-700 font-semibold rounded-md hover:bg-gray-100 transition">
            <a href="/request-quote"> REQUEST A QUOTE →</a>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 text-center">
          <img
            src="/images/services/ecommerce-web.png"
            alt="eCommerce Website Development"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default EcommerceWebsiteDevelopment;
