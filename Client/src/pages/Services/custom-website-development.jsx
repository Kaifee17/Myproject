import React from 'react';
import { Helmet } from 'react-helmet';
import CWD from './CWD.webp';

const CustomWebsiteDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Custom Website Design Company | WebDone</title>
        <meta
          name="description"
          content="Build high-converting, custom websites with WebDone’s expert design team. We create responsive, SEO-optimized, and uniquely branded websites tailored to your goals."
        />
        <link rel="canonical" href="https://webdone.in/services/custom-website-development" />
      </Helmet>

      <section className="relative pt-28 pb-20 px-6 bg-gradient-to-r from-blue-800 to-purple-800 text-white min-h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 relative z-10">

          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-5xl font-serif font-extrabold leading-tight mb-4">
              Custom Website<br />Design Company
            </h1>
            <p className="text-lg font-inter text-white/80 mb-6 max-w-xl">
              Partner with a top-rated custom website design company to create a fully optimized website,
              ready to drive engagement and conversions.
            </p>

            <ul className="text-white/90 space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-cyan-400 text-xl">▶</span>
                Create a Unique Digital Experience
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

            {/* Extended Content for SEO */}
            <div className="mt-6 text-white/80 space-y-4 max-w-2xl text-lg">
              <p>
                At WebDone, we design custom websites that align with your brand, industry, and business goals. Our solutions are crafted from scratch, offering complete control over design, performance, and functionality.
              </p>
              <p>
                Our team uses modern technologies like React, Tailwind CSS, and backend frameworks such as Node.js, Laravel, or Go to build scalable, responsive, and SEO-friendly websites. Whether you're a startup or an established business, we create custom digital solutions that perform.
              </p>
            </div>

            {/* Feature List */}
            <div className="mt-10 space-y-4 font-inter">
              <h2 className="text-2xl font-semibold">Why Choose WebDone?</h2>
              <ul className="list-disc pl-6 text-white/80">
                <li>Fully responsive, mobile-optimized designs</li>
                <li>Custom UI/UX tailored to your target audience</li>
                <li>Optimized for SEO and fast loading speeds</li>
                <li>Integrated with analytics and conversion tools</li>
              </ul>
            </div>

            {/* Button stays in flow */}
            <button className="mt-10 px-6 py-3 bg-white text-blue-800 font-semibold rounded-md hover:bg-gray-100 transition">
              <a href="/request-quote">REQUEST A QUOTE →</a>
            </button>
          </div>

          {/* Right Image – shifted slightly down from top */}
          <div className="flex-1 relative hidden lg:block">
            <img
              src={CWD}
              alt="Custom Web Design"
              className="absolute top-12 right-12 w-96 max-w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomWebsiteDevelopment;
