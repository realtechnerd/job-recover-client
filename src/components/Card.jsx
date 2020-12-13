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
				<p>
					Address:
					<br />
					{post.companyName}
					<br />
					{post.street},
					<br />
					{post.city}, {post.state} {post.zipCode}
					<br />
					{post.country}
					<br />
				</p>
				<a
					className="lgbshockwave lb"
					href={post.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					More information
				</a>
				<p className='float-right mt-4'>Listed {moment.unix(post.createdAt/1000).fromNow()}</p> 
			</div>
		</div>
		</>
	);
}

export default Card;
