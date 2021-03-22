import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { UserContext } from "../../App";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from "bootstrap";

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand>Jattri-Pathao</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Link className="m-2" to="/home">Home</Link> {" "}
              <Link className="m-2" to="/destination/bike"> Destination </Link>{" "}

              <Link to="/login">
              {" "}
              {loggedInUser.email ? (
                <p>
                  {" "}
                  {loggedInUser.email.slice(0, 6)}{" "}
                </p>
              ) : (
                <Button  className="m-2" type="submit"> Login </Button>
              )}{" "}
            </Link>{" "}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
