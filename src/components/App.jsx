import React, { Component } from "react";
import Toggle from "./Toggle/Toggle";
import Expresso from "./Expresso/Expresso";
import Contacts from "./Contacts/Contacts";
import './../index'

class App extends Component {
state = {
    toggleSwitcher: true  
  };
  

  toggleComponent = () => {
      this.setState(prevState => ({
      toggleSwitcher: !prevState.toggleSwitcher 
    }));
  };

  render() {
    const { toggleSwitcher } = this.state;   
    return (
      <>
        <Toggle  onClick={this.toggleComponent } />
        <div className="wrapper">
          {
          toggleSwitcher ? <Expresso /> : <Contacts />
          }
        
        </div>
    </>)
  
  }
}

export default App