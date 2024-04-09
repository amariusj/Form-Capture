import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => {

    return(

        <Navbar expand="lg" className="bg-dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Test Form Capture</Navbar.Brand>
                <Navbar.Toggle aria-controls="menu" />
                <Navbar.Collapse id="menu">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/customerforms">Customer Forms</Nav.Link>
                        <Nav.Link as={Link} to="/usform">US Form</Nav.Link>
                        <Nav.Link as={Link} to="/euform">EU Form</Nav.Link>
                        <Nav.Link as={Link} to="/auform">AU Form</Nav.Link>
                        <Nav.Link as={Link} to="/caform">CA Form</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )

}

export default Header