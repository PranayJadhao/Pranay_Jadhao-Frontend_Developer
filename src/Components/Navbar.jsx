// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-amber-400 p-4 mt-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">BITVERSE FINANCE
        
        </div>
        
      
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        
   
        <div className="hidden lg:flex space-x-4">
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Our Products</a>
          <a href="#" className="text-white">Token Utility</a>
          <a href="#" className="text-white">Roadmap</a>
          <button className='bg-yellow-100 text-black p-2'><b>Connect Wallet</b></button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          <a href="#" className="block text-white py-2">Home</a>
          <a href="#" className="block text-white py-2">About</a>
          <a href="#" className="block text-white py-2">Services</a>
          <a href="#" className="block text-white py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
