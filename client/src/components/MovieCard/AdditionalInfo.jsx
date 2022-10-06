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
					<span className="span-float-right">
						{movie.runtime.includes("min") ? (
							movie.runtime
						) : (
							movie.runtime + " min"
						)}
					</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Rated</span>{" "}
					<span className="span-float-right">
						{movie.rated ? movie.rated : "N/A"}
					</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Language</span>{" "}
					<span className="span-float-right">
						{movie.languages ? movie.languages : "N/A"}
					</span>
				</ListGroup.Item>
				<Card.Header>Production</Card.Header>
				<ListGroup.Item>
					<span className="span-bold">Director</span>{" "}
					<span className="span-float-right">
						{movie.director ? movie.director : "N/A"}
					</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Writer</span>{" "}
					<span className="span-float-right">
						{movie.writer ? movie.writer : "N/A"}
					</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Actors</span>{" "}
					<span className="span-float-right">
						{movie.actors ? movie.actors : "N/A"}
					</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Budget</span>{" "}
					<span className="span-float-right">
						{movie.budget != "0" ? (
							formatter.format(movie.budget)
						) : (
							"N/A"
						)}
					</span>
				</ListGroup.Item>
				<Card.Header>Release</Card.Header>
				<ListGroup.Item>
					<span className="span-bold">Box office</span>{" "}
					<span className="span-float-right">
						{movie.revenue != "0" &&
						movie.revenue != "$0" ? movie.revenue.includes("$") ? (
							movie.revenue
						) : (
							formatter.format(movie.revenue)
						) : (
							"N/A"
						)}
					</span>
				</ListGroup.Item>
				<ListGroup.Item>
					<span className="span-bold">Awards</span>{" "}
					<span className="span-float-right">
						{movie.awards ? movie.awards : "N/A"}
					</span>
				</ListGroup.Item>
			</ListGroup>
		</div>
	);
};

const languageNames = new Intl.DisplayNames(
	[
		"en"
	],
	{
		type: "language"
	}
);

var formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0
});

export default AdditionalInfo;
