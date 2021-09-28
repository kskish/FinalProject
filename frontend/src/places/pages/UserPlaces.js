import React, { useState, useEffect } from "react";
// import PlaceList from "../components/PlaceList";
import { useParams } from "react-router";
import styled from "styled-components";
// import GoogleMapReact from "google-map-react";
// import Map from "./Map";

const UserPlaces = () => {
  //this will store all products from fetch
  const [locations, setLocations] = useState(null);
  //will become true after the data from fetch as been stored
  // const [isLoaded, setIsLoaded] = useState(false);

  //retrieve all locations
  // useEffect(() => {
  //   fetch("/locations")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLocations(data.data);
  //       // setIsLoaded(true);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (!locations) {
  //     return;
  //   }
  //   // console.log("we are here");

  //   // setTimeout(() => {
  //   //   let map = new window.google.maps.Map(document.getElementById("map"), {
  //   //     center: { lat: -34.397, lng: 150.644 },
  //   //     zoom: 8,
  //   //   });
  //   // }, 1000);
  // }, [locations]);

  // console.log(locations, "LOCATIONS");

  // const { userId } = useParams();
  // const items =
  //   locations && locations.filter((place) => place.owner === userId);
  // // console.log("this is items", items);
  return <div id="map" style={{ height: "100%" }}></div>;
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const MapWrapper = styled.div`
  height: 100vh;
  width: 60vw;
  background: red;
`;
const Place = styled.div`
  height: 100vh;
  width: 40vw;
  /* background: orange; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  overflow-y: scroll;
`;

export default UserPlaces;

{
  /* {locations && (
        <Wrapper>
          <MapWrapper>
            <div id="map" style={{ height: "100%" }}></div>
          </MapWrapper>
          <Place>
            <PlaceList items={items} />
          </Place>
        </Wrapper>
      )} */
}
