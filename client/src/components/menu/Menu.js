import "./css/Menu.css";
import logo from "../../images/logo.png";
import SignUpOrLogin from "./SignUpOrLogin";
import LoggedInUser from "./LoggedInUser";

function Menu(props) {
  const setShowTab = props.tabSetter;
  function shadowClickHandler() {
    setShowTab("home");
    props.setShowRegisterForm(0);
  }
  function storeClickHandler() {
    setShowTab("store");
    props.setFilteredGames(false);
    props.setShowRegisterForm(0);
    props.setRenderSelectedGame(false);
  }
//props.userData.loggedIn
  return (
    <div id="header">
      {}
      
      {props.userData.loggedIn ? <LoggedInUser userName={props.userData.name} loginSetter={props.loginSetter}/> : <SignUpOrLogin setShowRegisterForm={props.setShowRegisterForm} tabSetter={setShowTab}/> }
      <div id="container">
        <div id="logoContainer">
          <img src={logo} alt="Matrix Logo" id="logo" />
          <button onClick={shadowClickHandler}>SHADOW</button>
        </div>
        <div id="menuGridContainer">
          <button onClick={storeClickHandler}>STORE</button>
          <button>LIBRARY</button>
          <button>ABOUT</button>
          <button>SUPPORT</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
