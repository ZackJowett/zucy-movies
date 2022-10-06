import { ListGroup, Card } from "react-bootstrap";

const AdditionalInfo = ({ movie }) => {
	return (
		<div className="movie-card-additional-info-wrapper">
			<ListGroup variant="flush">
				<Card.Header>Film</Card.Header>
				<ListGroup.Item>
					<span className="span-bold">Released</span>{" "}
					<span className="span-float-right">
						{movie.release_date}
					</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Runtime</span>{" "}
					<span className="span-float-right">{movie.runtime}min</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Rated</span>{" "}
					<span className="span-float-right">Not Implemented</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Language</span>{" "}
					<span className="span-float-right">Not Implemented</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Original Title</span>{" "}
					<span className="span-float-right">
						{movie.original_title}
					</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Original Language</span>{" "}
					<span className="span-float-right">
						{movie.original_language}
					</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Adult</span>{" "}
					<span className="span-float-right">
						{movie.adult ? "Yes" : "No"}
					</span>
				</ListGroup.Item>
				<Card.Header>Production</Card.Header>
				<ListGroup.Item>
					<span className="span-bold">Director</span>{" "}
					<span className="span-float-right">Not Implemented</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Writer</span>{" "}
					<span className="span-float-right">Not Implemented</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Actors</span>{" "}
					<span className="span-float-right">Not Implemented</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Budget</span>{" "}
					<span className="span-float-right">{movie.budget}</span>
				</ListGroup.Item>
				<Card.Header>Release</Card.Header>
				<ListGroup.Item>
					<span className="span-bold">Box office</span>{" "}
					<span className="span-float-right">{movie.revenue}</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Awards</span>{" "}
					<span className="span-float-right">Not Implemented</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Popularity</span>{" "}
					<span className="span-float-right">{movie.popularity}</span>
				</ListGroup.Item>
			</ListGroup>
		</div>
	);
};

export default AdditionalInfo;
