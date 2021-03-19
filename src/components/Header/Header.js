import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="/home">Jattri-Pathao</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>                      
                        <Link className ="pl-3" to ="/home">Home</Link>
                        <Link className ="pl-3" to ="/destination">Destination</Link>
                        <Link className ="pl-3" to ="/login">Login</Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </div>
    );
};

export default Header;