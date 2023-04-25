import "./css/Menu.css";
import logo from "../../images/logo.png";
import SignUpOrLogin from "./SignUpOrLogin";

function Menu(props) {
  const setShowTab = props.tabSetter;
  function shadowClickHandler() {
    setShowTab("home");
  }
  function storeClickHandler() {
    setShowTab("store");
  }

  return (
    <div id="header">
      {}
      <SignUpOrLogin setShowRegisterForm={props.setShowRegisterForm} />
      <div id="container">
        <div id="logoContainer">
          <img src={logo} alt="Matrix Logo" id="logo" />
          <div onClick={shadowClickHandler}>SHADOW</div>
        </div>
        <div id="menuGridContainer">
          <div onClick={storeClickHandler}>STORE</div>
          <div>LIBRARY</div>
          <div>ABOUT</div>
          <div>SUPPORT</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
