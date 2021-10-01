"use strict";
// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");

require("dotenv").config();

const {
  getAllUsers,
  getAllLocations,
  handleLogin,
  addNewLocation,
  getUserLocations,
  deleteLocation,
  updateLocation,
  addUser,
  getUser,
} = require("./handlers");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  .get("/users", getAllUsers)
  .get("/user/:_id", getUser)
  .get("/locations", getAllLocations)
  .get("/locations/:_id", getUserLocations)
  .post("/login", handleLogin)
  .post("/location", addNewLocation)
  .post("/user", addUser)
  .delete("/location", deleteLocation)
  .put("/location", updateLocation)

  //   .get("/flight", getFlight)
  //   .get("/reservations", getReservations)
  //   .get("/reservation/:seat", getSingleReservation)
  //   .post("/reservations", addReservations)
  //   .delete("/reservation", deleteReservation)
  //   .put("/reservation", updateReservation)
  //
  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line
  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })
  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
