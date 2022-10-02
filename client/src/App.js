import MovieForm from "./components/Form/Form";
import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import "./styles/main.css";
import "./styles/custom.scss";

function App() {
	// Set Background Colour
	document.body.style.background = "#051821";

	// States
	const [
		movie,
		setMovie
	] = useState();

	useEffect(
		() => {
			console.log("Effect has been affected");
		},
		[
			movie
		]
	);

	return (
		<main>
			<Header />
			{movie ? <MovieCard movie={movie} /> : null}
			<MovieForm setMovie={setMovie} />
		</main>
	);
}

export default App;
