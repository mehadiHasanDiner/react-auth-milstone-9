import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from "react-bootstrap";
import './Login.css'
import { Link } from 'react-router-dom';
import { GoogleLoginButton } from "react-social-login-buttons";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password : '',
        photo: '',
    })

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then((res) => {
                const { displayName, photoURL, email } = res.user;
                console.log(res.user);
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photoURL: photoURL
                }
                setUser(signedInUser);
                // console.log(displayName, photoURL, email);
            }).catch((error) => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // var email = error.email;
                // var credential = error.credential;
                console.log(error.message, error)
            });
    }

    const handleGoogleSignOut = () => {
        firebase.auth().signOut()
        .then (res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photoURL: ''
            }
            setUser(signedOutUser);
            console.log(res);
        })
        .catch(error => {

        })
    }
    const handleBlur = (e) =>{
        let isFormValid = true;
        if(e.target.name === 'email'){
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = () => {

    }


    return (
        <Container>

            <form onSubmit = {handleSubmit} className="mt-4 pt-3  pl-4 pr-4 from" style={{ backgroundColor: 'skyBlue' }}>
                <h3>Login</h3>
                <Form.Group className="mt-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur ={handleBlur} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur ={handleBlur} type="password" placeholder="Password"  required />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login  </Button>             
            </form>
            <div className=" pt-2 pb-4 from" style={{ backgroundColor: 'skyBlue' }}>
            <p style={{ textAlign: 'center' }} className="mt-2">Don't have an account?<Link to="SignUp"> Create Account</Link>, Or</p>
                {
                    user.isSignedIn ?  <div style={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}><GoogleLoginButton className="form-control" onClick={handleGoogleSignOut}>Sign out from Google</GoogleLoginButton></div>
                    :
                    <div style={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}><GoogleLoginButton className="form-control" onClick={handleGoogleSignIn}>Continue with Google</GoogleLoginButton></div>
                }
                </div>
        </Container>
    );
};

export default Login;