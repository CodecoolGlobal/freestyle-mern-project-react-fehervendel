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
          const response = await res.json();
          
        if( response === 1){
                                     
            props.setShowRegisterForm(0);
            props.userDataSetter(prevState => ({
              ...prevState, name: userName
            }));
    
            props.userDataSetter(prevState => ({
              ...prevState, loggedIn: true
            }));
            
            props.userDataSetter(prevState => ({
              ...prevState, email: response.email
            }));
            props.tabSetter("home");
         

          //console.log("Registration was successful!");
        }else if( response === 0){
          setMessage("Username or Email already exists!");
          //console.log("Username or Email already exists!");
        } else if ( response === 2){
          setMessage("Given passwords are not the same!");
         // console.log("Given passwords are not the same!");
        } else {
          setMessage("Fill the fields!");
         // console.log("Fill the fields!");
        }
    } catch(error){
          console.error(error);
    } 
         
  }

  function back() {
    props.setShowRegisterForm(0);
    props.tabSetter("home");
  }

  return (
    <div className="registerContainer">
      <h1>Welcome to Shadow Gaming Store!</h1>
      
      <div className="userProfile">
      <div className="left">Username:</div>
     <div className="right">
     <input type="text" id="searchBar" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
     </div>
    
    
      </div>
      <div className="userProfile">
      <div className="left">Password:</div>
      <div className="right">
      <input
      id="searchBar"
        type="password"
        placeholder="Password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      ></input>
      </div>
      </div>
      <div className="userProfile">
      <div className="left">Password again:</div>
      <div className="right">
      <input
         id="searchBar"
        type="password"
        placeholder="Password again"
        value={userPasswordAgain}
        onChange={(e) => setUserPasswordAgain(e.target.value)}
      ></input>
      </div>
      </div>
      <div className="userProfile">
      <div className="left">E-mail:</div>
      <div className="right">
      <input id="searchBar" type="email" placeholder="E-mail" value={userEmail} onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      </div>
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
