import React from "react";
import logo from "../logo.png";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid className="py-2 container-fluid">
          <Navbar.Brand  >
          <Link to="/" ><img src={logo} alt={logo} /></Link>  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="mx-2">
                Host your Home
              </Nav.Link>
              <Nav.Link className="mx-2" >
                Host Your Experience
              </Nav.Link>
              <Nav.Link className="mx-2" >
                Help
              </Nav.Link>
              <Button variant="btn btn-secondary mx-2">Login</Button>
              <Button variant="btn btn-success">Search</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
