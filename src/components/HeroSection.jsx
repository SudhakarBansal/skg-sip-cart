import React from 'react';
import { Carousel } from 'react-bootstrap';
import heroImg1 from '../assets/finance-635805_1280.webp'; 
import heroImg2 from '../assets/heroimg2.webp';
import heroImg3 from '../assets/heroimg3.webp';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Carousel controls={true} indicators={true} fade={true} interval={5000} pause={false}>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src={heroImg1}
              alt="First slide"
              style={{ height: '600px', objectFit: 'cover' }}
            />
            <div className="overlay"></div>
          </div>
          <Carousel.Caption>
            <h1>Secure Your Future</h1>
            <p>Get expert financial advice and secure a prosperous future.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src={heroImg2}
              alt="Second slide"
              style={{ height: '600px', objectFit: 'cover' }}
            />
            <div className="overlay"></div>
          </div>
          <Carousel.Caption>
            <h1>Investment Opportunities</h1>
            <p>Explore various investment options tailored to your needs.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src={heroImg3}
              alt="Third slide"
              style={{ height: '600px', objectFit: 'cover' }}
            />
            <div className="overlay"></div>
          </div>
          <Carousel.Caption>
            <h1>Grow Your Wealth</h1>
            <p>Let us help you grow and protect your financial portfolio.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSection;
