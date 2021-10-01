import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/mainCover.jpg";
// import AnimatedShapes from "../../shared/components/Animation/AnimatedShapes";
import "./Homepage.css";

const Homepage = () => {
  return (
    <Wrapper>
      <Text>
        <h1>Find all businesses that will charge your car.</h1>
        <Link to={"/locations"}>
          {/* <Button>View all</Button> */}

          <div className="box-2">
            <div className="btn btn-two">
              <span style={{ letterSpacing: "7px" }}>VIEW ALL</span>
            </div>
          </div>
        </Link>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${img});
  background-size: cover; /* Resize the background image to cover the entire container */
  width: 100vw;
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: flex-end;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 300px;
  background: black;
  color: white;
  border-radius: 5px;
  opacity: 0.5;
  margin-left: 100px;
  margin-bottom: 200px;

  & h1 {
    padding: 20px;
  }
`;

// const Button = styled.button`
//   display: flex;
//   /* justify-content: center; */
//   align-items: center;
//   background-color: green;
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   /* margin: 4px 2px; */
//   cursor: pointer;
//   /* margin-top: -15px; */
//   transition: all 0.4s ease-in-out;

//   /* &:hover {
//     transform: scale(1.2);
//   } */
//   &:hover {
//     border-bottom-right-radius: 50px;
//     border-top-left-radius: 50px;
//     border-bottom-left-radius: 10px;
//     border-top-right-radius: 10px;
//   }
// `;

export default Homepage;
