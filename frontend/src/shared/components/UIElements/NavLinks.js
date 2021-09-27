import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const NavLinks = (props) => {
  // const auth = useContext(AuthContext);

  let user = sessionStorage.getItem("user");
  console.log(user, "This is user");

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  return (
    <NavigationLink>
      <Wrapper>
        <NavLinkBar to="/locations">All Locations</NavLinkBar>
        {/* {auth.isLoggedIn && ( */}
        {user && (
          <NavLinkBar to={`/${user}/places`} exact>
            My Location
          </NavLinkBar>
        )}
        {/* {auth.isLoggedIn && ( */}
        {user && (
          <NavLinkBar to="/places/new" exact>
            New Location
          </NavLinkBar>
        )}
        {/* {!auth.isLoggedIn && ( */}
        {!user && (
          <NavLinkBar to="/authenticate" exact>
            Sign In
          </NavLinkBar>
        )}
        {/* {auth.isLoggedIn && ( */}
        {user && (
          <NavLinkBar
            to="/authenticate"
            exact
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
    /* background: white; */
    transition: ease-in-out;
    /* text-decoration: underline; */
    /* border-radius: 2px; */
  }
`;

// const Button = styled.div`
//   color: white;
//   margin: 10px 12px;
//   height: 30px;
//   width: 110px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 5px;
//   font-size: 15px;

//   & :hover {
//     background: white;
//     color: blue;
//     border: black;
//     border-radius: 2px;
//     text-decoration: underline;
//     transition: ease-in-out;
//     padding: 7px;
//   }
// `;

export default NavLinks;

// & div {
//   margin: 10px 12px;
//   height: 30px;
//   width: 110px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 5px;
//   font-size: 15px;
// }
// & :hover {
//   /* background: white; */
//   text-decoration: underline;
//   transition: ease-in-out;
// }
