import React from "react";
import styled from "styled-components";

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Square2 />
      <Square3 />
      <Square4 />
      <Square5 />
      <Square6 />
    </>
  );
};

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: black;
  /* opacity: 0.7; */
  position: absolute;
  top: -60;
  left: -60px;
  z-index: -5;
  animation: square 20s linear alternate infinite;
  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;
const Square2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  /* opacity: 0.7; */
  position: absolute;
  top: 200;
  left: -100px;
  z-index: -5;
  animation: square2 20s linear alternate infinite;
  @keyframes square2 {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;
const Square3 = styled.div`
  width: 80px;
  height: 80px;
  background-color: black;
  /* opacity: 0.7; */
  position: absolute;
  top: 400;
  left: -50px;
  z-index: -5;
  animation: square3 20s linear alternate infinite;
  @keyframes square3 {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;
const Square4 = styled.div`
  width: 60px;
  height: 60px;
  background-color: black;
  /* opacity: 0.7; */
  position: absolute;
  top: -60;
  left: -60px;
  z-index: -5;
  animation: square4 20s linear alternate infinite;
  @keyframes square4 {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;
const Square5 = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  /* opacity: 0.7; */
  position: absolute;
  top: 200;
  left: -100px;
  z-index: -5;
  animation: square5 20s linear alternate infinite;
  @keyframes square5 {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;
const Square6 = styled.div`
  width: 80px;
  height: 80px;
  background-color: black;
  /* opacity: 0.7; */
  position: absolute;
  top: 400;
  left: -50px;
  z-index: -5;
  animation: square6 20s linear alternate infinite;
  @keyframes square6 {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

export default AnimatedShapes;
