import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can integrate EmailJS, Formspree, etc. here
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 p-6 bg-gray-100 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-6 text-gray-600">Feel free to reach out to us anytime.</p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3" />
              <span>assignmentsolver1234@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-3" />
              <span> 56006,Banglore India</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 p-6 bg-white rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <button
              type="submit"
              className="bg-emerald-500 text-white px-6 py-3 rounded hover:bg-emerald-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
