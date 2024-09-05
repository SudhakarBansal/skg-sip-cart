import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logoImg from '../assets/logo.png'; // Make sure the logo path is correct

const CustomNavbar = () => {
  // State to track the active nav item
  const [activeItem, setActiveItem] = useState('');

  // Handler to set the active item
  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  // Inline styles for active item background
  const activeStyle = {
    backgroundColor: '#3a9ddd',
    color: '#fff',
    borderRadius : '10px'
  };

  return (
    <>
      {/* Logo Section */}
      <div className="d-flex align-items-center justify-content-center py-3">
        <img
          src={logoImg}
          alt="SKG SIP CART"
          style={{ width: '300px' }} // Adjust the size of the logo if needed
        />
      </div>

      {/* Navbar Section */}
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                href="#home"
                style={activeItem === 'home' ? activeStyle : {color:'white'}}
                onClick={() => handleNavClick('home')}
              >
                HOME
              </Nav.Link>

              <NavDropdown
                title="ABOUT US"
                id="about-dropdown"
                style={activeItem === 'about' ? activeStyle : {color:'white'}}
                onClick={() => handleNavClick('about')}
              >
                <NavDropdown.Item href="#about/company">Company</NavDropdown.Item>
                <NavDropdown.Item href="#about/team">Team</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="OFFERINGS"
                id="offerings-dropdown"
                style={activeItem === 'offerings' ? activeStyle : {color:'white'}}
                onClick={() => handleNavClick('offerings')}
              >
                <NavDropdown.Item href="#offerings/service1">Service 1</NavDropdown.Item>
                <NavDropdown.Item href="#offerings/service2">Service 2</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="RESOURCES"
                id="resources-dropdown"
                style={activeItem === 'resources' ? activeStyle : {color:'white'}}
                onClick={() => handleNavClick('resources')}
              >
                <NavDropdown.Item href="#resources/blog">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#resources/case-studies">Case Studies</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="EVENTS"
                id="events-dropdown"
                style={activeItem === 'events' ? activeStyle : {color:'white'}}
                onClick={() => handleNavClick('events')}
              >
                <NavDropdown.Item href="#events/webinars">Webinars</NavDropdown.Item>
                <NavDropdown.Item href="#events/seminars">Seminars</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="LOGIN"
                id="login-dropdown"
                style={activeItem === 'login' ? activeStyle : {color:'white'}}
                onClick={() => handleNavClick('login')}
              >
                <NavDropdown.Item href="#login/signin">Sign In</NavDropdown.Item>
                <NavDropdown.Item href="#login/register">Register</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                href="#downloads"
                style={activeItem === 'downloads' ? activeStyle : {color:'white'}}
                onClick={() => handleNavClick('downloads')}
              >
                DOWNLOADS
              </Nav.Link>

              <Nav.Link
                href="#assistance"
                style={activeItem === 'assistance' ? activeStyle : {color:'white'}}
                onClick={() => handleNavClick('assistance')}
              >
                ASSISTANCE
              </Nav.Link>

              <Nav.Link
                href="#contact"
                style={activeItem === 'contact' ? activeStyle : {color:'white'}}
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
