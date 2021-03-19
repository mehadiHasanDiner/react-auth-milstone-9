import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Container>
            <Navbar collapseOnSelect expand="lg" bg ="light" variant="light">
                <Navbar.Brand href="#home">Jattri-Pathao</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#1">Destination</Nav.Link>
                        <Nav.Link href="#2">Blog</Nav.Link>
                        <Nav.Link href="#3">Contact</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </div>
    );
};

export default Header;