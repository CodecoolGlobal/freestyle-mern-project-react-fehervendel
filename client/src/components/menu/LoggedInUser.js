function LoggedInUser(props) {

  function logOut(){
    props.loginSetter({
      name:'',
      library: [],
      cart: [],
      loggedIn: false
    });
  }

  function showProfile(){
    props.tabSetter("user");
  }

  return (
    <div id="userLoginContainer">
      <div>Welcome {props.userName}!</div>
      <button type="button" onClick={showProfile}>Profile</button>
      <button type="button" onClick={logOut}>
        Log out
      </button>
    </div>
  );
}

export default LoggedInUser;
