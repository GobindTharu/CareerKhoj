"use client";
import { useEffect, useRef, useState } from "react";
import { LoginButton } from "../buttons/loginButton";
import Logo from "../buttons/logoButton";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuList = [
    { name: "Home", link: "/" },
    { name: "Jobs", link: "/jobs" },
    { name: "Build Resume", link: "/build-resume" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-16">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {menuList.map(({ name, link }) => (
            <Link key={link} to={link}>
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
        <div className="lg:hidden">
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
        </div>
      </div>

      {/* Sliding Mobile Dropdown */}
      <div
        ref={menuRef}
        className={clsx(
          "fixed top-16 right-0 w-1/2 h-[calc(100vh-4rem)] bg-white border-l border-gray-200 shadow-xl z-40 flex flex-col justify-between py-8 px-6 transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isMenuOpen,
            "translate-x-full": !isMenuOpen,
          }
        )}
      >
        <nav className="space-y-4">
          {menuList.map(({ name, link }) => (
            <Link key={link} to={link} onClick={() => setIsMenuOpen(false)}>
              <span className="block text-[15px] font-semibold text-gray-800 px-4 py-2 rounded-sm hover:bg-gray-100 transition-all duration-200">
                {name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="my-4 border-t border-gray-100" />

        <div className="w-full">
          <LoginButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
