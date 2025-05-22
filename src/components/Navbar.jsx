import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-[#4F46E5]">CareerKhoj</Link>
      <div className="space-x-6">
        <Link to="/features" className="text-gray-700 hover:text-[#4F46E5]">Features</Link>
        <Link to="/process" className="text-gray-700 hover:text-[#4F46E5]">How It Works</Link>
        <Link to="/signup" className="text-white bg-[#4F46E5] px-4 py-2 rounded-lg hover:bg-opacity-90">Sign Up</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
