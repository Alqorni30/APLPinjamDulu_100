import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const NavComponent = () => {
  const navigate = useNavigate()
  return (
    <div>
        <Navbar expand="lg" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand onClick={() => navigate('/')}>Pinjam.id</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink onClick={() => navigate('/')}   >Home</NavLink>
                    <Nav.Link onClick={() => navigate('/About')} >About</Nav.Link>
                    <Nav.Link onClick={() => navigate('/Pinjam')} >Pinjam</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavComponent