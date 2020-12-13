import React from 'react'
import {useQuery} from '@apollo/client'
import {loader} from 'graphql.macro'
import Card from './Card'
import Header from "./Header";
const SEARCH_POSTS = loader('../graphql/SEARCH_POSTS.gql')
const Search = ({posts}) => {
  const url = new URL(window.location.href)
  const {data, loading } = useQuery(SEARCH_POSTS, {
    variables:{
      startsWith:url.searchParams.get('search')
    }
  })
  return (
    <>
      <Header />
      {data&&data.searchPosts.map(post=>(
        <Card key={post.id} post={post}/>
      ))}
    </>
  )
}

export default Search
