import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import styled from "styled-components";
// import AnimatedShapes from "../../shared/components/Animation/AnimatedShapes";
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
      <MapContainer></MapContainer>
      <UsersWrapper>{isLoaded && <UserList users={users} />}</UsersWrapper>
      {/* <AnimatedShapes /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
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
  max-height: 100vh;
  width: 30vw;
  overflow-y: scroll;
`;

export default Users;
