import "./css/Menu.css";
import logo from "../../images/logo.png";
import SignUpOrLogin from "./SignUpOrLogin";

function Menu(props) {
  return (
    <div id="header">
      <SignUpOrLogin setShowRegisterForm={props.setShowRegisterForm} />
      <div id="container">
        <div id="logoContainer">
          <img src={logo} alt="Matrix Logo" id="logo" />
          <div>SHADOW</div>
        </div>
        <div id="menuGridContainer">
          <div>STORE</div>
          <div>ABOUT</div>
          <div>SUPPORT</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
