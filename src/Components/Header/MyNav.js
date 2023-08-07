import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const MyNav = () => {
  return (
    <Container fluid='md'>
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" ><span className='asmato'>ASMATO LAUNDRY</span></Navbar.Brand>
        <Navbar.Toggle className='shadow-none' aria-controls="basic-navbar-nav" />
      </Container>
      
      <Container>
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-end ">
            <Nav.Link as={Link} to="/" className='nav-item text-danger'>Home</Nav.Link>
            <Nav.Link as={Link} className='nav-item text-white ' to="about">About</Nav.Link>
            <Nav.Link as={Link} className='nav-item text-white ' to="services">Services</Nav.Link>
            <Nav.Link as={Link} className='nav-item text-white ' to="price">Pricing</Nav.Link>
            <Nav.Link as={Link} className='nav-item text-white' to="contact">Contact</Nav.Link>
            <Nav.Link as={Link} className='nav-item text-white' to="mission">Our Mission</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    </Container>
  )
}

export default MyNav