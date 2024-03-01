import React from 'react';
import './toggle.css';
import { SiCoffeescript } from 'react-icons/si';
import { MdOutlineContactPhone } from 'react-icons/md';

const Toggle = ({ onClick }) => {
  const handleClick = e => {
    e.stopPropagation();
    onClick();
  };

  return (
    <>
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
