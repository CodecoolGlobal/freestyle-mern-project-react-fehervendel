function LoggedInUser(props) {

  function logOut(){
    props.loginSetter({
      name:'',
      library: [],
      cart: [],
      loggedIn: false
    });
  }

  return (
    <div id="userLoginContainer">
      <div>{props.userName}</div>
      <button type="button" onClick={logOut}>
        Log out
      </button>
    </div>
  );
}

export default LoggedInUser;
