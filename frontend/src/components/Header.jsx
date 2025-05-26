import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#4F46E5] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">CareerKhoj</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-[#10B981]">Home</a>
          <a href="#features" className="hover:text-[#10B981]">Features</a>
          <a href="#jobs" className="hover:text-[#10B981]">Jobs</a>
          <a href="#login" className="hover:text-[#10B981]">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
