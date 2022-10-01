import { useEffect, useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import AdditionalInfo from "./AdditionalInfo";

const MovieCard = ({ movie }) => {
	const url = `http://www.omdbapi.com/?apikey=a83cc6af&t=${movie}`;

	// State for Movie data
	const [
		data,
		setData
	] = useState();

	// State for Additional Info
	const [
		showInfo,
		setShowInfo
	] = useState(false);

	useEffect(() => {
		fetch(url).then((res) => res.json()).then((data) => setData(data));
	});

	const updateShowInfo = () => {
		setShowInfo(!showInfo);
	};

	return (
		<div className="movie-card-wrapper">
			{!data ? (
				<p>Loading...</p>
			) : (
				<Card className="movie-card">
					<Card.Img variant="bottom" src={data.Poster} />
					<Card.Body>
						<div className="movie-card-title-wrapper">
							<Card.Title className="movie-card-title">
								{data.Title}
							</Card.Title>
							<Card.Subtitle>{data.Genre}</Card.Subtitle>
							{data.Ratings.map((rating, index) => (
								<Badge
									bg="info"
									className="movie-card-badge"
									pill
									key={index}
								>
									{rating.Value}
								</Badge>
							))}
						</div>
						<Card.Text className="movie-card-text">
							{data.Plot}
						</Card.Text>
						<Button
							variant="outline-info"
							onClick={updateShowInfo}
							className="movie-card-button"
						>
							{!showInfo ? "Details" : "Hide"}
						</Button>
					</Card.Body>

					{!showInfo ? "" : <AdditionalInfo movie={data} />}
				</Card>
			)}
		</div>
	);
};

export default MovieCard;
