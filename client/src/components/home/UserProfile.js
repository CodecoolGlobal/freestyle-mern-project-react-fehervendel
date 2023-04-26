function UserProfile(props) {

  function changeData(){

  }

    return (
      <div>
        <div>Welcome to UserProfile Component!</div>
       <div>Your username: {props.userData.name}</div>
      <div><input placeholder="new user name"></input><button type="button" onClick={changeData}>Change</button></div> 
        <div>Your email: {props.userData.email}</div>  
        <div><input placeholder="new email address"></input><button type="button" onClick={changeData}>Change</button></div> 
      </div>
    );
  }
  
  export default UserProfile;
  