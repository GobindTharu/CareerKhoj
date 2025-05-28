"use client";
import { useState } from "react";
import { LoginButton } from "../buttons/loginButton";
import Logo from "../buttons/logoButton";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList = [
    { name: "Home", link: "/" },
    { name: "Jobs", link: "/jobs" },
    { name: "Build Resume", link: "/build-resume" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-16">
        {/* Logo */}
      <Logo/>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {menuList.map(({ name, link }) => (
            <Link key={link} href={link}>
              <span className="text-sm font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
                {name}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop Login */}
        <div className="hidden lg:flex items-center">
          <LoginButton />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-lg rounded-xl w-56 p-4 z-50 flex flex-col items-start animate-fadeIn">
              {menuList.map(({ name, link }) => (
                <Link key={link} href={link}>
                  <span className="block w-full py-2 px-4 rounded hover:bg-gray-100 cursor-pointer text-sm font-medium">
                    {name}
                  </span>
                </Link>
              ))}
              <div className="mt-3 w-full">
                <LoginButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
