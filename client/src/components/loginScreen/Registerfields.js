import { useState, useEffect } from "react";

function Registerfields(props) {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPasswordAgain, setUserPasswordAgain] = useState("");
  const [message, setMessage] = useState("");

 async function registerUser(e) {
    e.preventDefault();
    const data = { userName, userPassword, userPasswordAgain, userEmail };
    try{
        const res = await fetch("http://localhost:3001/api/userregistration", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
          const response = await res.text();
          console.log(response);
        if( response === "1"){
                                     
            props.setShowRegisterForm(0);
            props.userDataSetter(prevState => ({
              ...prevState, name: userName
            }));
    
            props.userDataSetter(prevState => ({
              ...prevState, loggedIn: true
            }));
            console.log(response);
            props.userDataSetter(prevState => ({
              ...prevState, email: response.email
            }));
            props.tabSetter("home");
         

          //console.log("Registration was successful!");
        }else if( response === "0"){
          setMessage("Username or Email already exists!");
          //console.log("Username or Email already exists!");
        } else if ( response === "2"){
          setMessage("Given passwords are not the same!");
         // console.log("Given passwords are not the same!");
        } else {
          setMessage("Fill the fields!");
         // console.log("Fill the fields!");
        }
    } catch(error){
          console.error(error);
    } 
          //
  }

  function back() {
    props.setShowRegisterForm(0);
    props.tabSetter("home");
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
      <div>{message && message}</div>
    </div>
  );
}

export default Registerfields;
