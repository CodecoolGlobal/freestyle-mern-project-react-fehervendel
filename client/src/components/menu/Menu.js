import "./css/Menu.css";
import logo from "../../images/logo.png";
import SignUpOrLogin from "./SignUpOrLogin";
import LoggedInUser from "./LoggedInUser";

function Menu(props) {
  const showTab = props.showTab;

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

  function libraryClickHandler() {
    setShowTab("library");
    props.setFilteredGames(false);
    props.setShowRegisterForm(0);
    props.setRenderSelectedGame(false);
  }

  function aboutClickHandler() {
    setShowTab("about");
    props.setFilteredGames(false);
    props.setShowRegisterForm(0);
    props.setRenderSelectedGame(false);
  }

  function supportClickHandler() {
    setShowTab("support");
    props.setFilteredGames(false);
    props.setShowRegisterForm(0);
    props.setRenderSelectedGame(false);
  }
  //props.userData.loggedIn
  return (
    <div id="header">
      {props.userData.loggedIn ? (
        <LoggedInUser userName={props.userData.name} loginSetter={props.loginSetter} tabSetter={props.tabSetter} />
      ) : (
        <SignUpOrLogin setShowRegisterForm={props.setShowRegisterForm} tabSetter={props.tabSetter} />
      )}
      <div id="container">
        <div id="logoContainer" className={showTab !== undefined && showTab === "home" ? "clicked" : "notClicked"}>
          <img src={logo} alt="Matrix Logo" id="logo" />
          <div id="logoText" onClick={shadowClickHandler}>
            SHADOW
          </div>
        </div>
        <div id="menuGridContainer">
          <div
            className={showTab !== undefined && showTab === "store" ? "clicked" : "notClicked"}
            onClick={storeClickHandler}
          >
            STORE
          </div>
          <div
            className={showTab !== undefined && showTab === "library" ? "clicked" : "notClicked"}
            onClick={libraryClickHandler}
          >
            LIBRARY
          </div>
          <div
            className={showTab !== undefined && showTab === "about" ? "clicked" : "notClicked"}
            onClick={aboutClickHandler}
          >
            ABOUT
          </div>
          <div
            className={showTab !== undefined && showTab === "support" ? "clicked" : "notClicked"}
            onClick={supportClickHandler}
          >
            SUPPORT
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
