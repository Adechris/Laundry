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
            <Nav.Link as={Link} to="/" ><span className='nav-item'>Home</span></Nav.Link>
            <Nav.Link as={Link}  to="about"><span className='nav-item'>About</span></Nav.Link>
            <Nav.Link as={Link}  to="services"><span className='nav-item '> Services</span></Nav.Link>
            <Nav.Link as={Link}  to="price"><span className='nav-item'>Pricing</span> </Nav.Link>
            <Nav.Link as={Link} to="contact"><span className='nav-item'>Contact</span> </Nav.Link>
            <Nav.Link as={Link}  to="signup"><span className='nav-item'>Signup</span> </Nav.Link>
            <Nav.Link as={Link}  to="login"><span className='nav-item'>Login</span> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    </Container>
  )
}

export default MyNav