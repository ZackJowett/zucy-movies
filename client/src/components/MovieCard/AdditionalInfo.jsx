import { ListGroup, Card } from "react-bootstrap";

const AdditionalInfo = ({ movie }) => {
	return (
		<div className="movie-card-additional-info-wrapper">
			<ListGroup variant="flush">
				<Card.Header>Film</Card.Header>
				<ListGroup.Item>
					<span className="span-bold">Released</span>{" "}
					<span className="span-float-right">{movie.Released}</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Runtime</span>{" "}
					<span className="span-float-right">{movie.Runtime}</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Rated</span>{" "}
					<span className="span-float-right">{movie.Rated}</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Language</span>{" "}
					<span className="span-float-right">{movie.Language}</span>
				</ListGroup.Item>
				<Card.Header>Production</Card.Header>
				<ListGroup.Item>
					<span className="span-bold">Director</span>{" "}
					<span className="span-float-right">{movie.Director}</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Writer</span>{" "}
					<span className="span-float-right">{movie.Writer}</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Actors</span>{" "}
					<span className="span-float-right">{movie.Actors}</span>
				</ListGroup.Item>
				<Card.Header>Release</Card.Header>
				<ListGroup.Item>
					<span className="span-bold">Box office</span>{" "}
					<span className="span-float-right">{movie.BoxOffice}</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Awards</span>{" "}
					<span className="span-float-right">{movie.Awards}</span>
				</ListGroup.Item>
				{movie.Website !== "N/A" ? (
					<div>
						<Card.Header>Links</Card.Header>
						<ListGroup.Item>
							<a href={movie.Website}>Website</a>
						</ListGroup.Item>
					</div>
				) : null}
			</ListGroup>
		</div>
	);
};

export default AdditionalInfo;
