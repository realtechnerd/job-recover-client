import React from "react";
import "../css/Card.css";
import moment from 'moment';
function Card({ post }) {
	if(post){
		console.log(post)
	}
	return (
		<>
		<div className="card">
			<div className="card-body">
				<h3 className="card-title">
					{post.title} @ {post.companyName}
				</h3>
				<h5>{post.description}</h5>
				<h6>
					{post.street},
					<br />
					{post.city}, {post.state}
					<br />
					{post.zipCode}
					<br />
					{post.country}
					<br />
				</h6>
				<a
					className="lgbshockwave lb"
					href={post.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					Visit Website
				</a>
				<p>Listed {moment(post.createdAt).fromNow()}</p>
			</div>
		</div>
		</>
	);
}

export default Card;
