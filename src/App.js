import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './App.css';
import ProductBasket from './components/ProductBasket';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductBasket/>
    </div>
  );
}

export default App;
