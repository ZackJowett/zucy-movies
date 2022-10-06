import { useEffect, useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import AdditionalInfo from "./AdditionalInfo";
import MovieDescription from "./MovieDescription";

const CardBody = ({ currData }) => {
	// State for Additional Info
	const [
		showInfo,
		setShowInfo
	] = useState({ label: currData.id, value: false });

	const updateShowInfo = () => {
		console.log(showInfo);
		setShowInfo({ ...showInfo, value: !showInfo.value });
	};

	return (
		<Card.Body>
			<div className="movie-card-title-wrapper">
				<Card.Title className="movie-card-title">
					{currData.title}
				</Card.Title>

				<Card.Subtitle>
					{currData.genres.map((genre, index) => (
						<span key={genre.id}>
							{/* Add / between genres */}
							{index == 0 ? genre.name : " / " + genre.name}
						</span>
					))}
				</Card.Subtitle>

				{currData.vote_average ? (
					<Badge bg="primary" className="movie-card-badge" pill>
						{currData.vote_average.toFixed(1) + "/10"}
					</Badge>
				) : null}
			</div>

			<MovieDescription content={currData.overview} />

			<Button
				variant="outline-info"
				onClick={updateShowInfo}
				className="movie-card-button"
			>
				{!showInfo.value ? "Details" : "Hide"}
			</Button>

			{!showInfo.value ? "" : <AdditionalInfo movie={currData} />}
		</Card.Body>
	);
};

export default CardBody;
