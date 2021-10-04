import React, { useState, useContext } from "react";
import styled from "styled-components";
// import { useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { AuthContext } from "../../shared/components/context/AuthContext";
import { Link } from "react-router-dom";
import img from "../../assets/tesla_black.jpg";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Swal from "sweetalert2";

const Auth = () => {
  let history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [open, setOpen] = React.useState(false);
  const { setCurrentUser } = useContext(AuthContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const SignInHandler = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: email,
        userPassword: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setCurrentUser(true);
          sessionStorage.setItem("user", data.data._id);
          setTimeout(function () {
            history.push("/");
            window.location.reload();
          }, 1000);
          setOpen(true);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            // text: 'Something went wrong!',
            text: "Please provide a valid email address and password. If you continue to have issues logging into your account, contact our Support team.",
            // footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={SignInHandler}>
        <Image></Image>
        <Form>
          <Title>
            <h2 style={{ color: "#aeaeae", marginRight: "10px" }}>
              We are Juice
            </h2>
            <h2 style={{ color: "black" }}>HERE</h2>
          </Title>
          <Text>
            <p>Welcome back! </p>
            <p> Log in to your account to view your locations.</p>
          </Text>
          <Email>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
              onChange={handleEmail}
              required
              style={{ width: "80%" }}
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
              style={{ width: "80%" }}
            />
          </Password>
          <ButtonDiv>
            <Button type="submit" variant="contained">
              Sign In
            </Button>
            <div>
              <p style={{ marginRight: "5px" }}>Don't have an account yet?</p>
              <Link
                to={"/registration"}
                style={{ textDecoration: "none", color: "#aeaeae" }}
              >
                <p>Sign up</p>
              </Link>
            </div>
          </ButtonDiv>
        </Form>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          style={{ height: "20%" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "bottom" }}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: "20%" }}>
            Logged In!
          </Alert>
        </Snackbar>
      </FormContainer>
    </Wrapper>
  );
};

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
const FormContainer = styled.div`
  display: flex;
  height: 500px;
  width: 800px;
  margin-top: 50px;
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
  height: 100%;
  width: 60%;
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
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Password = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default Auth;
