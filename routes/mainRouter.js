// Imports
const express = require("express");
const mainRouter = express.Router();
const mainController = require("../controllers/mainController.js");

// Routes
mainRouter.get("*", (req, res) => mainController.renderReact(req, res));

// Export
module.exports = { mainRouter };
