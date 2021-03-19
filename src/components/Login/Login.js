import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from "react-bootstrap";
import './Login.css'
import { Link } from 'react-router-dom';
import { GoogleLoginButton} from "react-social-login-buttons";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        console.log('clicked')
    }
    return (
        <Container>

            <div className ="mt-4 p-3 from"  style={{ backgroundColor: 'skyBlue' }}>
            <h3>Login</h3>
                <Form.Group className ="mt-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login  </Button>
                    <p style = {{textAlign:'center'}} className ="mt-2">Don't have an account?<Link to ="SignUp"> Create Account</Link>, Or</p>
                    <hr/> 
                    <div style={{ display:'grid', alignItems:'center', justifyContent:'center'}}><GoogleLoginButton className ="form-control" onClick={handleGoogleSignIn}Continue with Google/></div>                   
            </div>
        </Container>
    );
};

export default Login;