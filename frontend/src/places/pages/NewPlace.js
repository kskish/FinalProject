import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import img from "../../assets/store.jpg";

const NewPlace = () => {
  let history = useHistory();
  let user = sessionStorage.getItem("user");
  console.log("this is user", user);

  // const [businessName, setBusinessName] = useState(null);
  const [address, setAddress] = useState(null);
  const [typeOfConnector, setTypeOfConnector] = useState(null);
  const [rate, setRate] = useState(null);
  const [open, setOpen] = React.useState(false);

  // const handleBusinessName = (e) => {
  //   setBusinessName(e.target.value);
  // };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleTypeOfConnector = (e) => {
    setTypeOfConnector(e.target.value);
  };
  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const placeSubmitHandler = (e) => {
    e.preventDefault();

    fetch("/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        owner: user,
        address: address,
        chargeType: [typeOfConnector],
        rate: rate,
        isAvailable: true,
        // businessName: businessName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          // history.push("/");
          setTimeout(function () {
            history.push("/");
          }, 2000);
          setOpen(true);
        }
      });
  };

  return (
    <Wrapper>
      <From onSubmit={placeSubmitHandler}>
        <h2>Add new location to your business!</h2>
        {/* <div>
          <TextField
            id="outlined-basic"
            label="Name of Business"
            variant="outlined"
            onChange={handleBusinessName}
          />
        </div> */}
        <div>
          <TextField
            id="outlined-basic"
            label="Adrress"
            variant="standard"
            onChange={handleAddress}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Type of Connector"
            // variant="outlined"
            variant="standard"
            // value={typeOfConnector}
            onChange={handleTypeOfConnector}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Rate/hour"
            // variant="outlined"
            variant="standard"
            // type="number"
            onChange={handleRate}
          />
        </div>
        <Button color="success" variant="contained" type="submit">
          Add Location
        </Button>
        {/* <button type="submit">Add new Place!</button> */}
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          style={{ height: "7%" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "bottom" }}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: "20%" }}>
            New Location Added!
          </Alert>
        </Snackbar>
      </From>
    </Wrapper>
  );
};

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   background-color: white;
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
const Wrapper = styled.div`
  background-image: url(${img});
  background-size: cover; /* Resize the background image to cover the entire container */
  width: 100vw;
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const From = styled.form`
  display: flex;
  height: 500px;
  width: 500px;
  background: #e7e7e5;
  /* background: black; */
  opacity: 0.9;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* border-radius: 5px; */
  /* margin: 10px; */
  margin-left: 100px;
  & input {
    height: 30px;
    width: 300px;
    border: none;
  }

  & div {
    margin: 5px;
  }
  & button {
    height: 50px;
    width: 200px;
  }
`;

export default NewPlace;
