import { Card } from "react-bootstrap";

const MovieDescription = ({ content, showFull }) => {
	const TEXT_LENGTH = 100;

	// Reduce length of content
	if (!showFull && content.length > TEXT_LENGTH) {
		content = content.slice(0, TEXT_LENGTH) + "...";
	}

	return <Card.Text className="movie-card-text">{content}</Card.Text>;
};

export default MovieDescription;
