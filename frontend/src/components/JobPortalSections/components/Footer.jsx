import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          {/* logo here  */}
          <h2 className="text-2xl font-bold mb-4">CareerKhoj</h2>

          <p className="text-sm text-gray-900">
            CareerKhoj is your all-in-one job and resume-builder platform.
            Explore top jobs, build standout resumes, and elevate your career —
            all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-900">
            <li>
              <a href="/about-us" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/career" className="hover:underline">
                Career
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:underline">
                FAQs / Help
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Jobs By Area */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Jobs By Functional Area
          </h3>
          <ul className="space-y-2 text-sm text-gray-900">
            <li>Website & Software</li>
            <li>Education & Training</li>
            <li>Graphic & UI/UX Design</li>
            <li>Accounting & Finance</li>
            <li>Restaurant & Food</li>
            <li>Health & Hospital</li>
            <li>Other More....</li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Location</h3>
          <p className="text-sm mb-3">Bhairahawa, Nepal</p>
          <iframe
            title="CareerKhoj Location"
            src="https://maps.google.com/maps?q=bhairahawa%2C%20nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-42 border-0 rounded-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 text-sm text-gray-300 px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Social Links */}
        <div className="flex items-center space-x-3">
          <span>Connect With Us:</span>
          <a href="#" className="text-white hover:text-blue-400 text-lg">
            <FaFacebook />
          </a>
          <a href="#" className="text-white hover:text-blue-300 text-lg">
            <FaLinkedin />
          </a>
          <a href="#" className="text-white hover:text-blue-300 text-lg">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-pink-400 text-lg">
            <FaInstagram />
          </a>
        </div>

        {/* Center: Copyright */}
        <p className="text-center flex-1 md:text-center">
          All rights reserved © {new Date().getFullYear()} CareerKhoj: Your
          Personal Career Launchpad.
        </p>

        {/* Right: Download App */}
        <div className="flex items-center space-x-2">
          <span>Download App</span>
          <a
            href="https://play.google.com/store/games?hl=en&pli=1"
            className="block"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Download App"
              className="h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
