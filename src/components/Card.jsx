import React from "react";
import "../css/Card.css";

function Card({ post }) {
	console.log(post);
	return (
		<div className="card z-n10">
			<div className="card-body">
				<h3 className="card-title">
					{post.title} @ {post.companyName}
				</h3>
				<p>{post.description}</p>
				<a
					className="bprimary"
					href={post.url}
					rel="noreferrer"
					target="_blank"
				>
					{post.url}
				</a>
				<p>
					{post.street},
					<br />
					{post.city}, {post.state}
					<br />
					{post.zipCode}
					<br />
					{post.country}
					<br />
				</p>
			</div>
		</div>
	);
}

export default Card;
