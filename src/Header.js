import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" className="navbar-custom">
        <div className="container">
          <Navbar.Brand style={{fontSize:'24px'}} href="#home" className="name">Alberto Fernandes Couto</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Link style={{fontSize:'24px'}} href="#about">Sobre</Nav.Link>
              <Nav.Link style={{fontSize:'24px'}} href="#contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
