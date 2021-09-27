import React from "react";
import "./UserItem.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Card from "../../shared/components/UIElements/Card";

const UserItem = (props) => {
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
  /* width: 50vw; */
  width: 250px;
  background: #04612e;
  margin: 5px 0;
  border-radius: 10px;

  &:hover {
    background: white;
    color: #04612e;
  }
`;

const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  padding: 5px;
`;

export default UserItem;
