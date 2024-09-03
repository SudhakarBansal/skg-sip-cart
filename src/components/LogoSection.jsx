import React from 'react';
import logo from '../assets/logo.jpeg';

const LogoSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8">
        <img src={logo} alt="Logo" className="h-32 md:h-40 lg:h-48 w-auto mb-4 shadow-lg rounded-lg" />
        <p className="text-lg font-semibold text-center">Digital Agency Logo</p>
      </div>
    </div>
  );
};

export default LogoSection;
