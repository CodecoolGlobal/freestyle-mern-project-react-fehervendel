import React, { useState } from "react";
import Menu from "./components/menu/Menu.js";
import Registerfields from "./components/loginScreen/Registerfields.js";
import Loginfields from "./components/loginScreen/Loginfields.js";
import Games from "./components/games/Games.js";
import Store from "./components/store/Store.js";
import "./App.css";

function App() {
  const [showRegisterForm, setShowRegisterForm] = useState(0);
  const [loginSelected, setloginSelected] = useState(false);
  const [showTab, setShowTab] = useState("home");

  return (
    <div className="App">
      <Menu setShowRegisterForm={setShowRegisterForm} tabSetter={setShowTab} />
      {showRegisterForm === "register" ? <Registerfields setShowRegisterForm={setShowRegisterForm} /> : <></>}
      {showRegisterForm === "login" ? <Loginfields setShowRegisterForm={setShowRegisterForm} /> : <></>}
      {showRegisterForm === "user" ? <div>component_placeholder</div> : <></>}
      {showTab === "home" ? <Games /> : <></>}
      {showTab === "store" ? <Store /> : <></>}
    </div>
  );
}

export default App;
