// Request A Quote Page (Light & Dark Orange Theme)

import React from 'react';
import Strive from '../assets/strive.png'
const RequestQuote = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row pt-20"> {/* Added padding-top to avoid hiding behind navbar */}
      {/* Left Panel */}
      <div className="md:w-1/2 bg-gradient-to-br from-orange-300 to-orange-600 text-white flex flex-col justify-center p-12">
        <h3 className="text-sm uppercase font-semibold tracking-wider">WebDone</h3>
        <h1 className="text-4xl font-extrabold leading-tight my-4">WebDone is here to help you with web </h1>

        <div className="my-6 space-y-4 text-lg">
          <p><strong>Expert</strong> Team Members</p>
          <p><strong>Results-Driven</strong> Approach</p>
          <p><strong>Streamlined</strong> Execution</p>
        </div>

        <h3 className="text-xs mt-10 tracking-wide">TRUSTED BY</h3>
        <div className="flex gap-4 mt-4">
          <img src="https://media.licdn.com/dms/image/v2/D560BAQGLFfE6duvqsA/company-logo_200_200/B56ZVUFNakGoAI-/0/1740872409207?e=1756339200&v=beta&t=GcsfLaktRlSh4yM-yqpBbvPc3KJIe3Y8fJUoo8MNKCw" alt="Tranquil AI" className="h-10" />
          <img src={Strive} alt="Strive Training" className="h-10" />
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="md:w-1/2 bg-white p-10 flex items-center justify-center">
        <form className="w-full max-w-md">
          <h2 className="text-lg font-semibold text-orange-600 uppercase mb-2">Request A Free Consultation</h2>
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Let's Create Something Amazing Together</h1>

          <input type="text" placeholder="Name*" className="w-full border-b border-gray-300 py-2 mb-6 outline-none" required />
          <input type="text" placeholder="Company Name*" className="w-full border-b border-gray-300 py-2 mb-6 outline-none" required />
          <input type="email" placeholder="Email*" className="w-full border-b border-gray-300 py-2 mb-6 outline-none" required />
          <input type="tel" placeholder="Phone*" className="w-full border-b border-gray-300 py-2 mb-6 outline-none" required />
          <input type="text" placeholder="Your Approximated Price Range*" className="w-full border-b border-gray-300 py-2 mb-6 outline-none" required />
          <textarea placeholder="Your Message*" className="w-full border-b border-gray-300 py-2 mb-6 outline-none" rows="4" required></textarea>

          <button type="submit" className="mt-4 px-6 py-3 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition">
            SUBMIT →
          </button>
        </form>
      </div>
    </section>
  );
};

export default RequestQuote;