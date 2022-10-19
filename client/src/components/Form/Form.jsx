import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const MovieForm = ({ setMovie }) => {
	const [
		title,
		setTitle
	] = useState();

	const updateTitle = (e) => {
		setTitle(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setMovie(title);
	};

	return (
		<div className="search-wrapper">
			<div className="search-form">
				<Form>
					<Form.Group>
						<Form.Label className="form-label">
							Film Title
						</Form.Label>
						<Form.Control
							className="form-text-input"
							placeholder="E.g. Taxi Driver"
							onChange={updateTitle}
						/>
						<Form.Text className="text-muted">
							Note: First-time searches may take a while to load.
							This allows the proper accumulation of information.
						</Form.Text>
					</Form.Group>
					<Button
						variant="info"
						type="submit"
						className="form-button"
						onClick={onSubmit}
					>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default MovieForm;
