import React from "react";
import MainHeder from "./UIElements/MainHeder";
import { Link } from "react-router-dom";
import NavLinks from "./UIElements/NavLinks";
import styled from "styled-components";

const MainNavigation = () => {
  return (
    <Wrapper>
      <Title>
        <h2>
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
  /* background: #2929f7; */
  background: #1c1c1c;
  color: white;
  height: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  margin-left: 30px;
`;

export default MainNavigation;
