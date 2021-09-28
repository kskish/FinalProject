import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const NavLinks = (props) => {
  let user = sessionStorage.getItem("user");
  // console.log(user, "This is user");

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  return (
    <NavigationLink>
      <Wrapper>
        <NavLinkBar to="/locations">All Locations</NavLinkBar>
        {user && <NavLinkBar to={`/${user}/places`}>My Location</NavLinkBar>}
        {user && <NavLinkBar to="/places/new">New Location</NavLinkBar>}
        {!user && (
          // <NavLinkBar to="/authenticate" exact>
          <NavLinkBar to="/authenticate">Sign In</NavLinkBar>
        )}
        {user && (
          <NavLinkBar
            to="/authenticate"
            // exact
            onClick={() => {
              setCurrentUser(false);
              sessionStorage.clear();
            }}
          >
            Logout
          </NavLinkBar>
        )}
      </Wrapper>
    </NavigationLink>
  );
};

const NavigationLink = styled.ul`
  list-style-type: none;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const NavLinkBar = styled(Link)`
  padding: 7px;
  color: white;
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    color: grey;
    transition: ease-in-out;
  }
`;

export default NavLinks;
