import React, { useState } from 'react'
import Translator from './Translator'
import Home from '../pages/Home';
import { link } from 'fs';

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (e: any, Link: string) => {
    setActiveLink(Link)
  };

  return (
    <div className='container-fluid sticky top-0 bg-white p-4 sm:p-6 flex justify-between items-center transition-all duration-500 xl:h-20 z-50 shadow-md'>
      <div>
        <img src="Images/logoname.png" alt="Logo" className="h-12 sm:h-16" />
      </div>
      <div className='desktop_view'>
        <ul className='flex justify-between space-x-10 font-semibold'>
          <li className={activeLink === '#home' ? 'border-b-2 border-green-500' : ''}><a href='#home' onClick={(e) => handleLinkClick(e, '#home')}
            className="py-2 hover:text-green-500">Home</a></li>

          <li className={activeLink === '#about' ? 'border-b-2 border-green-500' : ''}><a href='#about' onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>

          <li className={activeLink === '#tech' ? 'border-b-2 border-green-500' : ''}><a href='#tech' onClick={(e) => handleLinkClick(e, '#tech')}>Our Technology</a></li>

          <li className={activeLink === '#team' ? 'border-b-2 border-green-500' : ''}><a href='#team' onClick={(e) => handleLinkClick(e, '#team')}>Team</a></li>

          <li className={activeLink === '#blog' ? 'border-b-2 border-green-500' : ''}><a href='#blog' onClick={(e) => handleLinkClick(e, '#blog')}>Blog</a></li>

          <li className={activeLink === '#contact' ? 'border-b-2 border-green-500' : ''}><a href='#contact' onClick={(e) => handleLinkClick(e, '#contact')}>Contact Us</a></li>
        </ul>
      </div>
      <div className='flex'>
        <button className="bg-[#3FC041] text-white rounded-md tracking-widest m-auto p-2"><a href="/login">Log In</a></button>
        <Translator />
      </div>
    </div>
  )
}

export default Navbar