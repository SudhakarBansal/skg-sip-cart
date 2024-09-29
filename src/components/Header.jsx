import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png"; // Make sure the logo path is correct

const Header = () => {
  // State to control navbar expand/collapse
  const [expanded, setExpanded] = useState(false);

  // Handler to collapse the navbar after a link is clicked
  const handleNavClick = () => {
    setExpanded(false); // Close the navbar
  };

  return (
    <>
      {/* Navbar Section */}
      <Navbar expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
            <img
              src={logoImg}
              loading="lazy"
              width="150"
              alt="LOGO"
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler"
            onClick={() => setExpanded(expanded ? false : true)} // Toggle navbar expand/collapse
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto" id="nav-links">
              <Nav.Link
                as={NavLink}
                to="/"
                onClick={handleNavClick} // Collapse after clicking
              >
                HOME
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/about"
                onClick={handleNavClick} // Collapse after clicking
              >
                ABOUT US
              </Nav.Link>

              <NavDropdown title="OFFERINGS" id="offerings-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/offerings/service1"
                  onClick={handleNavClick}
                >
                  Service 1
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/offerings/service2"
                  onClick={handleNavClick}
                >
                  Service 2
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="RESOURCES" id="resources-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/resources/blog"
                  onClick={handleNavClick}
                >
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/resources/case-studies"
                  onClick={handleNavClick}
                >
                  Case Studies
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={NavLink}
                to="/contact"
                onClick={handleNavClick} // Collapse after clicking
              >
                CONTACT US
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                target="_blank"
                to="https://ewa.njindiaonline.com/ewa/login"
                onClick={handleNavClick} // Collapse after clicking
              >
                LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;


//dyfq urjs pnlh xazp
