import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full h-96">
      {/* Background Image */}
      <img
        src="/footer.png" // Replace with your actual image path
        alt="Footer background"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center text-outline p-4 top-1/2">
        <p className="sm:text-4xl text-lg font-semibold">© 2025 Ian Hoogstrate</p>
        <div className="sm:text-2xl text-base mt-2 space-x-4">
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
