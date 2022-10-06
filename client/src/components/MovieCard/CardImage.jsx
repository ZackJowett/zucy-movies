import { Card } from "react-bootstrap";

const CardImage = ({ url }) => {
	return <Card.Img className="movie-card-image" variant="bottom" src={url} />;
};

export default CardImage;
