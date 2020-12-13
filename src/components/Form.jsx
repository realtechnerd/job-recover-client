import { useState } from "react";
import {
	Form as FormC,
	Label,
	Control,
	Row,
	Col,
	Group,
} from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";
import loaderSVG from "../img/loader.svg";
import "../css/Form.css";

const CREATE_POST = loader("../graphql/CREATE_POST.gql");
function Form(props) {
	const [input, setInput] = useState({
		title: "",
		description: "",
		url: "",
		companyName: "",
		street: "",
		city: "",
		state: "",
		country: "",
		zipCode: "",
	});

	const [createPost, { loading }] = useMutation(CREATE_POST, {
		variables: {
			title: input.title,
			description: input.description,
			url: input.url,
			companyName: input.companyName,
			street: input.street,
			city: input.city,
			state: input.state,
			country: input.country,
			zipCode: input.zipCode,
		},
		onCompleted() {
			props.refetch();
		},
		onError(err) {
			console.log(err);
		},
	});
	const handleChange = ({ target }) => {
		setInput((prev) => ({
			...prev,
			[target.name]: target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ input });
		createPost();
	};
	return (
		<div className="listing-form">
			<FormC onSubmit={handleSubmit}>
				<div className="form-item">
					<FormC.Label>Job Title</FormC.Label>
					<FormC.Control
						type="text"
						name="title"
						value={input.title}
						onChange={handleChange}
						required
					></FormC.Control>
				</div>
				<div className="form-item my-3">
					<FormC.Label>Job Description</FormC.Label>
					<FormC.Control
						as="textarea"
						name="description"
						value={input.description}
						onChange={handleChange}
						required
					></FormC.Control>
				</div>

				<Row className="row_">
					<FormC.Group as={Col} controlId="formGridEmail">
						<FormC.Label>Company Name</FormC.Label>
						<FormC.Control
							name="companyName"
							value={input.companyName}
							onChange={handleChange}
							type="text"
							required
						/>
					</FormC.Group>
					<FormC.Group as={Col} controlId="formGridPassword">
						<FormC.Label>Company Website</FormC.Label>
						<FormC.Control
							name="url"
							value={input.url}
							onChange={handleChange}
							type="text"
							required
						/>
					</FormC.Group>
				</Row>
				<Row className="row_">
					<FormC.Group as={Col} controlId="formGridEmail">
						<FormC.Label>Address</FormC.Label>
						<FormC.Control
							type="text"
							name="street"
							value={input.street}
							onChange={handleChange}
							placeholder="Address Line 1 (Street)"
							required
						/>
					</FormC.Group>
				</Row>
				<Row className="row_">
					<FormC.Group as={Col} controlId="formGridEmail">
						<FormC.Control
							name="city"
							value={input.city}
							onChange={handleChange}
							type="text"
							placeholder="City"
							required
						/>
					</FormC.Group>
					<FormC.Group as={Col} controlId="formGridPassword">
						<FormC.Control
							name="state"
							value={input.state}
							onChange={handleChange}
							type="text"
							placeholder="State"
							required
						/>
					</FormC.Group>
				</Row>
				<Row className="row_">
					<FormC.Group as={Col} controlId="formGridEmail">
						<FormC.Control
							name="country"
							value={input.country}
							onChange={handleChange}
							type="text"
							placeholder="Country"
							required
						/>
					</FormC.Group>
					<FormC.Group as={Col} controlId="formGridPassword">
						<FormC.Control
							name="zipCode"
							value={input.zipCode}
							onChange={handleChange}
							type="text"
							placeholder="Zip Code"
							required
						/>
					</FormC.Group>
				</Row>
				<button type="submit" className="btn btn-primary">
					{loading ? (
						<img
							src={loaderSVG}
							alt="Loading..."
							className="form_loader"
						/>
					) : (
						"Create Listing"
					)}
				</button>
			</FormC>
		</div>
	);
}
export default Form;
