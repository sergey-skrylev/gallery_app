import React from 'react';
import { Container, Navbar, NavDropdown, Nav,Image } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <div>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Меню"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/">Галерея</NavDropdown.Item>
                  <NavDropdown.Item href="/aboutme">Обо мне</NavDropdown.Item>
                  <hr/>
                  <NavDropdown.Item href="/aboutme"><Image 
                  src='https://avatars.githubusercontent.com/u/59506155?v=4'
                  rounded
                  height={36}/> Сергей Скрылев</NavDropdown.Item>
                  <NavDropdown.Item>sergey.s1991@yandex.ru</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="/">Тестовое задание</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
