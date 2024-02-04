import React, { Component } from 'react';
// import { Input, Rocker, SwitchLeft, SwitchRight } from './Toggle.styled';
import './toggle.css';

class Toggle extends Component {
  render() {
    return (
      <>
        <label class="rocker rocker-small">
          <input type="checkbox" />
          <span class="switch-left"></span>
          <span class="switch-right"></span>
        </label>

        {/* <Rocker class="rocker rocker-small">
          <Input type="checkbox" />
          <SwitchLeft class="switch-left"></SwitchLeft>
          <SwitchRight class="switch-right"></SwitchRight>
        </Rocker> */}
      </>
    );
  }
}

export default Toggle;
