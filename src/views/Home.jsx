import { useState } from "react";
import Header from "../components/Header";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import Spinner from "../img/loader.svg";
import Form from "../components/Form";
import { Modal, Container } from "react-bootstrap";
import plusIcon from "../img/plusIcon.svg";
import Card from "../components/Card";
import "../css/Home.css";
// import Tippy from "@tippyjs/react";
const QUERY_POSTS = loader("../graphql/QUERY_POSTS.gql");
function Home() {
	const { data, loading } = useQuery(QUERY_POSTS);

	const [show, setShow] = useState(false);

	const handleOpen = () => {
		setShow(true);
	};
	const handleClose = () => {
		setShow(false);
	};

	return (
		<>
			<Header />
			<Container style={{ marginTop: 100, marginBottom: 100 }}>
				{loading ? (
					<div className="loader-parent">
						<img
							src={Spinner}
							alt="Loading..."
							className="loader"
						/>
					</div>
				) : (
					data &&
					data.queryPosts.map((post) => (
						<div key={post.id}>
							<Card post={post} />
						</div>
					))
				)}

				<button
					className="blue-btn"
					onClick={handleOpen}
					id="open-modal"
				>
					<img
						src={plusIcon}
						alt="Add Job Listing"
						className="addJobBtn mt-n1"
						width={30}
					/>
				</button>

				<Modal size="lg" show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Add a Job Listing</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form />
					</Modal.Body>
					<Modal.Footer></Modal.Footer>
				</Modal>
			</Container>
		</>
	);
}

export default Home;
