import { useEffect, useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import AdditionalInfo from "./AdditionalInfo";
import MovieDescription from "./MovieDescription";

const CardBody = ({ currData }) => {
	// State for Additional Info
	const [
		showInfo,
		setShowInfo
	] = useState({ label: currData._id, value: false });

	const updateShowInfo = () => {
		console.log(showInfo);
		setShowInfo({ ...showInfo, value: !showInfo.value });
	};

	const saveToCollection = () => {
		const requestOptions = {
			method: "POST"
		};

		fetch(`api/save?title=test&id=${currData._id}`, requestOptions);
	};

	return (
		<div class="movie-card-body-wrapper">
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

					{/* OMDb Ratings */}
					{currData.ratings.map((rating) => (
						<Badge bg="primary" className="movie-card-badge" pill>
							{rating.Value}
						</Badge>
					))}

					{/* TMDb Ratins */}
					<Badge bg="primary" className="movie-card-badge" pill>
						{currData.vote_average != 0 ? (
							currData.vote_average.toFixed(1) + "/10"
						) : null}
					</Badge>
				</div>

				<MovieDescription
					content={currData.overview}
					showFull={showInfo.value}
				/>

				<div class="card-buttons">
					<Button
						variant="outline-info"
						onClick={updateShowInfo}
						className="movie-card-button"
					>
						{!showInfo.value ? "Details" : "Hide"}
					</Button>
					<Button
						variant="info"
						onClick={saveToCollection}
						className="movie-card-button movie-card-save"
					>
						Save
					</Button>
				</div>
			</Card.Body>
			{!showInfo.value ? "" : <AdditionalInfo movie={currData} />}
		</div>
	);
};

export default CardBody;
