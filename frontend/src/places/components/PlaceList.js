import React from "react";
import PlaceItem from "./PlaceItem";
import styled from "styled-components";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>No places found.</h2>
      </div>
    );
  }

  return (
    <Wrapper>
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place._id}
            id={place._id}
            creatorId={place.owner}
            businessName={place.businessName}
            address={place.address}
            chargeType={place.chargeType}
            rate={place.rate}
            coordinates={place.address}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  height: 70vh;
  width: 30vw;
`;

export default PlaceList;
