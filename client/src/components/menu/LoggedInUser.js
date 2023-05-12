function LoggedInUser(props) {

  function logOut(){
    props.loginSetter({
      name:'',
      library: [],
      cart: [],
      loggedIn: false
    });
    props.tabSetter("home");
  }

  function showProfile(){
    props.tabSetter("user");
  }

  return (
    <div id="userLoginContainer">
      <div>Welcome {props.userName}!</div>
      <button className="button1" type="button" onClick={showProfile}>Profile</button>
      <button className="button1" type="button" onClick={logOut}>
        Log out
      </button>
    </div>
  );
}

export default LoggedInUser;
