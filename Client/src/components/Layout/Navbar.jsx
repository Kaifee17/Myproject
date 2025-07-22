import React, { useEffect, useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { fetchDataFromApi } from '../../utils/api'; 
import AppContext from '../../context/appContext';



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLogin, setIsLogin } = useContext(AppContext);
  const [anchorE1, setanchorE1] = useState(null) ; 
  const open  = Boolean(anchorE1) ; 
  const navigate = useNavigate();
  const context = useContext(AppContext) ; 

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

const logout = () => {
  setanchorE1(null);
  const accessToken = localStorage.getItem("accessToken");

  fetchDataFromApi('/api/user/logout', {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => {
      console.log('Logout:', res);
      context.setIsLogin(false);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate('/');
    })
    .catch((err) => {
      console.error('Logout error:', err);
    });
};


  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-4 py-4 shadow-md transition-all duration-300 ${
      isScrolled ? 'bg-gray-900' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <a className="text-xl font-bold text-gray-300" href="/">WebDone</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            ☰
          </button>
        </div>

        <ul className={`flex flex-col md:flex-row md:items-center md:gap-8 gap-4 absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent text-white px-4 py-2 md:p-0 transition-all duration-300 ${
          menuOpen ? 'block' : 'hidden md:flex'
        }`}>
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/about" className="hover:text-gray-400">Prices</a></li>
          <li><a href="/services" className="hover:text-gray-400">Services</a></li>
          <li><a href="/testimonials" className="hover:text-gray-400">Testimonials</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          <li>
            <a
              href="/request-quote"
              className="bg-gray-600 hover:bg-gray-400 text-white px-4 py-1 rounded-full transition duration-300 shadow-md"
            >
              Request Quote
            </a>
          </li>

          {isLogin && (
            <li>
              <button
                onClick={logout}
                className="bg-gray-600 hover:bg-pink-600 text-white px-4 py-1 rounded-full transition duration-300 shadow-md"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
