import React, { useState, useEffect } from "react";
import Menu from "./components/menu/Menu.js";
import Registerfields from "./components/loginScreen/Registerfields.js";
import Loginfields from "./components/loginScreen/Loginfields.js";
import Home from "./components/home/Home.js";
import Store from "./components/store/Store.js";
import "./App.css";

function App() {
  const [featuredGames, setFeaturedGames] = useState([]);
  const [allGames, setAllGames] = useState();
  const [showRegisterForm, setShowRegisterForm] = useState(0);
  const [loginSelected, setloginSelected] = useState(false);
  const [showTab, setShowTab] = useState("home");
  const [filteredGames, setFilteredGames] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    library: [],
    cart: [],
    loggedIn: false,
  });

  useEffect(() => {
    getFirst20Games();
  }, []);
  async function getFirst20Games() {
    try {
      const res = await fetch("http://localhost:3001/api/games");
      const response = await res.json();
      console.log(response);
      setFeaturedGames(response);
    } catch (error) {
      console.log(`Fetching games failed: ${error}`);
    }
  }

  useEffect(() => {
    getAllGames();
  }, []);
  async function getAllGames() {
    try {
      const res = await fetch("http://localhost:3001/api/allgames");
      const response = await res.json();
      setAllGames(response);
    } catch (error) {
      console.log(`Fetching games failed: ${error}`);
    }
  }

  return (
    <div className="App">
      <Menu
        setShowRegisterForm={setShowRegisterForm}
        tabSetter={setShowTab}
        setFilteredGames={setFilteredGames}
        userData={loggedInUser}
        loginSetter={setLoggedInUser}
      />
      {showRegisterForm === "register" ? (
        <Registerfields setShowRegisterForm={setShowRegisterForm} tabSetter={setShowTab} />
      ) : (
        <></>
      )}
      {showRegisterForm === "login" ? (
        <Loginfields setShowRegisterForm={setShowRegisterForm} tabSetter={setShowTab} userData={loggedInUser} />
      ) : (
        <></>
      )}
      {showRegisterForm === "user" ? <Home featuredGames={featuredGames} /> : <></>}
      {showTab === "home" ? <Home featuredGames={featuredGames} /> : <></>}
      {showTab === "store" ? (
        <Store filteredGames={filteredGames} setFilteredGames={setFilteredGames} allGames={allGames} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
