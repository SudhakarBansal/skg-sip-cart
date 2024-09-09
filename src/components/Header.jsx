import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.png'; // Make sure the logo path is correct

const Header = () => {

  return (
    <>
      {/* Navbar Section */}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logoImg}
              width="150"
              alt="LOGO"
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto" id="nav-links">
              <Nav.Link
                as={NavLink}
                to="/"
              >
                HOME
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/about"
              >
                ABOUT US
              </Nav.Link>

              <NavDropdown title="OFFERINGS" id="offerings-dropdown">
                <NavDropdown.Item as={Link} to="/offerings/service1">
                  Service 1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/offerings/service2">
                  Service 2
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="RESOURCES" id="resources-dropdown">
                <NavDropdown.Item as={Link} to="/resources/blog">
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/resources/case-studies">
                  Case Studies
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="LOGIN" id="login-dropdown">
                <NavDropdown.Item as={Link} to="/login/signin">
                  Sign In
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login/register">
                  Register
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={NavLink}
                to="/contact"
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

export default Header;
