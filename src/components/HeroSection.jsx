import React from "react";
import heroimg from "../assets/HeroImage.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-white mt-16 md:mt-0">
      {/* Background Image */}
      <div className="w-full h-64 md:h-96 lg:h-[500px] bg-cover bg-center" style={{backgroundImage:`url(${heroimg})` }}>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-start w-1/2 z-10 h-96 text-left ml-7">
        <h1 className="text-3xl md:text-6xl text-white font-bold">Digital Agency And Your Bank Loaner.</h1>
        <p className="text-green-600 mt-4">We have a wide range of loans section for our customers</p>
        <div className="mt-8">
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">Apply for Loan</button>
          <button className="bg-gray-100 text-blue-600 font-bold py-2 px-4 rounded">See Services</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
