import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  const cartCount = useSelector(state => state.cart.value);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold", fontSize: "25px" }}>
          Fakestore
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/fakestore-electronics/electronics">Electronics</Link>
            <Link className="nav-link" to="/fakestore-electronics/jewelery">Jewelery</Link>
            <Link className="nav-link" to="/fakestore-electronics/men's clothing">Men's Clothing</Link>
            <Link className="nav-link" to="/fakestore-electronics/women's clothing">Women's Clothing</Link>
            <Link className="nav-link" to="/filter">Filter</Link>
            <Link className="nav-link" to="/cart">Cart ({cartCount.length})</Link>
            <Link className="nav-link" to="/search">Search</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
