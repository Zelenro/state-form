import styled, { keyframes } from 'styled-components';

export const FeedbackContainer = styled.div`
  text-align: center;
  margin: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FeedbackTitle = styled.h5`
  color: #333;
  font-size: 16px;
  margin-bottom: 10px;
`;

const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

export const FeedbackButton = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  outline: none;
  color: #fff;
  background: #333;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  position: relative;
  padding: 4px;

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:hover:before {
    opacity: 1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px #009688;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }
`;
