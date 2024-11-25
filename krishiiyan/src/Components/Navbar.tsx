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
      <Link to="/Home">
        <img src="Images/logoname.png" alt="Logo" className="h-12 sm:h-16" />
      </Link>

      {/* Hamburger & Close Menu Icon */}
      <div className="flex flex-row-reverse mobile_screen">
        <div className="mt-2 p-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none focus:bg-gray-300 rounded bg-green-500"
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
        <div className="flex">
          {[{ path: "/login", name: "Log In", className: "bg-[#3FC041] text-white rounded-md tracking-widest m-auto p-2" }].map((link) => (
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
          {/* <Translator />   */}

        </div>
      </div>

      {/* Navigation links */}
      <div
        className={`sm:flex justify-center sm:space-x-4 mt-4 sm:mt-0 ${isOpen ? "block" : "hidden"
          } bg-white sm:bg-transparent p-4 sm:p-0 rounded shadow sm:shadow-none`}
      >
        {[
          { path: "/Home", name: "Home" },
          { path: "/tech", name: "Our Technology" },
          { path: "/what", name: "Team" },
          { path: "/blog", name: "Blog" },
          { path: "/contact", name: "Contact Us" },

        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block sm:inline-block text-[#333333] hover:text-gray-300 px-2 sm:px-4 py-1 ${location.pathname === link.path
              ? "border-b-2 border-green-500"
              : ""
              } font-semibold ${link}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center mobile">
        {[{ path: "/login", name: "Log In", className: "bg-[#3FC041] text-white rounded-md tracking-widest m-auto p-2" }].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block text-[#333333] hover:text-gray-300 px-2 sm:px-4 py-1 ${location.pathname === link.path
              ? "border-b-2 border-green-500"
              : ""
              } font-semibold ${link.className}`}
          >
            {link.name}
          </Link>
        ))}
        <Translator />
      </div>
    </nav>
  );
};

export default Navbar;
