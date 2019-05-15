import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'

const PostPage = props => {
  return (
    <div>
        <SearchBar />
        <PostContainer profiles={props.profiles} />
        
    </div>
  )
}

export default PostPage;
