import { useState, useEffect } from "react";

function Loginfields(props) {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // async function commoditySubmitHandler(event) {
  //   event.preventDefault();
  //   const newCommodity = { name: commodityName, price: commodityPrice, picture: commodityPicture };
  //   try {
  //     const res = await fetch("http://localhost:3001/api/userlogin", {
  //       method: "POST",
  //       body: JSON.stringify(newCommodity),
  //       headers: { "Content-type": "application/json; charset=UTF-8" },
  //     });
  //     const response = await res.text();
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async function logIn(e) {
    e.preventDefault();
    const data = { userName: userName, userPassword: userPassword };
    try {
      const res = await fetch("http://localhost:3001/api/userlogin", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const response = await res.json();

      if (response.access === 1) {
        props.userDataSetter((prevState) => ({
          ...prevState,
          name: userName,
        }));

        props.userDataSetter((prevState) => ({
          ...prevState,
          loggedIn: true,
        }));

        props.userDataSetter((prevState) => ({
          ...prevState,
          email: response.email,
        }));

        console.log("Access enabled!");
        props.setShowRegisterForm("user");
        props.tabSetter("library");
      } else {
        //denying user entry
        console.log("Access denied!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="loginContainer">
    <h1>Welcome to Shadow Gaming Store!</h1>
      <div className="userProfile">
      <div className="left">Username:</div>
    
      <input id="searchBar" type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}></input>

      </div>

      <div className="userProfile">
      <div className="left">Password:</div>
      <input
       id="searchBar"
        type="password"
        placeholder="Password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      ></input>
      </div>

      <button type="button" onClick={logIn}>
        Log in
      </button>
    </div>
  );
}

export default Loginfields;
