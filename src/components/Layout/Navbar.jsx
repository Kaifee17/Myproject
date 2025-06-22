import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50); // change when scrollY > 50px
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 py-4 shadow-md transition-all duration-300 ${
        isScrolled ? 'bg-gray-900' :'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <a className="text-xl font-bold text-gray-300" href="/">WebDone</a>
          
        </div>
        <ul className="flex items-center gap-8 text-white font-medium">
           <li><a href="/" className="hover:text-gray-400">Home</a></li>
           <li><a href="/about" className="hover:text-gray-400">About</a></li>
           <li><a href="/services" className="hover:text-gray-400">Services</a></li>
           <li><a href="/testimonials" className="hover:text-gray-400">Testimonials</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          <li>
            <button className="bg-gray-600 hover:bg-gray-400 text-white px-4 py-1 rounded-full transition duration-300 shadow-md border-none">
              <a href="/request-quote"> Request Quote</a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
