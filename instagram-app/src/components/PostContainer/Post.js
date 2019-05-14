import React from 'react'
import CommentSection from '../CommentSection/CommentSection'

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
            {props.likes}
        </p>
        <div>
            <CommentSection comments={props.comments} />
        </div>

        <p>{props.timestamp}</p>


    </div>
  )
}

export default Post
