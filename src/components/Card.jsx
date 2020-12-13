import React from "react";
import "../css/Card.css";
import moment from 'moment';
function Card({ post }) {
	return (
		<>
		<div className="card">
			<div className="card-body">
				<h3 className="card-title">
					{post.title} @ {post.companyName}
				</h3>
				<h5>{post.description}</h5>
				<p style={{marginBottom:40}}>
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
					// className="button button-1 lb"
					className='lit-btn lb'
					href={post.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					View Listing
				</a>
				<p className='float-right mt-4 momentTime'>Listed {moment.unix(post.createdAt/1000).fromNow()}</p> 
			</div>
		</div>
		</>
	);
}

export default Card;
