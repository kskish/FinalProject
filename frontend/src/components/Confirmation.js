import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./confirmation.css";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";

import { Visa, Amex, Mastercard, InteracLogo } from "react-pay-icons";
import { Car, User, Envelope } from "phosphor-react";
const Confirmation = () => {
  let history = useHistory();
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);

  //Get the current location ID from URL
  const locationId = useParams().id;

  useEffect(() => {
    fetch(`/location/${locationId}`)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data.data);
      })
      .catch((error) => {
        console.log("Error in fetching friends", error);
      });
  }, []);

  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();

    let timerInterval;
    Swal.fire({
      title: "Processing your payment...",
      // html: 'I will close in <b></b> milliseconds.',
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 3000);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }

      Swal.fire({
        position: "center",
        icon: "success",
        title: `Thank you ${name}!`,
        html: "A confirmation email as been sent to you with your 4 digit pin code",
        showConfirmButton: true,
        timer: 7000,
      });
      setTimeout(function () {
        history.push("/");
      }, 2000);
    });
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <Wrapper>
      {location && (
        <Container>
          <div className="row">
            <div className="col-75">
              <div className="container">
                <div style={{ display: "colume" }}>
                  <div>
                    <h2>{location.businessName}</h2>
                  </div>
                  <div>
                    <strong>Location: </strong>
                    {location.address}
                  </div>
                  <div>
                    <strong>Connector: </strong>
                    {location.chargeType}
                  </div>
                  <div>
                    <strong>Rate per hour: </strong>
                    {location.rate}
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-50">
                      <h3>Contact Information</h3>
                      <Title>
                        <User size={20} />
                        <label for="fname">Full Name</label>
                      </Title>
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="John M. Doe"
                        onChange={handleName}
                      />
                      <Title>
                        <Envelope size={20} />
                        <label for="email">Email</label>
                      </Title>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                      />
                      <Title>
                        <Car size={20} />
                        <label for="plateNumber">Licence Plate </label>
                      </Title>
                      <input
                        type="text"
                        id="numberPlate"
                        name="numberPlate"
                        placeholder="G12 MCM"
                      />
                    </div>

                    <div className="col-50">
                      <h3>Payment</h3>
                      <label for="fname">Accepted Cards</label>
                      <div className="icon-container">
                        <InteracLogo
                          style={{ margin: 2, width: 32, borderRadius: 7 }}
                        />
                        <Visa style={{ margin: 2, width: 50 }} />
                        <Mastercard style={{ margin: 2, width: 50 }} />
                        <Amex style={{ margin: 2, width: 50 }} />
                      </div>
                      <label for="cname">Name on Card</label>
                      <input
                        type="text"
                        id="cname"
                        name="cardname"
                        placeholder="John More Doe"
                      />
                      <label for="ccnum">Credit card number</label>
                      <input
                        type="text"
                        id="ccnum"
                        name="cardnumber"
                        placeholder="1111-2222-3333-4444"
                      />
                      <label for="expmonth">Exp Month</label>
                      <input
                        type="text"
                        id="expmonth"
                        name="expmonth"
                        placeholder="September"
                      />

                      <div className="row">
                        <div className="col-50">
                          <label for="expyear">Exp Year</label>
                          <input
                            type="text"
                            id="expyear"
                            name="expyear"
                            placeholder="2025"
                          />
                        </div>
                        <div className="col-50">
                          <label for="cvv">CVV</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="352"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ButtonStyle>
                    {/* <button type="submit" className="btn">
                      Pay now
                    </button>
                    <button type="text" className="btn">
                      Cancel
                    </button> */}
                    <Button variant="contained" type="submit">
                      Pay now
                    </Button>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        type="text"
                        color="error"
                        style={{ marginLeft: "20px" }}
                      >
                        Cancel
                      </Button>
                    </Link>
                  </ButtonStyle>
                </form>
              </div>
            </div>
          </div>
        </Container>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #7fc8a9;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const ButtonStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  & button {
    width: 100px;

    &:hover {
      background-color: grey;
    }
  }
`;

const Title = styled.div`
  display: flex;
  margin-top: 10px;
  & label {
    margin-left: 7px;
    margin-top: 2px;
  }
`;

const Container = styled.div`
  border-radius: 10px;
`;

export default Confirmation;
