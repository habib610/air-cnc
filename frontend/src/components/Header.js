import React from "react";
import logo from "../logo.png";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignOutAction } from "../Actions/userAction";
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
 

  const dispatch = useDispatch();

  const handleSignOut = () => {
    console.log("singout")
    dispatch(userSignOutAction())
  }
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid className="py-2 container-fluid">
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt={logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="mx-2">Host your Home</Nav.Link>
              <Nav.Link className="mx-2">Host Your Experience</Nav.Link>
              <Nav.Link className="mx-2">Help</Nav.Link>
             
              {userInfo && userInfo.name ? 
                <NavDropdown className="mr-2" title={userInfo.name} id="basic-nav-dropdown">
                  <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/order">
                  <NavDropdown.Item>My Order</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleSignOut}>SignOut</NavDropdown.Item>
                </NavDropdown>
              :
                <Button variant="btn btn-secondary mx-2">
                  <Link to="/signin">Login</Link>
                </Button>
              
              }

              <Button variant="btn btn-success">Search</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
