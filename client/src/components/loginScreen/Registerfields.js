import { useState, useEffect } from "react";

function Registerfields(props) {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPasswordAgain, setUserPasswordAgain] = useState("");

  function registerUser(e) {
    e.preventDefault();
    const data = { userName, userPassword, userPasswordAgain, userEmail };
    fetch("http://localhost:3001/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    props.setShowRegisterForm(0);
  }

  function back() {
    props.setShowRegisterForm(0);
  }

  return (
    <div id="registerContainer">
      <label>Username:</label>
      <br />
      <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
      <br />
      <label>Password:</label>
      <br />
      <input
        type="password"
        placeholder="Password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      ></input>
      <br />
      <label>Password again:</label>
      <br />
      <input
        type="password"
        placeholder="Password again"
        value={userPasswordAgain}
        onChange={(e) => setUserPasswordAgain(e.target.value)}
      ></input>
      <br />
      <label>E-mail:</label>
      <br />
      <input type="email" placeholder="E-mail" value={userEmail} onChange={(e) => setEmail(e.target.value)}></input>
      <br />
      <button type="button" onClick={registerUser}>
        Register
      </button>
      <br />
      <button type="button" onClick={back}>
        Back
      </button>
    </div>
  );
}

export default Registerfields;
