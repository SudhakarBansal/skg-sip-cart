import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={require('../assets/logo.jpeg')} alt="Logo" className="h-10" />
        <span className="text-white text-2xl font-bold ml-2">Conis.</span>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">Feature</a>
        <a href="#" className="text-white">Page</a>
        <a href="#" className="text-white">Blog</a>
        <a href="#" className="text-white">Contact Us</a>
      </div>
      <button className="bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded">Get a Quote</button>
    </header>
  );
};

export default Header;
