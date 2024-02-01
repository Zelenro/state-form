import React, { Component } from "react";
// import Toggle from "./Toggle/Toggle";
// import Expresso from "./Expresso/Expresso";
import Contacts from "./Contacts/Contacts";
import './../index'

class App extends Component {
  render() {
    return (
      <><div className="wrapper">
        {/* <Toggle/> */}
        {/* <Expresso /> */}
        <Contacts/>
        </div>
    </>)
  
  }
}

export default App