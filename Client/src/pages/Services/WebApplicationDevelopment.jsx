import React from 'react';
import { Helmet } from 'react-helmet';
import WA from './WA.webp';

const WebApplicationDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Web Application Development Services | WebDone</title>
        <meta
          name="description"
          content="Develop secure, scalable, and high-performance web applications tailored to your business needs with WebDone."
        />
        <link rel="canonical" href="https://webdone.in/services/web-application-development" />
      </Helmet>

      <section className="pt-28 pb-20 px-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
          
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-5xl font-serif font-extrabold leading-tight mb-4">
              Web Application<br />Development
            </h1>
            <p className="text-lg font-inter text-gray-800 mb-6 max-w-xl">
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
              <a href="/request-quote">REQUEST A QUOTE →</a>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 text-center relative hidden lg:block">
            <img
              src={WA}
              alt="Web Application Development"
              className="mt-12 w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WebApplicationDevelopment;
