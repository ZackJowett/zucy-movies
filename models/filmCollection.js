const mongoose = require("mongoose");
const { Schema } = mongoose;

const filmCollectionSchema = new Schema({
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

const FilmCollection = mongoose.model("FilmCollection", filmCollectionSchema);
module.exports = FilmCollection;
