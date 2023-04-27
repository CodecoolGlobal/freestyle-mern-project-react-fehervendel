import { useState } from "react";

function UserProfile(props) {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [messageName, setMessageName] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  


  async function changeUserName(e){
    e.preventDefault();
    const data = { userName: userName, currentName: props.userData.name};
    try {
      const res = await fetch("http://localhost:3001/api/usernamechange", {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const response = await res.text()
      console.log(response);
        if(response === "NAME CHANGED OK"){
          props.userDataSetter(prevState => ({
            ...prevState, name: userName
          }));
          setMessageName("You have changed your username successfully!");
        }else if(response === "CANT CHANGE NAME") {
          setMessageName("Username already exists!");
        } else {
          setMessageName("Something went wrong");
        }
        
    } catch (error) {
      console.error(error);
    }
  }

  async function changeUserEmail(e){
    e.preventDefault();
    const data = { userEmail: userEmail};
    try {
      const res = await fetch("http://localhost:3001/api/useremailchange", {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const response = await res.json();
     //need response from server
    } catch (error) {
      console.error(error);
    }
  }

    return (
      <div>
        <div>Welcome to UserProfile Component!</div>
       <div>Your username: {props.userData.name}</div>
      <div><input placeholder="new user name" value={userName} onChange={(e) => setUserName(e.target.value)}></input><button type="button" onClick={changeUserName}>Change</button><div>{messageName}</div></div> 
        <div>Your email: {props.userData.email}</div> 
        <div><input placeholder="new email address" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}></input><button type="button" onClick={changeUserEmail}>Change</button><div>{messageEmail}</div></div> 
      </div>
    );
  }
  
  export default UserProfile;
  