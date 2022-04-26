import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import styled from "styled-components";

const MainNavigation = () => {
  return (
    <Wrapper>
      <Title>
        <h2 style={{ letterSpacing: "2px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Juice Here
          </Link>
        </h2>
      </Title>
      <div>
        <NavLinks />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #1c1c1c;
  color: white;
  height: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding-right: 5px; */
`;

const Title = styled.div`
  margin-left: 30px;
`;

export default MainNavigation;
