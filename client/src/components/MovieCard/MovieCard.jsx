import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MovieCard = ({ movie }) => {
	const url = `api/search/${movie}`;

	// State for Movie data
	const [
		data,
		setData
	] = useState();

	useEffect(
		() => {
			setData(null);
			fetch(url).then((res) => res.json()).then((data) => setData(data));
		},
		[
			movie
		]
	);

	return (
		<div className="movie-card-wrapper">
			{!data ? (
				<p>Loading...</p>
			) : data.length > 0 ? (
				data.map((currData, index) => (
					<Card className="movie-card" key={currData.id}>
						<CardImage url={currData.poster} />
						<CardBody currData={currData} />
					</Card>
				))
			) : (
				<p> I couldn't find anything, sorry.</p>
			)}
		</div>
	);
};

export default MovieCard;
