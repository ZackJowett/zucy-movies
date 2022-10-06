const mongoose = require("mongoose");
const { Schema } = mongoose;

const filmCollectionSchema = new Schema({
	title: String,
	dateCreated: { type: Date, default: Date.now },
	films: {
		type: [
			String
		],
		default: []
	},
	favourites: {
		type: [
			String
		],
		default: []
	},
	recentlyAdded: {
		type: [
			String
		],
		default: []
	}
});

const FilmCollection = mongoose.model("FilmCollection", filmCollectionSchema);
module.exports = FilmCollection;
