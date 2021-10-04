import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./NavLinks.css";

const NavLinks = (props) => {
  let user = sessionStorage.getItem("user");

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const [userName, setUserName] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //retrieve user
  useEffect(() => {
    fetch(`/user/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setUserName(data.data.businessName);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <NavigationLink>
      <Wrapper>
        <NavLinkBar to="/locations">All Locations</NavLinkBar>
        {user && (
          <>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{
                color: "white",
                fontWeight: "normal",
                marginTop: "2px",
              }}
            >
              {`${userName}`}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              // style={{ padding: "60px" }}
              // classes={{ paper: classes.menuPaper }}
            >
              <NavLinkBar to={`/${user}/places`}>
                <MenuItem onClick={handleClose} style={{ color: "black" }}>
                  My Location
                </MenuItem>
              </NavLinkBar>
              <NavLinkBar to="/places/new">
                <MenuItem onClick={handleClose} style={{ color: "black" }}>
                  New Location
                </MenuItem>
              </NavLinkBar>
              <NavLinkBar to="/authenticate">
                <MenuItem
                  onClick={() => {
                    setCurrentUser(false);
                    sessionStorage.clear();
                    handleClose();
                  }}
                  style={{ color: "black" }}
                >
                  Sign Out
                </MenuItem>
              </NavLinkBar>
            </Menu>
          </>
        )}
        {!user && <NavLinkBar to="/authenticate">Sign In</NavLinkBar>}
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
  margin-right: 15px;
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
