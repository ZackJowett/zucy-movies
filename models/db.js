// Load environment variables

// Mongoose setup
const mongoose = require("mongoose");
mongoose.connect(
	process.env.MONGO_URL ||
		"mongodb+srv://zjowett:ylzwwUHvpDqLLo96@zucy-movies-cluster.g9ubtgm.mongodb.net/test",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: "mainDB"
	}
);

// Exit on error
const db = mongoose.connection.on("error", (err) => {
	console.error(err);
	process.exit(1);
});

// Log to console once the database is open
db.once("open", async () => {
	console.log(`Mongo connection started on ${db.host}:${db.port}`);
});
