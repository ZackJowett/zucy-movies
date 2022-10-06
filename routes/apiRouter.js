// Imports
const express = require("express");
const apiRouter = express.Router();
const apiController = require("../controllers/apiController.js");
// const collectionController

// Routes
apiRouter.get("/search/:film", (req, res) =>
	apiController.searchFilm(req, res)
);

apiRouter.post("/save", (req, res) => apiController.saveFilm(req, res));
// apiRouter.post("/collections/:", (req, res) =>
// 	apiController.viewCollection(req, res)
// );
// apiRouter.post("/collections", (req, res) =>
// 	apiController.viewAllCollections(req, res)
// );

// Export
module.exports = { apiRouter };
