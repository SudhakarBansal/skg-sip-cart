import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={require('../assets/logo.jpeg')} alt="Logo" className="h-10" />
        <span className="text-white text-2xl font-bold ml-2">Conis.</span>
      </div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">Feature</a>
        <a href="#" className="text-white">Page</a>
        <a href="#" className="text-white">Blog</a>
        <a href="#" className="text-white">Contact Us</a>
      </div>
      <button className="bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded hidden md:block">Get a Quote</button>
      
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-600 text-white flex flex-col items-center space-y-4 md:hidden">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Feature</a>
          <a href="#" className="text-white">Page</a>
          <a href="#" className="text-white">Blog</a>
          <a href="#" className="text-white">Contact Us</a>
          <button className="bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded">Get a Quote</button>
        </div>
      )}
    </header>
  );
};

export default Header;
