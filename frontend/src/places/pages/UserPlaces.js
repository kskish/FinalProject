import React, { useState, useEffect } from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router";
import styled from "styled-components";
import Map from "./Map";

const UserPlaces = () => {
  //this will store all products from fetch
  const [locations, setLocations] = useState();
  //will become true after the data from fetch as been stored
  const [isLoaded, setIsLoaded] = useState(false);

  //retrieve all locations
  useEffect(() => {
    fetch("/locations")
      .then((res) => res.json())
      .then((data) => {
        setLocations(data.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // console.log(locations, "LOCATIONS");

  const userId = useParams().userId;
  let loadedPlaces;
  if (isLoaded) {
    loadedPlaces = locations.filter((place) => place.owner === userId);
  }

  // if (isLoaded) {
  //   loadedPlaces.map((place) => {
  //     console.log(place.address, "this is place");
  //   });
  // }
  console.log(loadedPlaces);

  return (
    <>
      {isLoaded && (
        <Wrapper>
          <MapWrapper>
            <Map loadedPlaces={loadedPlaces} />
          </MapWrapper>
          <Place>
            <PlaceList items={loadedPlaces} />
          </Place>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const MapWrapper = styled.div`
  height: 100vh;
  width: 60vw;
  background: #04612e;
`;
const Place = styled.div`
  height: 95vh;
  width: 40vw;
  background: #04612e;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

export default UserPlaces;
