import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <div>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">My Gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Menu"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/">Gallery</NavDropdown.Item>
                  <NavDropdown.Item href="/aboutme">About Me</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
