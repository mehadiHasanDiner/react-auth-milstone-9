import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from "react-bootstrap";
import './Login.css'
import { GoogleLoginButton } from "react-social-login-buttons";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: '',
        password: '',
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
                    photo: photoURL
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
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                }
                setUser(signedOutUser);
                console.log(res);
            })
            .catch(error => {

            })
    }
    const handleBlur = (e) => {
        let isFieldValid = true;

        // if (e.target.name === 'name') {
        //     isFieldValid = e.target.value;
        // }
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (e.target.name === 'confirmPassword') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        // console.log(user.email, user.password)
        // create account
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    // console.log(res)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            // sing login user
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log('sign in user ino', res.user)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        }).then(function () {
           console.log('User name update successfully')
        }).catch(function (error) {
          console.log(error)
        });
    }


    return (
        <Container>
            <form onSubmit={handleSubmit} className="mt-4 pt-3  pl-4 pr-4 from" style={{ backgroundColor: 'skyBlue' }}>
                {newUser ? <h3>Create an Account</h3>
                    :
                    <h3> Login </h3>}

                <p style={{ color: 'red', textAlign: 'center', fontSize: '20px' }}>{user.error}</p>
                {
                    user.success && <p style={{ color: 'green', textAlign: 'center', fontSize: '20px' }}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>

                }

                {newUser && <Form.Group className="mt-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleBlur} type="name" name="name" placeholder="Enter your Name" required />
                </Form.Group>}

                <Form.Group className="mt-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleBlur} type="password" name="password" placeholder="Password" required />
                </Form.Group>

                {newUser && <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confrim Password</Form.Label>
                    <Form.Control onBlur={handleBlur} type="password" name="confirmPassword" placeholder="Confrim Password" required />
                </Form.Group>}
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>

                <Button variant="primary" type="submit">{newUser ? 'Create Account' : 'Login'}</Button>
            </form>
            <div className=" pt-2 pb-4 from" style={{ backgroundColor: 'skyBlue' }}>
                <p style={{ textAlign: 'center' }} className="mt-2">Don't have an account? <label style={{ color: 'blue', fontWeight: 'bold', cursor: 'pointer' }}> <input type='checkbox' onChange={() => setNewUser(!newUser)} /> Create Account  </label>, Or</p>

                {
                    user.isSignedIn ? <div style={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}><GoogleLoginButton className="form-control" onClick={handleGoogleSignOut}>Sign out from Google</GoogleLoginButton></div>
                        :
                        <div style={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }}><GoogleLoginButton className="form-control" onClick={handleGoogleSignIn}>Continue with Google</GoogleLoginButton></div>
                }
            </div>
        </Container>
    );
};

export default Login;