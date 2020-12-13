import { useState } from "react";
import Header from "../components/Header";
import { useQuery, useRef } from "@apollo/client";
import { loader } from "graphql.macro";
import Spinner from "../img/loader.svg";
import Form from "../components/Form";
import { Modal, Container } from "react-bootstrap";
import plusIcon from "../img/plusIcon.svg";
import Card from "../components/Card";
import "../css/Home.css";
import suitcase from "../img/suitcase.png";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const QUERY_POSTS = loader("../graphql/QUERY_POSTS.gql");
function Home() {
	const { data, loading, refetch} = useQuery(QUERY_POSTS);

	const [show, setShow] = useState(false);

	const handleOpen = () => {
		setShow(true);
	};
	const handleClose = () => {
		setShow(false);
	};

	const scrollDown = () => {
		document.getElementById('arrow').scrollIntoView(true);
	};

	return (
		<>
			<Header />
			<Container style={{ marginTop: 100, marginBottom: 100 }}>
				<div className="landing">
					<img src={suitcase} alt="Suitcase" className="landing-img" />
					<h1 className="title"><span className="purple">J</span>ob<span className="purple">R</span>ecover</h1>
					<h5 className="subtitle">Connecting employers to the unemployed during these trying times.</h5>
					<img id="arrow" className="down-arrow bounce" onClick={scrollDown} src="https://cdn.onlinewebfonts.com/svg/img_118824.png" alt="Down Arrow" />
				</div>
				

				<div className="cards">
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
				</div>

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
						<Form refetch={refetch} />
					</Modal.Body>
					<Modal.Footer></Modal.Footer>
				</Modal>
			</Container>
		</>
	);
}

export default Home;
