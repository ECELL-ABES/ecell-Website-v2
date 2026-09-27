import React, { useState, useEffect, useCallback } from 'react';
import { Link} from 'react-router-dom';
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

  const handleScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    }
  }, []);

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
  }, [handleScroll, handleResize]);

  return (
    <nav
      className={`transition-transform duration-500 ease-in-out py-2 rounded-full md:w-[80vw] w-[95vw] mx-auto fixed top-3 left-1/2 transform -translate-x-1/2 border-[1px] z-50 bg-black ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        border: '1px solid #322d22',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 222, 89, 0.05)',
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(10, 10, 10, 0.75)',
        height: '3.75rem',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-full">
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img src={Logo} alt="E-Cell ABESEC Logo" className="h-7 sm:h-8 w-auto object-contain" />
        </Link>
        <div className={`lg:flex lg:items-center lg:space-x-10 ${isOpen ? 'flex flex-col gap-1 absolute top-[calc(100%+8px)] left-0 right-0 mx-auto w-[95vw] md:w-[80vw] rounded-2xl border border-[#322d22] p-4 lg:relative lg:bg-transparent lg:p-0 lg:border-none lg:flex-row lg:gap-0' : 'hidden'} lg:block`}
          style={isOpen ? { backgroundColor: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(16px)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' } : {}}       >
          <Link
            to="/"
            className="text-sm font-medium block py-2 px-3 lg:py-0 lg:px-0 lg:mt-0 text-white hover:text-[#ffde59] transition-colors duration-200 rounded-lg lg:rounded-none hover:bg-[#ffde59]/5 lg:hover:bg-transparent"
            onClick={closeNav}
          >
            Home
          </Link>
          <Link
            to="/teams"
            className="text-sm font-medium block py-2 px-3 lg:py-0 lg:px-0 lg:mt-0 text-white hover:text-[#ffde59] transition-colors duration-200 rounded-lg lg:rounded-none hover:bg-[#ffde59]/5 lg:hover:bg-transparent"
            onClick={closeNav}
          >
            Teams
          </Link>
          <Link
            to="/events"
            className="text-sm font-medium block py-2 px-3 lg:py-0 lg:px-0 lg:mt-0 text-white hover:text-[#ffde59] transition-colors duration-200 rounded-lg lg:rounded-none hover:bg-[#ffde59]/5 lg:hover:bg-transparent"
            onClick={closeNav}
          >
            Events
          </Link>
          <Link
            to="/contactus"
            className="text-sm font-medium block py-2 px-3 lg:py-0 lg:px-0 lg:mt-0 text-white hover:text-[#ffde59] transition-colors duration-200 rounded-lg lg:rounded-none hover:bg-[#ffde59]/5 lg:hover:bg-transparent"
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