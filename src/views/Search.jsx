import React from 'react'
import {useQuery} from '@apollo/client'
import {loader} from 'graphql.macro'
import Card from '../components/Card'
import Header from "../components/Header";
import Spinner from "../img/loader.svg";

const SEARCH_POSTS = loader('../graphql/SEARCH_POSTS.gql')
const Search = ({posts}) => {
  const url = new URL(window.location.href)
  const {data, loading } = useQuery(SEARCH_POSTS, {
    variables:{
      title:url.searchParams.get('title'),
      location:url.searchParams.get('location')
    }
  })
  const titleInput = url.searchParams.get('title');
  const locationInput = url.searchParams.get('location');
  let resultsTitle = titleInput === "" ? `"${locationInput}"` : (locationInput === "" ? `"${titleInput}"` : `"${titleInput}" & "${locationInput}"`);
  return (
    <>
      <Header />
      <div className="container">
      <div style={{marginTop:100}}>
        {data &&
         (<h3 style={{marginBottom: "20px"}}>Your search <strong>{resultsTitle}</strong> returned <strong>{data.searchPosts.length}</strong> result{data.searchPosts.length !== 1 && "s"  }{data.searchPosts.length === 0 ? "." : ":"}</h3>)}
         {loading ? (
						<div className="loader-parent">
							<img
								src={Spinner}
								alt="Loading..."
								className="loader"
							/>
						</div>
					) : (
						data&&data.searchPosts.map(post=>(
              <Card key={post.id} post={post}/>
            ))
					)}
      </div>
      </div>
    </>
  )
}

export default Search
