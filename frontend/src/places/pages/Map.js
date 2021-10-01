import React from "react";
import GoogleMapReact from "google-map-react";
import { LocationMarker } from "./LocationMarker";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = `${process.env.REACT_APP_GOOGLE_KEY}`;

export default function Map({ loadedPlaces }) {
  const defaultProps = {
    center: {
      lat: 45.5012491,
      lng: -73.6677819,
    },
    zoom: 12,
  };

  return (
    //Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {loadedPlaces.map((place) => {
          return <LocationMarker lat={place.lat} lng={place.lng} />;
        })}
      </GoogleMapReact>
    </div>
  );
}
