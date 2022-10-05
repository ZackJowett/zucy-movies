const mongoose = require("mongoose");
const { Schema } = mongoose;

// Film Schema for storing film information
// Follows similar structure and type naming to the OMDb api
const filmSchema = new Schema({
	_id: String, // IMDb id
	Title: String,
	Year: String,
	Rated: String,
	Released: String,
	Runtime: String,
	Genre: String,
	Director: String,
	Writer: String,
	Actors: String,
	Plot: String,
	Language: String,
	Country: String,
	Awards: String,
	Poster: String, // URL to image
	Ratings: [
		{
			Source: String,
			Value: String
		}
	],
	imdbVotes: String,
	Type: String,
	DVD: String,
	BoxOffice: String,
	Production: String,
	Website: String,
	Response: String
});

const Film = mongoose.model("Film", filmSchema);
module.exports = Film;
