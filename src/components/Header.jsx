import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logoImg from '../assets/logo.png'; // Make sure the logo path is correct

const CustomNavbar = () => {
  // State to track the active nav item
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    // Set the active item based on the current URL hash when the component mounts
    const setActiveFromHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const item = hash.substring(1); // Remove the '#' from the hash
        setActiveItem(item);
      } else {
        setActiveItem('home'); // Default to 'home' if no hash is present
      }
    };

    setActiveFromHash(); // Call this when component mounts
  }, []);

  // Handler to set the active item
  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  // Inline styles for active item background
  const activeStyle = {
    backgroundColor: '#3a9ddd',
    color: '#fff',
    borderRadius: '10px',
  };

  return (
    <>
      {/* Navbar Section */}
      <Navbar expand="lg">
        <Container >
          <Navbar.Brand href="#home">
            <img
              src={logoImg}
              width="150"
              alt="LOGO"
              className={`d-inline-block align-top logo`}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto" id="nav-links">
              <Nav.Link
                href="#home"
                style={activeItem === 'home' ? activeStyle : { color: 'black' }}
                onClick={() => handleNavClick('home')}
              >
                HOME
              </Nav.Link>

              <Nav.Link
                href="#about"
                id="about"
                style={activeItem === 'about' ? activeStyle : { color: 'black' }}
                onClick={() => handleNavClick('about')}
              >
                ABOUT US
              </Nav.Link>

              <NavDropdown title="OFFERINGS" id="offerings-dropdown" style={{ color: 'black' }}>
                <NavDropdown.Item href="#offerings/service1">Service 1</NavDropdown.Item>
                <NavDropdown.Item href="#offerings/service2">Service 2</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="RESOURCES" id="resources-dropdown" style={{ color: 'black' }}>
                <NavDropdown.Item href="#resources/blog">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#resources/case-studies">Case Studies</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="LOGIN" id="login-dropdown" style={{ color: 'black' }}>
                <NavDropdown.Item href="#login/signin">Sign In</NavDropdown.Item>
                <NavDropdown.Item href="#login/register">Register</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                href="#contact"
                style={activeItem === 'contact' ? activeStyle : { color: 'black' }}
                onClick={() => handleNavClick('contact')}
              >
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
