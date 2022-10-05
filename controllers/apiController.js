// Imports
const fetch = require("node-fetch");
const Film = require("../models/film");

// Searches OMDb for the film information, then saves that information to
// mongodb if it doesn't exist in there already.
// Returns a json response of the film information
const searchFilm = async (req, res) => {
	// Search OMDb for film
	const url = `https://www.omdbapi.com/?apikey=a83cc6af&t=${req.params.film}`;
	const omdbResponse = await (await fetch(url)).json();

	// Attempt to find movie in db
	try {
		const filmInfo = await findFilmById(omdbResponse.imdbID);
		if (filmInfo) {
			res.json(filmInfo.toJSON());
		} else {
			// Add film to database
			const newFilmInfo = await addFilm(omdbResponse);
			res.json(newFilmInfo.toJSON());
		}
	} catch (err) {
		console.log(err);
	}
};

// Find a film in MongoDB
const findFilmById = async (id) => {
	return await Film.findById(id);
};

// Add a new film to MongoDB
const addFilm = async (data) => {
	const newFilm = new Film({
		_id: data.imdbID,
		Title: data.Title,
		Year: data.Year,
		Rated: data.Rated,
		Released: data.Released,
		Runtime: data.Runtime,
		Genre: data.Genre,
		Director: data.Director,
		Writer: data.Writer,
		Actors: data.Actors,
		Plot: data.Plot,
		Language: data.Language,
		Country: data.Country,
		Awards: data.Awards,
		Poster: data.Poster,
		Ratings: data.Ratings,
		imdbVotes: data.imdbVotes,
		Type: data.Type,
		DVD: data.DVD,
		BoxOffice: data.BoxOffice,
		Production: data.Production,
		Website: data.Website,
		Response: data.Response
	});

	const save = await newFilm.save();
	return newFilm;
};

module.exports = { searchFilm, addFilm };
