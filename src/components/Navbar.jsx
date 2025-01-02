import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ecell.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTablet, setIsTablet] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  const handleResize = () => {
    setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`transition-transform duration-500 ease-in-out py-4 rounded-[70rem] md:w-[80vw] w-[98vw] mx-auto fixed top-3 left-1/2 transform -translate-x-1/2 border-[1px] z-10 bg-black ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        border: '1px solid #322d22',
        boxShadow: '20px -10px 100px #282410',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(1, 0, 0, 0.6)',
        height: '5rem',
      }}
    >
      <div className="container mx-auto px-[2rem] flex justify-between items-center h-full">
        <Link to="/" className="flex-shrink-0">
          <div className="w-20">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className={`lg:flex lg:items-center lg:space-x-20 ${isOpen ? 'block bg-black p-4 rounded-md absolute top-full left-0 right-0 lg:relative lg:bg-transparent lg:p-0' : 'hidden'} lg:block`}>
          <Link
            to="/"
            className="text-11 block mt-4 lg:mt-0 text-white hover:text-[#ffde59] transition-colors duration-200"
            onClick={closeNav}
          >
            Home
          </Link>
          <Link
            to="/teams"
            className="text-11 block mt-4 lg:mt-0 text-white hover:text-[#ffde59] transition-colors duration-200"
            onClick={closeNav}
          >
            Teams
          </Link>
          <Link
            to="/events"
            className="text-11 block mt-4 lg:mt-0 text-white hover:text-[#ffde59] transition-colors duration-200"
            onClick={closeNav}
          >
            Events
          </Link>
          <Link
            to="/contactus"
            className="text-11 block mt-4 lg:mt-0 text-white hover:text-[#ffde59] transition-colors duration-200"
            onClick={closeNav}
          >
            Contact Us
          </Link>
        </div>
        <div className={`${isTablet ? 'block' : 'lg:hidden'}`}>
          <button
            onClick={toggleNav}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;