import React, {useState, useEffect} from 'react';

function Welcome(props){

   function signUp(){
    props.setShowRegisterForm(1);
    
   }

   function logIn(){
    props.setShowRegisterForm(2);
   }

    return(
        <>
        <h1>Welcome to our website!</h1>
        <button type="button" onClick={signUp}>Sign Up</button>
        <button type="button" onClick={logIn}>Login</button>
        </>
    )
}

export default Welcome;