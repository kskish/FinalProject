import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useHistory } from "react-router";

const DeleteConfirmation = () => {
  const placeId = useParams().placeId;
  const [open, setOpen] = React.useState(false);

  let history = useHistory();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    fetch("/location", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: placeId,
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
      <FormContainer>
        <h1 style={{ textDecoration: "underline" }}>Warning</h1>
        <h2>Are you sure you want to delete this location?</h2>
        <h3>
          You are about to delete this location and all its settings. Any
          resources used on the page will also be deleted.
        </h3>
        <h3>Note that this process can't be undone.</h3>
        <ButtonWrap>
          <Button
            variant="contained"
            color="error"
            style={{ height: "40px" }}
            onClick={deleteHandler}
          >
            Delete
          </Button>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button variant="contained" style={{ height: "40px" }}>
              Cancel
            </Button>
          </Link>
        </ButtonWrap>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          style={{ height: "20%" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "bottom" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "20%" }}>
            Deleted!
          </Alert>
        </Snackbar>
      </FormContainer>
    </Wrapper>
  );
};

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: white;
// `;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  background: #8e9eab; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eef2f3,
    #8e9eab
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eef2f3,
    #8e9eab
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

// const Modal = styled.div`
//   height: 400px;
//   width: 650px;
//   background-color: #e7e7e5;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   border-radius: 10px;
//   padding: 20px;
// `;

const FormContainer = styled.div`
  display: flex;
  height: 500px;
  width: 800px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background-color: white;
`;

const ButtonWrap = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

export default DeleteConfirmation;
