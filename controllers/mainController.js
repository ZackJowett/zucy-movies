const path = require("path");

const renderReact = (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
};

module.exports = { renderReact };
