import React, { useState } from "react";
import Menu from "./components/menu/Menu.js";
import Registerfields from "./components/loginScreen/Registerfields.js";
import Loginfields from "./components/loginScreen/Loginfields.js";
import "./App.css";

function App() {
  const [showRegisterForm, setShowRegisterForm] = useState(0);
  const [loginSelected, setloginSelected] = useState(false);

  return (
    <div className="App">
      <Menu setShowRegisterForm={setShowRegisterForm} />
      {showRegisterForm === "register" ? <Registerfields setShowRegisterForm={setShowRegisterForm} /> : <></>}
      {showRegisterForm === "login" ? <Loginfields setShowRegisterForm={setShowRegisterForm} /> : <></>}
    </div>
  );
}

export default App;
