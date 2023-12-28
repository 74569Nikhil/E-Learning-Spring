import React from 'react';
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../CSS/Navigationbar.css';

export default function Navigationbar() {
  return (
    <Navbar bg="custom" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="brand-effect fancy-font">BACK-TO-SCHOOL</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/Home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/products">
              <Nav.Link>Subscription</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/bestseller">
              <Nav.Link>Courses</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/AboutUs">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link className="nav-link search-bar">
                <div className="d-flex align-items-center">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="search-input"
                  />
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
              </Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link className="nav-link cart-link">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                {' '}
                Cart
              </Nav.Link>
            </LinkContainer>

            <Button variant="primary" size="sm" value="LogOut">LogOut</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
