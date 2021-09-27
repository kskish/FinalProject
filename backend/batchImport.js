const { MongoClient } = require("mongodb");
const { allUsers, allLocations } = require("./data");

require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  // TODO: connect...
  const client = new MongoClient(MONGO_URI, options);

  try {
    // connect to the client
    await client.connect();

    // TODO: declare 'db'
    const db = client.db("JuiceHere");
    console.log("connected!");
    await db.collection("locations").insertMany(allLocations.locations);

    // On success, send
    console.log("Success");
  } catch (err) {
    // on failure, send
    console.log("Failed");
    console.log(err.stack);
  }

  client.close();
  console.log("disconnected!");
};

batchImport();
