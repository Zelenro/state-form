import React from 'react';
// import { Input, Rocker, SwitchLeft, SwitchRight } from './Toggle.styled';
import './toggle.css';
import { IoIosContacts } from 'react-icons/io';
import { SiCoffeescript } from 'react-icons/si';
import { MdOutlineContactPhone } from 'react-icons/md';

const Toggle = ({ onClick }) => {
  const handleClick = e => {
    e.stopPropagation();
    onClick();
  };

  return (
    <>
      {/* <div className="mid">
        <label className="rocker">
          <input type="checkbox" />
          <span className="switch-left" onClick={handleClick}>
            <IoIosContacts />
          </span>
          <span className="switch-right" onClick={handleClick}>
            <SiCoffeescript />
          </span>
        </label>
      </div> */}
      <div className="mid">
        <label className="rocker rocker-small">
          <input type="checkbox" />
          <span className="switch-left" onClick={handleClick}>
            <MdOutlineContactPhone />
          </span>
          <span className="switch-right" onClick={handleClick}>
            <SiCoffeescript />
          </span>
        </label>
      </div>
    </>
  );
};

export default Toggle;
