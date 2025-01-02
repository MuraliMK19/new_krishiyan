import React, { useState } from 'react';
import Translator from './Translator';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (e: any, Link: any) => {
    setActiveLink(Link);
    setMenuOpen(false); // Close menu on link click
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <>    <div className="container-fluid sticky top-0 bg-white p-4 sm:p-6 flex justify-between items-center transition-all duration-500 xl:h-20 z-50 shadow-md">
      {/* Logo */}
      <div>
        <img src="Images/logoname.png" alt="Logo" className="h-12 sm:h-16" />
      </div>

      {/* Desktop View Navigation */}
      <div className="hidden lg:flex">
        <ul className="flex justify-between space-x-10 font-semibold">
          <li className={activeLink === '#home0' ? 'border-b-4 rounded-lg p-2 border-[#3fc041] text-[#3fc041]' : ''}>
            <a href="#home0" onClick={(e) => handleLinkClick(e, '#home0')} className="py-2 hover:text-[#3fc041]">
              Home
            </a>
          </li>
          <li className={activeLink === '#about' ? 'border-b-4 rounded-lg p-2 border-[#3fc041] text-[#3fc041]' : ''}>
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="py-2 hover:text-[#3fc041]">
              About
            </a>
          </li>
          <li className={activeLink === '#tech' ? 'border-b-4 rounded-lg p-2 border-[#3fc041] text-[#3fc041]' : ''}>
            <a href="#tech" onClick={(e) => handleLinkClick(e, '#tech')} className="py-2 hover:text-[#3fc041]">
              Our Technology
            </a>
          </li>
          <li className={activeLink === '#team' ? 'border-b-4 rounded-lg p-2 border-[#3fc041] text-[#3fc041]' : ''}>
            <a href="#team" onClick={(e) => handleLinkClick(e, '#team')} className="py-2 hover:text-[#3fc041]">
              Team
            </a>
          </li>
          <li className={activeLink === '#blog' ? 'border-b-4 rounded-lg p-2 border-[#3fc041] text-[#3fc041]' : ''}>
            <a href="#blog" onClick={(e) => handleLinkClick(e, '#blog')} className="py-2 hover:text-[#3fc041]">
              Blog
            </a>
          </li>
          <li className={activeLink === '#contact' ? 'border-b-4 rounded-lg p-2 border-[#3fc041] text-[#3fc041]' : ''}>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="py-2 hover:text-[#3fc041]">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu for Mobile View */}
      <div className="lg:hidden ">
        <button
          className="text-white text-3xl focus:outline-none rounded-full w-14"
          onClick={toggleMenu}
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-20 right-0 bg-white w-2/4 shadow-lg rounded-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
          }`}
      >
        <ul className="flex flex-col space-y-4 p-4 w-4/5 text-left text-[#3fc041]">
          <li className={activeLink === '#home0' ? 'border-b-2 pb-2 border-[#3fc041] w-1/2' : ''}>
            <a href="#home0" onClick={(e) => handleLinkClick(e, '#home0')} className="hover:text-[#3fc041]">
              Home
            </a>
          </li>
          <li className={activeLink === '#about' ? 'border-b-2 border-[#3fc041] pb-2 w-1/2' : ''}>
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#3fc041]">
              About
            </a>
          </li>
          <li className={activeLink === '#tech' ? 'border-b-2 border-[#3fc041] pb-2 w-1/2' : ''}>
            <a href="#tech" onClick={(e) => handleLinkClick(e, '#tech')} className="hover:text-[#3fc041]">
              Our Technology
            </a>
          </li>
          <li className={activeLink === '#team' ? 'border-b-2 border-[#3fc041] pb-2 w-1/2' : ''}>
            <a href="#team" onClick={(e) => handleLinkClick(e, '#team')} className="hover:text-[#3fc041]">
              Team
            </a>
          </li>
          <li className={activeLink === '#blog' ? 'border-b-2 border-[#3fc041] pb-2 w-1/2' : ''}>
            <a href="#blog" onClick={(e) => handleLinkClick(e, '#blog')} className="hover:text-[#3fc041]">
              Blog
            </a>
          </li>
          <li className={activeLink === '#contact' ? 'border-b-2 border-[#3fc041] pb-2 w-1/2' : ''}>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-[#3fc041]">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Login and Translator */}
      <div className="hidden lg:flex items-center space-x-4">
        <button className="bg-[#3FC041] text-white rounded-md tracking-widest px-4 py-2">
          <a href="/login">Log In</a>
        </button>
        <Translator />
      </div>
      <div className="flex lg:hidden absolute left-2/3 transform -translate-x-1/2">
        <button className="bg-[#3FC041] text-white rounded-md tracking-wide p-2 mx-auto text-lg">
          <a href="/login">Log In</a>
        </button>
      </div>
    </div>
    </>
  );
}

export default Navbar;
