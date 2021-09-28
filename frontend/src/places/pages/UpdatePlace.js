import React, { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import MuiAlert from "@mui/material/Alert";
// import Snackbar from "@mui/material/Snackbar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useHistory } from "react-router";

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  let history = useHistory();

  const [address, setAddress] = useState(null);
  const [typeOfConnector, setTypeOfConnector] = useState(null);
  const [rate, setRate] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const Alert = React.forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });
  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
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

  const placeSubmitHandler = (e) => {
    e.preventDefault();

    let arraychargeType = [typeOfConnector];

    e.preventDefault();
    fetch("/location", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: placeId,
        address: address,
        chargeType: arraychargeType,
        rate: rate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setTimeout(function () {
            history.push("/");
          }, 2000);
          setOpen(false);
        }
      });
  };

  return (
    <Wrapper>
      <From onSubmit={placeSubmitHandler}>
        <h1>Edit my location</h1>
        <div>
          <TextField
            id="outlined-basic"
            label="Adrress"
            variant="outlined"
            onChange={handleAddress}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Type of Connector"
            variant="outlined"
            onChange={handleTypeOfConnector}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Rate/hour"
            variant="outlined"
            type="number"
            onChange={handleRate}
          />
        </div>
        <button type="submit">Save</button>
      </From>
      {/* <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        style={{ height: "20%" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "bottom" }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "20%" }}>
          Location Updated!
        </Alert>
      </Snackbar> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const From = styled.form`
  display: flex;
  height: 600px;
  width: 600px;
  background: #e7e7e5;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  & input {
    height: 40px;
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

export default UpdatePlace;
