import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ecell.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        // Hide navbar when scrolling down
        setIsVisible(false);
      } else {
        // Show navbar when scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`transition-transform duration-500 ease-in-out py-4 md:rounded-[7rem] md:w-[80vw] w-[98vw] mx-auto fixed top-3 left-1/2 transform -translate-x-1/2 border-[1px] z-10 bg-black ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        border: '1px solid #322d22',
        boxShadow: '20px -10px 100px #282410',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '5rem', // Adjust the height here
      }}
    >
      <div className="container mx-auto px-[2rem] flex max-md:flex-col max-md:gap-5 justify-between">
        <div className="flex justify-between max-md:w-full">
          <Link to="/">
            <div className="w-20">
              <img src={Logo} alt="Logo" />
            </div>
          </Link>
          <div className="lg:hidden">
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
        <div className={`lg:flex lg:items-center lg:space-x-20 ${isOpen ? 'block' : 'hidden'} lg:block`}>
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
            className="text- block mt-4 lg:mt-0 text-white hover:text-[#ffde59] transition-colors duration-200"
            onClick={closeNav}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
