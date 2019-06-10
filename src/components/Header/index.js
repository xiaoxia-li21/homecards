import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './style.scss';

const Header = () => {
  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Spotaroom</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>How we work</Nav.Link>
            <Nav.Link href='#link'>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
