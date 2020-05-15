const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./utils/Error");
const feedings = require("./routes/Feedings");
require("dotenv").config();
const app = express();

// connect to db
connectDB();

// for post requests
app.use(express.json());

// handle errors
app.use(errorHandler);

// routes
app.use("/api/feedings", feedings);

app.listen(5000, () => console.log("Listening on port 5000"));
