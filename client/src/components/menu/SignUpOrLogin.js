import { useState, useEffect } from "react";
import "./css/SignUpOrLogin.css";

function SignUpOrLogin(props) {
  function signUp() {
    props.setShowRegisterForm("register");
  }

  function logIn() {
    props.setShowRegisterForm("login");
  }

  return (
    <div id="userLoginContainer">
      <button type="button" onClick={signUp}>
        Sign Up
      </button>
      <button type="button" onClick={logIn}>
        Login
      </button>
    </div>
  );
}

export default SignUpOrLogin;
