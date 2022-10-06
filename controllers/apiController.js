// Imports
const fetch = require("node-fetch");
const Film = require("../models/film");
const FilmCollection = require("../models/filmCollection");

// API Key
const TMDB_API_KEY = "1dc66aa91a6dcdc230403d462ecdb69c";
const OMDB_API_KEY = "a83cc6af";
const basicURL = "https://image.tmdb.org/t/p/original/";

// Searches TMDb for the film information, then saves that information to
// mongodb if it doesn't exist in there already.
// Returns a json response of the film information
const searchFilm = async (req, res) => {
	// Search OMDb for film
	const query = encodeURIComponent(req.params.film);
	const urlMovieList = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`;
	const tmdbResponse = await (await fetch(urlMovieList)).json();

	// Attempt to find movie in db
	try {
		var jsonResponse = [];
		// Check if each movie returned by search is in database
		// Only search the first six
		for (let i = 0; i < tmdbResponse.results.length && i < 6; i++) {
			let currMovie = tmdbResponse.results[i];
			const currMovieInDB = await findFilmById(currMovie.id);
			if (currMovieInDB) {
				jsonResponse.push(currMovieInDB.toJSON());
			} else {
				// get film details (api request) then add to mongodb
				const newFilmDetails = await getFilmDetailsFromOMDb(
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

// Responsible for saving a film to a desired collection
const saveFilm = async (req, res) => {
	try {
		const collection = await FilmCollection.findOne({
			title: req.query.title
		});
		console.log(collection);
		await collection.films.push(req.query.id);
		await collection.save();
	} catch (err) {
		console.log(err);
	}
};

// ------------------------------------
// HELPER FUNCTIONS
// ------------------------------------

// Find a film in MongoDB
const findFilmById = async (id) => {
	return await Film.findById(id);
};

// Get film details from api
const getFilmDetailsFromOMDb = async (movieID) => {
	const TMDbURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${TMDB_API_KEY}&language=en-US`;
	const TMDbDetails = await (await fetch(TMDbURL)).json();

	let data = null;
	// Get both details from TMDb and OMDb
	if (TMDbDetails.imdb_id) {
		// Use OMDb
		const OMDbURL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${await TMDbDetails.imdb_id}`;
		const OMDbDetails = await (await fetch(OMDbURL)).json();
		if (OMDbDetails) {
			// movie exists in OMDb
			data = { ...TMDbDetails, ...OMDbDetails };
		} else {
			data = TMDbDetails;
		}
	} else {
		// USE TMDb
		data = TMDbDetails;
	}
	console.log(data);
	return await data;
};

// Add a new film to MongoDB
const addFilm = async (data) => {
	try {
		// Uses either TMDb or OMDb (starts with capital letter) as data
		const newFilm = new Film({
			_id: data.id,
			imdb_id: data.imdb_id,
			title: data.title,
			tagline: data.tagline,
			overview: data.overview,
			release_date: data.Released ? data.Released : data.release_date,
			runtime: data.Runtime ? data.Runtime : data.runtime,
			adult: data.adult,
			languages: data.Language,
			original_title: data.original_title,
			original_language: data.original_language,
			genres: data.genres,
			poster: data.Poster ? data.Poster : basicURL + data.poster_path,
			backdrop: basicURL + data.backdrop_path,
			budget: data.budget,
			revenue: data.BoxOffice ? data.BoxOffice : data.revenue,
			production_status: data.status,
			production_companies: data.production_companies,
			production_countries: data.production_countries,
			popularity: data.popularity,
			vote_average: data.vote_average,
			vote_count: data.vote_count,
			ratings: data.Ratings,
			rated: data.Rated,
			year: data.Year,
			director: data.Director,
			writer: data.Writer,
			actors: data.Actors,
			plot: data.Plot,
			awards: data.Awards,
			imdbVotes: data.imdbVotes,
			type: data.Type,
			DVD: data.DVD,
			response: data.Response
		});

		newFilm.save();
		return newFilm;
	} catch (err) {
		console.log(err);
	}
};

module.exports = { searchFilm, saveFilm };
