import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './App.css';
import ProductBasket from './components/ProductBasket';
import BuisnessIntroduction from './components/BuisnessIntroduction';
import WhatWeOffer from './components/FinancialServicesOffer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductBasket/>
      <BuisnessIntroduction/>
      <WhatWeOffer/>
      <Footer/>
    </div>
  );
}

export default App;
