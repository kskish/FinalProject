"use strict";

const e = require("express");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

const getAllUsers = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db("JuiceHere");
  console.log("connected!");

  // Find all reservations in collection
  const users = await db.collection("users").find().toArray();

  if (users.length > 0) {
    res.status(200).json({
      status: 200,
      data: users,
      messege: "get all users successful",
    });
  } else {
    res.status(404).json({
      status: 404,
      error: "get all users unsuccessful",
    });
  }
  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

const getAllLocations = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db("JuiceHere");
  console.log("connected!");

  // Find all reservations in collection
  const users = await db.collection("locations").find().toArray();

  if (users.length > 0) {
    res.status(200).json({
      status: 200,
      data: users,
      messege: "get all locations successful",
    });
  } else {
    res.status(404).json({
      status: 404,
      error: "get all locations unsuccessful",
    });
  }
  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

//Get all locations from specific user
const getUserLocations = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db("JuiceHere");
  console.log("connected!");

  // Find all reservations in collection
  const users = await db.collection("users").find().toArray();

  if (users.length > 0) {
    res.status(200).json({
      status: 200,
      data: users,
      messege: "get all users successful",
    });
  } else {
    res.status(404).json({
      status: 404,
      error: "get all users unsuccessful",
    });
  }
  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

// POST Login validation
const handleLogin = async (req, res) => {
  const { userEmail, userPassword } = req.body;

  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db("JuiceHere");
  console.log("connected!");

  // Find all users in collection
  const users = await db.collection("users").find().toArray();

  const user = users.find((user) => {
    return user.email === userEmail && user.password === userPassword;
  });

  if (user) {
    res.status(200).json({
      status: 200,
      data: user,
      messege: "user signed in",
    });
  } else {
    res.status(404).json({
      status: 404,
      error: "user not found",
    });
  }

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

// ADD new location
const addNewLocation = async (req, res) => {
  const { owner } = req.body;

  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db("JuiceHere");
  console.log("connected!");

  const random = Math.floor(Math.random() * 100000) + 1;

  const newLocation = {
    // _id: uuidv4(),
    _id: `${random}`,
    ...req.body,
  };

  try {
    await db.collection("locations").insertOne(newLocation);
    res.status(200).json({
      status: 200,
      data: newLocation,
      message: "New location has been added!",
    });
  } catch {
    res.status(404).json({
      status: 404,
      data: newLocation,
      message: "Something went wrong when adding new location!",
    });
  }

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

//Deletes a location from the list of user locations
const deleteLocation = async (req, res) => {
  // TODO: connect...
  const client = await new MongoClient(MONGO_URI, options);
  // connect to the client
  await client.connect();

  // TODO: declare 'db'
  const db = client.db("JuiceHere");
  console.log("connected!");

  const _id = req.body.id; // holds seat ID
  const query = { _id };

  await db.collection("locations").findOne(query, async (err, result) => {
    if (result) {
      await db.collection("locations").deleteOne({ _id: _id });
      res.status(200).json({
        status: 200,
        message: "Location successfuly deleted!",
      });
    } else {
      res.status(404).json({
        status: 404,
        _id,
        data: req.body,
        message: "This seat doesn't exist.",
      });
    }

    client.close();
    console.log("disconnected!");
  });
};

//Update a location from a user
const updateLocation = async (req, res) => {
  // creates a new client
  const client = await new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db("JuiceHere");
  console.log("connected!");

  const _id = req.body.id; //store location ID
  const address = req.body.address; //store new address
  const chargeType = req.body.chargeType; //store new chargeType
  const rate = req.body.rate; //store new rate
  let query = { _id }; //store reservation ID

  const newValues = {
    $set: {
      address: address,
      chargeType: chargeType,
      rate: rate,
    },
  };

  //Updating the location with the new values.
  await db.collection("locations").updateOne(query, newValues);

  res.status(200).json({
    status: 200,
    ...req.body,
    message: "Successfuly updated reservation!",
  });

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

//Add new User to the database
const addUser = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db("JuiceHere");
  console.log("connected!");

  const random = Math.floor(Math.random() * 100000) + 1;

  const newUser = {
    // _id: uuidv4(),
    _id: `${random}`,
    ...req.body,
  };

  try {
    await db.collection("users").insertOne(newUser);
    res.status(200).json({
      status: 200,
      data: newUser,
      message: "New user has been added!",
    });
  } catch {
    res.status(404).json({
      status: 404,
      data: newLocation,
      message: "Something went wrong when adding new user!",
    });
  }

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

module.exports = {
  getAllUsers,
  getAllLocations,
  handleLogin,
  addNewLocation,
  getUserLocations,
  deleteLocation,
  updateLocation,
  addUser,
};
