import React, { useContext, useState } from "react";
import Google from "../../img/map-img/download.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Facebook from "../../img/map-img/facebook-512.png";
import "./Login.css";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";
// import '../Login/firebase.config'
import { useHistory, useLocation } from "react-router";
import { Button } from "react-bootstrap";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [logedInUser, setLoggedInUser] = useContext(UserContext);
  const [registerForm, setRegisterForm] = useState(false);
  const [registerUser, setReristerUser] = useState({});
  let history = useHistory();
  let location = useLocation();

  const goToLogIN = (Event) => {
    Event.preventDefault();
    setRegisterForm(true);
  };

  const goToRegister = (Event) => {
    Event.preventDefault();
    setRegisterForm(false);
  };
  let displayRegisterForm;
  let displayLoginForm;
  if (registerForm === false) {
    displayRegisterForm = "block";
    displayLoginForm = "none";
  }
  if (registerForm === true) {
    displayRegisterForm = "none";
    displayLoginForm = "block";
  }

  const registerUserWithEmailAndPass = (Event) => {
    Event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const confirmPass = document.getElementById("confirmPass");

    if (pass.value === confirmPass.value) {
      setReristerUser({
        name: name.value,
        email: email.value,
        pass: pass.value,
      });
      setLoggedInUser({
        name: name.value,
        email: email.value,
        pass: pass.value,
      });
      let { from } = location.state || { from: { pathname: "/" } };
      history.replace(from);
      console.log(registerUser.email, registerUser.pass);
      firebase
        .auth()
        .createUserWithEmailAndPassword(logedInUser.email, logedInUser.pass)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      setReristerUser({
        icon: <FontAwesomeIcon icon={faTimes} />,
        wrong: "You Password Dosn't Match",
      });
    }
  };

  const handleLogin = (Event) => {
    Event.preventDefault();
    const loginEmail = document.getElementById("loginEmail");
    const loginPass = document.getElementById("loginPass");
    setLoggedInUser({ email: loginEmail.value, pass: loginPass.value });
    let { from } = location.state || { from: { pathname: "/" } };
    history.replace(from);
    firebase
      .auth()
      .signInWithEmailAndPassword(loginEmail.value, loginPass.value)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  const handleGoogleRegister = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    let { from } = location.state || { from: { pathname: "/" } };

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        // var credential = result.credential;
        // var token = credential.accessToken;
        var user = result.user;
        setLoggedInUser({ email: user.email });
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const handleFbRegister = () => {
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    let { from } = location.state || { from: { pathname: "/" } };

    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        // var credential = result.credential;
        var user = result.user;
        setLoggedInUser({ email: user.email });
        // var accessToken = credential.accessToken;
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  };

  return (
    <div>
      <div className="RegisterForm" style={{ display: displayRegisterForm }}>
        <h1> Create an Account </h1>{" "}
        <form action="">
          <input type="text" id="name" placeholder="Name" />
          <br />
          <input type="email" id="email" placeholder="Email Address" />
          <br />
          <input type="password" id="pass" placeholder="Password" />
          <br />
          <input
            type="password"
            id="confirmPass"
            placeholder="Confirm Password"
          />
          <br />
          <input
            type="submit"
            onClick={registerUserWithEmailAndPass}
            value="Create an Accout"
          />

          <div style ={{marginTop: '10px'}}>
            Already have an account ?{" "}
            <Button style ={{cursor : 'pointer'}} onClick={goToLogIN}>
              Login Now{" "}
            </Button>{" "}
            <p style ={{textAlign:'center'}}>Or,</p>
          </div>{" "}
          <div className="wrong-pass">
            {" "}
            {registerUser.icon} {registerUser.wrong}{" "}
          </div>{" "}
          <div className="socialIcon">
          <span style ={{backgroundColor: 'white', padding: '10px'}}>  <img onClick={handleGoogleRegister} src={Google} alt="" /> 
            Sign in with Goooogle</span> <br/>

            <span style ={{backgroundColor: 'white', padding: '10px'}}><img onClick={handleFbRegister} src={Facebook} alt="" />Sign in with Facebook</span>
          </div>{" "}
        </form>{" "}
      </div>{" "}
      <div className="loginForm" style={{ display: displayLoginForm }}>
        <h1> Login To Your Account </h1>{" "}
        <form action="">
          <br />
          <input type="email" id="loginEmail" placeholder="Email Address" />
          <br />
          <input type="password" id="loginPass" placeholder="Password" />
          <br />
          <br />
          <input
            type="submit"
            onClick={handleLogin}
            value="Login to Your Account"
          />
          <div style ={{marginTop:'10px'}}>
            Don 't you have an account?{" "}
            <Button style ={{cursor : 'pointer'}} onClick={goToRegister}>
              Create one{" "}
              </Button>{" "}
            <div style ={{textAlign:'center'}}>Or,</div>
          </div>{" "}
          <div className="socialIcon">
          <span style ={{backgroundColor: 'white', padding: '10px'}}>  <img onClick={handleGoogleRegister} src={Google} alt="" /> 
            Sign in with Goooogle</span> <br/>

            <span style ={{backgroundColor: 'white', padding: '10px'}}><img onClick={handleFbRegister} src={Facebook} alt="" />Sign in with Facebook</span>
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default Login;
