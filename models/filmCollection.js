const mongoose = require("mongoose");
const { Schema } = mongoose;

const FilmCollection = new Schema({
	Title: String,
	DateCreated: { type: Date, default: Date.now },
	Films: [
		ObjectId
	],
	Favourite: [
		ObjectId
	],
	RecentlyAdded: [
		ObjectId
	]
});

export default FilmCollection;
