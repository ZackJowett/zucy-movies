// Imports
const express = require("express");
const apiRouter = express.Router();
const apiController = require("../controllers/apiController.js");

// Routes
apiRouter.get("/searchFilm/:film", (req, res) =>
	apiController.searchFilm(req, res)
);

// Export
module.exports = { apiRouter };
