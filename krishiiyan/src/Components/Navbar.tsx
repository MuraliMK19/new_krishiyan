import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import Translator from "./Translator";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="container-fluid sticky top-0 bg-white p-4 sm:p-6 flex justify-between items-center transition-all duration-500 xl:h-20 z-50 shadow-md">
      <Link to="/">
        <img src="Images/logoname.png" alt="Logo" className="h-12 sm:h-16" />
      </Link>
      <Translator />
      {/* Hamburger & Close Menu Icon */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 focus:outline-none focus:bg-gray-300 rounded"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
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
              className="w-6 h-6"
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

      {/* Navigation links */}
      <div
        className={`sm:flex space-x-0 sm:space-x-4 mt-4 sm:mt-0 ${isOpen ? "block" : "hidden"
          } bg-white sm:bg-transparent p-4 sm:p-0 rounded shadow sm:shadow-none`}
      >
        {[
          { path: "/who", name: "Home" },
          { path: "/tech", name: "Our Technology" },
          { path: "/what", name: "Team" },
          { path: "/blog", name: "Blog" },
          { path: "/contact", name: "Contact Us" },
          // { path: "/announcement", name: "Annoucements📢", className: "blink" },
          { path: "/login", name: "🔐 LOGIN", className: "border-2 bg-green-700 text-white rounded-lg tracking-widest" },
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block sm:inline-block text-[#333333] hover:text-gray-300 px-2 sm:px-4 py-1 ${location.pathname === link.path
              ? "border-b-2 border-green-500"
              : ""
              } font-semibold ${link.className}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
