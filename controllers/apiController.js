// Imports
const fetch = require("node-fetch");
const Film = require("../models/film");

// API Key
const API_KEY = "1dc66aa91a6dcdc230403d462ecdb69c";
const basicURL = "https://image.tmdb.org/t/p/original/";

// Searches TMDb for the film information, then saves that information to
// mongodb if it doesn't exist in there already.
// Returns a json response of the film information
const searchFilm = async (req, res) => {
	// Search OMDb for film
	const query = encodeURIComponent(req.params.film);
	const urlMovieList = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
	const tmdbResponse = await (await fetch(urlMovieList)).json();

	// Attempt to find movie in db
	try {
		var jsonResponse = [];
		// Check if each movie returned by search is in database
		for (let i = 0; i < tmdbResponse.results.length; i++) {
			let currMovie = tmdbResponse.results[i];
			const currMovieInDB = await findFilmById(currMovie.id);
			if (currMovieInDB) {
				jsonResponse.push(currMovieInDB.toJSON());
			} else {
				// get film details (api request) then add to mongodb
				const newFilmDetails = await getFilmDetailsFromAPI(
					currMovie.id
				);
				const newFilmInfo = await addFilm(newFilmDetails);
				jsonResponse.push(newFilmInfo.toJSON());
			}
		}
		res.json(jsonResponse);
	} catch (err) {
		console.log(err);
	}
};

// Find a film in MongoDB
const findFilmById = async (id) => {
	return await Film.findById(id);
};

// Get film details from api
const getFilmDetailsFromAPI = async (movieID) => {
	const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`;
	const data = await (await fetch(url)).json();
	return data;
};

// Add a new film to MongoDB
const addFilm = async (data) => {
	try {
		const newFilm = new Film({
			_id: data.id,
			imdb_id: data.imdb_id,
			title: data.title,
			tagline: data.tagline,
			overview: data.overview,
			release_date: data.release_date,
			runtime: data.runtime,
			adult: data.adult,
			languages: data.spoken_languages,
			original_title: data.original_title,
			original_language: data.original_language,
			genres: data.genres,
			poster: basicURL + data.poster_path,
			backdrop: data.backdrop_path,
			budget: data.budget,
			revenue: data.revenue,
			production_status: data.status,
			production_companies: data.production_companies,
			production_countries: data.production_countries,
			popularity: data.popularity,
			vote_average: data.vote_average,
			vote_count: data.vote_count
		});

		newFilm.save();
		return newFilm;
	} catch (err) {
		console.log(err);
	}
};

module.exports = { searchFilm };
