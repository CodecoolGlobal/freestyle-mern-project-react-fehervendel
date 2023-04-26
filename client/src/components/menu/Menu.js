import "./css/Menu.css";
import logo from "../../images/logo.png";
import SignUpOrLogin from "./SignUpOrLogin";

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
  }

  return (
    <div id="header">
      {}
      <SignUpOrLogin setShowRegisterForm={props.setShowRegisterForm} tabSetter={setShowTab}/>
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
