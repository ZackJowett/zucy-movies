// Import Dependencies
const express = require("express");
const path = require("path");
const { mainRouter } = require("./routes/mainRouter");

// Create app
const app = express();
const port = process.env.PORT || 3000;

// Static files
// have node serve the files from the react ap
app.use(express.static(path.resolve(__dirname, "./client/build")));
// define where static assets live
app.use(express.static(path.join(__dirname, "/public")));

// Set up to handle POST requests
app.use(express.json()); // needed if POST data is in JSON format
app.use(express.urlencoded({ extended: false })); // only needed for URL-encoded input

app.get("/", mainRouter);

app.listen(port, () => {
	console.log(`App started listening on port ${port}...`);
});

// Connect to database
require("./models/db");
