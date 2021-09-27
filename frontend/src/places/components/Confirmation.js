import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import "./confirmation.css";

const Confirmation = () => {
  const placeId = useParams().id;
  //   const [confirmation, setConfirmation] = useState(null);
  //   const [isLoaded, setIsLoaded] = useState(true);

  //   useEffect(() => {
  //     fetch(`/reservation/${reservationId}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setConfirmation(data.data);
  //         setIsLoaded(true);
  //       })
  //       .catch((error) => {
  //         console.log("Error in fetching friends", error);
  //       });
  //   }, []);

  return (
    <Wrapper>
      <Container>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form>
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label for="fname">
                      <i className="fa fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="John M. Doe"
                    />
                    <label for="email">
                      <i className="fa fa-envelope"></i> Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                    />
                    <label for="plateNumber">Licence Plate </label>
                    <input
                      type="text"
                      id="numberPlate"
                      name="numberPlate"
                      placeholder="G12 MCM"
                    />
                    <label for="adr">
                      <i className="fa fa-address-card-o"></i> Address
                    </label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="542 W. 15th Street"
                    />
                    <label for="city">
                      <i className="fa fa-institution"></i> City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="New York"
                    />

                    <div className="row">
                      <div className="col-50">
                        <label for="state">Province</label>
                        <input
                          type="text"
                          id="state"
                          name="province"
                          placeholder="Quebec"
                        />
                      </div>
                      <div className="col-50">
                        <label for="zip">Postal Code</label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder="H8H 8H8"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <h3>Payment</h3>
                    <label for="fname">Accepted Cards</label>
                    <div className="icon-container">
                      <i
                        className="fa fa-cc-visa"
                        style={{ color: "navy" }}
                      ></i>
                      <i
                        className="fa fa-cc-amex"
                        style={{ color: "blue" }}
                      ></i>
                      <i
                        className="fa fa-cc-mastercard"
                        style={{ color: "red" }}
                      ></i>
                      <i
                        className="fa fa-cc-discover"
                        style={{ color: "orange" }}
                      ></i>
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
                          placeholder="2018"
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
                {/* <label>
                <input type="checkbox" checked="checked" name="sameadr" />{" "}
                Shipping address same as billing
              </label> */}
                <ButtonStyle>
                  <button type="submit" className="btn">
                    Continue to secure payment
                  </button>
                </ButtonStyle>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  border-radius: 10px;
  margin: 50px;
  padding: 20px;
  background: #dddddd;
  & div {
    padding: 10px;
  }
`;

const ButtonStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div``;

export default Confirmation;
