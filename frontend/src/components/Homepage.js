import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import img from "../assets/mainCover.jpg";
import img from "../assets/city-homepage.jpg";
import "./Homepage.css";

const Homepage = () => {
  return (
    <Wrapper>
      <Text>
        <h1>JUICE HERE. The seach for excellence.</h1>
        <div>
          <h2>
            We are shaping the market with innovative charging technology
            solutions to enable the growth of electrifying transportation.
          </h2>
        </div>
        <Link to={"/locations"} style={{ textDecoration: "none" }}>
          <Button>
            <span style={{ letterSpacing: "3px" }}>VIEW ALL LOCATIONS</span>
          </Button>
        </Link>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-color: rgba(10, 10, 10, 0.5); /* Tint color */
  background-blend-mode: multiply;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  width: 100vw;
  height: 100vh;
  color: white;
`;

const Text = styled.div`
  margin-top: -30%;
  padding-left: 100px;
  display: flex;
  align-items: start;
  flex-direction: column;

  width: 50%;

  & h2 {
    font-size: 20px;
    padding-top: 20px;
    border-top: 1px solid white;
  }
`;

const Button = styled.div`
  color: white;
  border-bottom: 1px solid #ffd700;
`;

export default Homepage;
