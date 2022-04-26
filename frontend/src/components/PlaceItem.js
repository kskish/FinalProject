import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PlaceItem = (props) => {
  let user = sessionStorage.getItem("user");
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = useState(null);
  const [typeOfConnector, setTypeOfConnector] = useState(null);
  const [rate, setRate] = useState(null);

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
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your location has been updated!",
            showConfirmButton: false,
            timer: 2000,
          });
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
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.businessName}
          </Typography>
          <Typography variant="h5" component="div">
            <strong>Address: </strong>
            {props.address}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <strong>Type of charger:</strong>{" "}
            {props.chargeType.map((type, index) => {
              return ` -- ${type}    `;
            })}
          </Typography>
          <Typography variant="body2">
            <strong>Rate per hour:</strong> {props.rate}.00 $/h
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to={`/confirmation/${props.id}`}
            style={{ textDecoration: "none" }}
          >
            {!user && <Button size="small">Rent Here</Button>}
          </Link>
          {props.creatorId === user && (
            <>
              {user && (
                <Button size="small" onClick={handleClickOpen}>
                  EDIT
                </Button>
              )}
              {user && (
                <Button size="small" color="error" onClick={handleClick}>
                  DELETE
                </Button>
              )}
            </>
          )}
        </CardActions>
      </Card>

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
  border-radius: 10px;
  width: 75%;
  //height: 250px;
  margin: 15px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PlaceItem;
