import React, { Component, useState } from "react";
import Toggle from "./Toggle/Toggle";
import Expresso from "./Expresso/Expresso";
import Contacts from "./Contacts/Contacts";
import './../index'

const App =()=> {
  const [toggleSwitcher, setToggleSwitcher] = useState(true)
  
  const toggleComponent = () => {
      setToggleSwitcher(prevState => !prevState);
  };

  
   
    return (
      <>
        <Toggle  onClick={toggleComponent } />
        <div className="wrapper">
          {
          toggleSwitcher ? <Expresso /> : <Contacts />
          }
        
        </div>
    </>)
  
  
}

export default App