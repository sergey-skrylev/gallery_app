import React from 'react';
import { Container, Navbar, NavDropdown, Nav,Image } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <div>
        <Navbar variant="dark" bg="primary" expand="lg">
          <Container fluid>
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
                  <br/>
                  <NavDropdown.Item href="/aboutme"><Image 
                  src='https://avatars.githubusercontent.com/u/59506155?v=4'
                  rounded
                  height={36}/> Sergey Skrylev</NavDropdown.Item>
                  <NavDropdown.Item>sergey.s1991@yandex.ru</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="/">My Gallery</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
