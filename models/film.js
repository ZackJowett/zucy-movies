const mongoose = require("mongoose");
const { Schema } = mongoose;

// Film Schema for storing film information
// Follows similar structure and type naming to the OMDb api
const filmSchema = new Schema({
	_id: Number,
	imdb_id: String,
	title: String,
	tagline: String,
	overview: String,
	release_date: String,
	runtime: Number,
	adult: Boolean,
	languages: [
		{
			language_code: String,
			name: String
		}
	],
	original_title: String,
	original_language: String,
	genres: [
		{ id: Number, name: String }
	],
	poster: String,
	backdrop: String,
	budget: Number,
	revenue: Number,
	production_status: String,
	production_companies: [
		{
			name: String,
			id: Number,
			logo_path: String,
			origin_country: String
		}
	],
	production_countries: [
		{
			country_code: String,
			name: String
		}
	],
	popularity: Number,
	vote_average: Number,
	vote_count: Number
});

const Film = mongoose.model("Film", filmSchema);
module.exports = Film;
