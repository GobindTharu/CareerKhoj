"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoginButton } from "../buttons/LoginButton";
import Profile from "./Profile";
import Logo from "./Logo";

const NavBar = (data) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const recruiterMenu = [
    { name: "Companies", link: "/admin/companies" },
    { name: "Jobs", link: "/admin/jobs" },
  ];

  const jobSeekerMenu = [
    { name: "Home", link: "/" },
    { name: "Jobs", link: "/jobs" },
    { name: "Build Resume", link: "/resume-builder" },
    { name: "About Us", link: "/about-us" },
  ];

  const menuList = user?.role === "recruiter" ? recruiterMenu : jobSeekerMenu;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
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

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-100 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
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

        {user ? (
          <div className="hidden lg:flex items-center">
            <Profile data={data} />
          </div>
        ) : (
          <div className="hidden lg:flex items-center">
            <LoginButton />
          </div>
        )}

        {/* Single Toggle Button */}
        <div className="lg:hidden" ref={toggleRef}>
          <button
            onClick={handleToggle}
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
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Sliding Mobile Dropdown */}
      <div
        ref={menuRef}
        className={clsx(
          "fixed top-16 right-0 w-80 h-100 bg-gray-100 border-l border-gray-200 shadow-xl z-40 flex flex-col justify-between py-8 px-6 transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isMenuOpen,
            "translate-x-full": !isMenuOpen,
          }
        )}
      >
        <div className="w-full">
          {/* <LogoutButton /> */}
          {user ? (
            <div className="lg:flex items-center">
              <Profile data={data} />
            </div>
          ) : (
            <div className="lg:flex items-center">
              <LoginButton />
            </div>
          )}
        </div>
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
      </div>
    </nav>
  );
};

export default NavBar;
