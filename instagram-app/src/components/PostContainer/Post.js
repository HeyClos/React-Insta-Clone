import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import LikeSection from './LikeSection';

const Post = props => {
  return (
    <div>
        <div>
            <img className='thumbnail' src={props.thumbnailUrl} />
            <h1>
                {props.username}
            </h1>
        </div>

        <div>
            <img src={props.imageUrl} />
        </div>

        <p>
            <LikeSection likes={props.likes} increment={props.increment} />
        </p>
        <div>
            <CommentSection comments={props.comments} />
        </div>

        <p>{props.timestamp}</p>


    </div>
  )
}

export default Post;
