import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/components/context/AuthContext";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

const PlaceItem = (props) => {
  let user = sessionStorage.getItem("user");
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = useState(null);
  const [typeOfConnector, setTypeOfConnector] = useState(null);
  const [rate, setRate] = useState(null);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  let history = useHistory();

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleTypeOfConnector = (e) => {
    setTypeOfConnector(e.target.value);
  };
  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClick = (e) => {
    let arraychargeType = [typeOfConnector];

    e.preventDefault();
    fetch("/location", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.id,
        address: address,
        chargeType: arraychargeType,
        rate: rate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setOpen(false);
          history.push("/");
        }
      });
  };

  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("/location", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: props.id,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === 200) {
              console.log("success");
            }
          });
        Swal.fire("Deleted!", "Your Location has been deleted.", "success");
        setTimeout(function () {
          history.push("/");
        }, 2000);
      }
    });
  };

  return (
    <Wrapper>
      <h3>{props.businessName}</h3>
      <p>Address: {props.address}</p>
      <p>
        Type of charger:{" "}
        {props.chargeType.map((type, index) => {
          return ` -- ${type}    `;
        })}
      </p>
      <p>Rate per hour: {props.rate}.00 $/h</p>
      <ButtonWrap>
        <Link
          to={`/confirmation/${props.id}`}
          style={{ textDecoration: "none" }}
        >
          {!user && (
            <Button variant="contained" color="success">
              Rent Here!
            </Button>
          )}
        </Link>

        {props.creatorId === user && (
          <>
            {user && (
              <Button variant="contained" onClick={handleClickOpen}>
                EDIT
              </Button>
            )}
            {user && (
              <Button variant="contained" color="error" onClick={handleClick}>
                DELETE
              </Button>
            )}
          </>
        )}
      </ButtonWrap>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can edit the address of your location, charge connectors & rate
            per hour.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="email"
            onChange={handleAddress}
            fullWidth
            variant="standard"
            style={{ border: "none" }}
            required
          />
          <TextField
            margin="dense"
            id="address"
            type="email"
            label="Charge Connector"
            onChange={handleTypeOfConnector}
            fullWidth
            variant="standard"
            required
          />
          <TextField
            margin="dense"
            id="address"
            type="email"
            label="Rate per Hour"
            onChange={handleRate}
            fullWidth
            variant="standard"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEditClick}>Update</Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  margin: 15px auto;
  width: 400px;
  height: 250px;
  padding: 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export default PlaceItem;
