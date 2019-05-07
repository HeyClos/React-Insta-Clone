import React from "react";
import PostHeader from './PostHeader'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
  console.log(props);
  return (
    <div>
        <PostHeader thumbnailUrl={props.thumbnailUrl} username={props.username} imageUrl={props.imageUrl} />
        <CommentSection comments={props.comments}/>
    </div>
  );
};

export default PostContainer;