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
  return (
    <>
      <Header />
      <div className="container">
      <div style={{marginTop:100}}>
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
