import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-red-600 pt-24 px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-xl overflow-hidden">
        
        {/* Left: Red Section */}
        <div className="text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Contact Information</h2>
          <p className="mb-6">We’d love to hear from you. Reach out for any questions or support.</p>

          <div className="space-y-6 text-lg">
            <div>
              <h4 className="font-semibold">📍 Address</h4>
              <p>Whitefield<br />Bengaluru, India 560066</p>
            </div>
            <div>
              <h4 className="font-semibold">✉️ Email</h4>
              <p>WebDone00@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right: White Form */}
        <div className="bg-white p-10">
          <h2 className="text-4xl font-bold text-red-600 mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" required />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" required />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea placeholder="Your Message..." rows="5" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" required></textarea>
            </div>
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full transition">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
