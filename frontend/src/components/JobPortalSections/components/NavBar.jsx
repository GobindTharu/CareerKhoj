"use client";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Logo from "./Logo";
import Profile from "./Profile";
import { LoginButton } from "../buttons/LoginButton";

const NavBar = (props) => {
  const user = useSelector((state) => state.user.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const adminMenu = [{ name: ".", link: "/" }];
  [];
  const recruiterMenu = [
    { name: "Company", link: "/recruiter/companies" },
    { name: "Jobs", link: "/recruiter/jobs" },
  ];

  const jobSeekerMenu = [
    { name: "Home", link: "/" },
    { name: "Jobs", link: "/jobs" },
    { name: "Build Resume", link: "/test" },
    { name: "About Us", link: "/about-us" },
  ];

  const menuList =
    user?.role === "recruiter"
      ? recruiterMenu
      : user?.role === "admin"
      ? adminMenu
      : jobSeekerMenu;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
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

  const renderMenuItem = ({ name, link, Children }) => (
    <div key={link} className="relative group">
      <Link
        to={link}
        className="text-sm font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition"
      >
        {name}
      </Link>
      {Children && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block z-50">
          {Children.map((child) => (
            <Link
              key={child.link}
              to={child.link}
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-16">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {menuList.map(renderMenuItem)}
        </div>

        {/* User/Profile or Login (Desktop) */}
        <div className="hidden lg:flex items-center">
          {user ? <Profile data={props} /> : <LoginButton />}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden" ref={toggleRef}>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
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
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        ref={menuRef}
        className={clsx(
          "fixed top-16 right-0 w-80 h-[calc(100vh-4rem)] bg-white border-l border-gray-200 shadow-xl z-40 flex flex-col py-6 px-6 transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isMenuOpen,
            "translate-x-full": !isMenuOpen,
          }
        )}
      >
        <div className="mb-6">
          {user ? <Profile data={props} /> : <LoginButton />}
        </div>

        <nav className="space-y-3">
          {menuList.map(({ name, link }) => (
            <Link
              key={link}
              to={link}
              onClick={() => setIsMenuOpen(false)}
              className="block text-[15px] font-medium text-gray-800 px-4 py-2 rounded hover:bg-gray-100"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
