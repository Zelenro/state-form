import styled from 'styled-components';

/* Switch starts here */
export const Rocker = styled.label`
  display: inline-block;
  position: relative;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #888;
  width: 7em;
  height: 4em;
  overflow: hidden;
  border-bottom: 0.5em solid #eee;

  &.rocker-small {
    font-size: 0.75em;
    margin: 1em;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0.5em;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #999;
    border: 0.5em solid #eee;
    border-bottom: 0;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const SwitchLeft = styled.span`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  width: 3em;
  transition: 0.2s;
  user-select: none;

  &.switch-left {
    height: 2.4em;
    width: 2.75em;
    left: 0.85em;
    bottom: 0.4em;
    background-color: #ddd;
    transform: rotate(15deg) skewX(15deg);
  }

  &::before {
    content: '';
    position: absolute;
    width: 0.4em;
    height: 2.45em;
    bottom: -0.45em;
    background-color: #ccc;
    transform: skewY(-65deg);

    &:first-child {
      left: -0.4em;
    }

    &:last-child {
      right: -0.375em;
      background-color: transparent;
      transform: skewY(65deg);
    }
  }

  input:checked + .switch-left {
    background-color: #0084d0;
    color: #fff;
    bottom: 0px;
    left: 0.5em;
    height: 2.5em;
    width: 3em;
    transform: rotate(0deg) skewX(0deg);

    &::before {
      background-color: transparent;
      width: 3.0833em;
    }
  }

  input:checked + .switch-left + .switch-right {
    background-color: #ddd;
    color: #888;
    bottom: 0.4em;
    right: 0.8em;
    height: 2.4em;
    width: 2.75em;
    transform: rotate(-15deg) skewX(-15deg);

    &::before {
      background-color: #ccc;
    }
  }

  /* Keyboard Users */
  input:focus + .switch-left,
  input:checked:focus + .switch-left {
    color: #333;
  }

  input:focus + .switch-left + .switch-right,
  input:checked:focus + .switch-left + .switch-right {
    color: #fff;
  }
`;

export const SwitchRight = styled(SwitchLeft)`
  right: 0.5em;
  bottom: 0;
  background-color: #bd5757;
  color: #fff;

  &.switch-left::before {
    right: -0.375em;
    background-color: transparent;
    transform: skewY(65deg);
  }
`;
