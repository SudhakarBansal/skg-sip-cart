import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://via.placeholder.com/800x400')` }}>
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-96 text-center">
        <h1 className="text-4xl md:text-6xl text-blue-900 font-bold">Digital Agency And Your Bank Loaner.</h1>
        <p className="text-gray-600 mt-4">We have a wide range of loans section for our customers</p>
        <div className="mt-8">
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">Apply for Loan</button>
          <button className="bg-gray-100 text-blue-600 font-bold py-2 px-4 rounded">See Services</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
