import React from "react";

const Logo = () => {
  return (
    <>
      <div className="flex justify-start items-center">
        <img src="/logo.png" alt="CareerKhoj" className="h-16 w-16" />
        <h1 className="text-3xl font-semibold font-serif text-gray-700">
          CareerKhoj
        </h1>
      </div>
    </>
  );
};

export default Logo;
