import React from "react";
import "./User.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const User = (props) => {
  return (
    <Link
      to={`/${props.id}/places`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <Card>
        <p>{props.businessName}</p> {/* Display NAME of user */}
      </Card>
    </Link>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 250px;
  background: #04612e;
  margin: 5px 0;
  border-radius: 10px;

  &:hover {
    background: white;
    color: #04612e;
  }
`;

export default User;
