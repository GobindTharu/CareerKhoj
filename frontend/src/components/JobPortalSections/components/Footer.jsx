import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <Logo />
          <p className="mt-4 text-gray-600 leading-relaxed max-w-sm">
            CareerKhoj is your all-in-one job and resume-builder platform. Explore top jobs, build standout resumes, and elevate your career — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-gray-900">Quick Links</h3>
          <ul className="space-y-3 text-gray-700">
            {[
              { href: "/about-us", label: "About Us" },
              { href: "/", label: "Career" },
            ].map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-blue-600 hover:underline transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-gray-900">Our Location</h3>
          <p className="text-gray-600">Bhairahawa, Nepal</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-5 shadow-sm">
        {/* Social Icons */}
      

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center flex-1 md:text-center">
          &copy; {new Date().getFullYear()} CareerKhoj. All rights reserved. Your Personal Career Launchpad.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
