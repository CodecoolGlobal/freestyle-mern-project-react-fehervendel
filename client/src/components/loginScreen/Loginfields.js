import { useState, useEffect } from "react";

function Loginfields(props) {
  function logIn() {
    props.setShowRegisterForm(0);
  }

  return (
    <div id="loginContainer">
      <label>Username:</label>
      <br />
      <input type="text" placeholder="Username" name="username"></input>
      <br />
      <label>Password:</label>
      <br />
      <input type="password" placeholder="Password" name="userpassword"></input>
      <br />
      <button type="button" onClick={logIn}>
        Log in
      </button>
    </div>
  );
}

export default Loginfields;
