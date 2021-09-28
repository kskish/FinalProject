import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import styled from "styled-components";
import AnimatedShapes from "../../shared/components/Animation/AnimatedShapes";
import img from "../../assets/tesla.jpeg";

const Users = () => {
  //this will store all products from fetch
  const [users, setUsers] = useState();
  //will become true after the data from fetch as been stored
  const [isLoaded, setIsLoaded] = useState(false);

  //retrieve all users
  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  {
    /* send all users via prop */
  }
  return (
    <Wrapper>
      {/* <Shape /> */}
      <MapContainer></MapContainer>
      <UsersWrapper>{isLoaded && <UserList users={users} />}</UsersWrapper>
      {/* <AnimatedShapes /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* background-color: #f0e5cf; */
  height: 100vh;
  width: 100vw;
`;

const MapContainer = styled.div`
  height: 100vh;
  width: 70vw;
  z-index: 5;
  background-image: url(${img});
  background-size: cover; /* Resize the background image to cover the entire container */
`;

const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #04612e;
  /* background-color: #32502e; */
  max-height: 100vh;
  width: 30vw;
  overflow-y: scroll;
`;

const Shape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -5;
  top: 0;
  left: 0;
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  /* clip-path: polygon(66% 0, 100% 0%, 100% 100%, 42% 100%); */
  background-color: #2929f7;
`;

export default Users;
