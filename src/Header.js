import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar className="custom-navbar" bg="dark" variant="dark" expand="md">
      <div className="mx-auto d-flex align-items-center">
        <Navbar.Brand style={{fontSize:'24px'}} href="#home" className="text-center name">Alberto Fernandes Couto</Navbar.Brand>
      </div>
      <Navbar.Toggle className="primary" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#about" className="text-center">Sobre</Nav.Link>
          <Nav.Link href="#contact" className="text-center">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
