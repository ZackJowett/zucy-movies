import { useEffect, useState } from "react";
import { Card, Button, Badge, Dropdown } from "react-bootstrap";
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

	// Saving Movie
	const [ savedCard, setSavedCard ] = useState({label: currData._id, value: false});
	const handleSaveCard = () => {
		setSavedCard({... savedCard, value: true});
	}
	

	return (
		<div class="movie-card-body-wrapper">
			<Card.Body>
				<div className="movie-header">
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
					<div className="movie-card-save-icons">
						<Dropdown>
						<Dropdown.Toggle>
							{savedCard.value ? (
								<i class="fa-solid fa-heart movie-card-save-icon fa-lg"></i>
							) : (
								<i class="fa-regular fa-heart fa-lg" onClick={handleSaveCard}></i>
							)}
						</Dropdown.Toggle>
						</Dropdown>
					</div>
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
				</div>
			</Card.Body>
			{!showInfo.value ? "" : <AdditionalInfo movie={currData} />}
		</div>
	);
};

export default CardBody;
