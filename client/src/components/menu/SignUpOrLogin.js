import { useState, useEffect } from "react";
import "./css/SignUpOrLogin.css";

function SignUpOrLogin(props) {
  function signUp() {
    props.setShowRegisterForm("register");
    props.tabSetter("hide");
  }

  function logIn() {
    props.setShowRegisterForm("login");
    props.tabSetter("hide");
  }

  return (
    <div id="userLoginContainer">
      <button className="button1" type="button" onClick={signUp}>
        Sign Up
      </button>
      <button className="button1" type="button" onClick={logIn}>
        Login
      </button>
    </div>
  );
}

export default SignUpOrLogin;
