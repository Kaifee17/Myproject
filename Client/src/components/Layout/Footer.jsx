import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTimes } from 'react-icons/fa';
import Imgg from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">WebDone</h1>
          <p className="text-gray-400">Certified Web Design & Development Partner.</p>
          <img src={Imgg} alt="Badges" className="mt-4 w-40" />
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/">Home</a></li>
            <li><a href="/about">Prices</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/request-quote">Request Quote</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/services/custom-website-development">Custom Website Development</a></li>
            <li><a href="/services/ecommerce-website-development">eCommerce Website Development</a></li>
            <li><a href="/services/responsive-web-design">Responsive Web Design</a></li>
            <li><a href="/services/cms-development">CMS Development</a></li>
            <li><a href="/services/web-application-development">Web Application Development</a></li>
            <li><a href="/services/website-maintenance">Website Maintenance</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="text-gray-400 text-sm mb-2">webdone00@gmail.com</p>
          <p className="text-gray-400 text-sm mb-2">Bellandur, Bangalore, India</p>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="https://www.linkedin.com/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=120&lwc=1348131"><FaFacebook /></a>
            <a href="https://x.com/?lang=en"><FaTimes /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} WebDone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
