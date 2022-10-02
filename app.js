// Import Dependencies
const express = require("express");
const { mainRouter } = require("./routes/mainRouter");

// Create app
const app = express();
const port = 3000;

app.get("*", mainRouter);

app.listen(port, () => {
	console.log(`App started listening on port ${port}...`);
});
