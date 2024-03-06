import React from 'react';
import { BiCart } from 'react-icons/bi'; // Import the cart icon from Bootstrap Icons
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SideMenu from './SideMenu';
import {Link} from "react-router-dom"

function Header() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <SideMenu />
        <Container>
          <Navbar.Brand as={Link} to="/">Ooredoo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/InventoryPage">Inventory</Nav.Link>
            <Nav.Link as={Link} to="/Cart"><BiCart/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
