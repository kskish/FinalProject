import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { AuthContext } from "../../shared/components/context/AuthContext";
import { Link } from "react-router-dom";
import img from "../../assets/tesla.jpg";
import { right } from "@popperjs/core";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Registration = () => {
  //   const placeId = useParams().placeId;
  let history = useHistory();
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [businessName, setBusinessName] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setBusinessName(e.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const SignUpHandler = (e) => {
    e.preventDefault();
    fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        businessName: businessName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setTimeout(function () {
            history.push("/authenticate");
          }, 2000);
          setOpen(true);
          //   auth.login();
          //   sessionStorage.setItem("user", data.data._id);
          //   history.push("/");
        }
      });
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={SignUpHandler}>
        <Image></Image>
        <Form>
          <Title>
            <h2 style={{ color: "#aeaeae", marginRight: "10px" }}>
              We are Juice
            </h2>
            <h2 style={{ color: "black" }}>HERE</h2>
          </Title>
          <Text>
            <p>Sign Up for FREE </p>
            <p>Create an account and add your location.</p>
          </Text>
          <Email>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
              onChange={handleEmail}
              required
            />
          </Email>
          <Password>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              variant="standard"
              onChange={handlePassword}
              required
            />
          </Password>
          <BusinessName>
            <TextField
              id="standard-basic"
              label="Your Business Name"
              //   type="password"
              variant="standard"
              onChange={handleName}
              required
            />
          </BusinessName>
          <ButtonDiv>
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
            <div>
              <p style={{ marginRight: "5px" }}>Already have an account?</p>
              <Link
                to={"/authenticate"}
                style={{ textDecoration: "none", color: "#aeaeae" }}
              >
                <p>Sign In</p>
              </Link>
            </div>
          </ButtonDiv>
        </Form>
      </FormContainer>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        style={{ height: "20%" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "bottom" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "40%" }}>
          Registered! Please log in to continue.
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  /* align-items: center; */
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
const FormContainer = styled.div`
  display: flex;
  height: 500px;
  width: 800px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
const Image = styled.div`
  height: 100%;
  width: 40%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Form = styled.form`
  display: flex;
  height: 100vh;
  width: 60%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background-color: white;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  margin-left: 50px;
`;
const Text = styled.div`
  width: 100%;
  margin-left: 50px;
  color: #aeaeae;
`;

const Email = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  & input {
    width: 30vw;
  }
`;
const Password = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  & input {
    width: 30vw;
  }
`;
const BusinessName = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  & input {
    width: 30vw;
    border: none;
  }
`;
const ButtonDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  margin-right: 50px;
  padding: 10px;
  & div {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Registration;
