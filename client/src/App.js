import React, {useState} from 'react';
import Registerfields from "./components/Registerfields.js";
import Welcome from "./components/Welcome.js";
import Loginfields from "./components/Loginfields.js";
import './App.css';

function App() {

  const [showRegisterForm, setShowRegisterForm] = useState(0);
  const [loginSelected, setloginSelected] = useState(false);


  return (
    <div className="App">
    {showRegisterForm==0 ? (
      <Welcome
      setShowRegisterForm={setShowRegisterForm}
      />
    ) : showRegisterForm==1 ? (
      <Registerfields
      setShowRegisterForm={setShowRegisterForm}
      />
    ) : /*showRegisterForm==2*/ (
      <Loginfields
      setShowRegisterForm={setShowRegisterForm}
      />
    )}
    </div>
  );
}

export default App;
