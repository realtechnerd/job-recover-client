import React from "react";
import Header from "../components/Header";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

const QUERY_POSTS = loader("../graphql/QUERY_POSTS.gql");
function Home() {
	const { data, loading } = useQuery(QUERY_POSTS);

	return (
		<div>
			<Header />
			{data &&
				data.queryPosts.map((post) => (
					<div key={post.id}>
						<h1>{post.title}</h1>
						<p>{post.description}</p>
					</div>
				))}
		</div>
	);
}

export default Home;
