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
        
        <div>
            <CommentSection comments={props.comments} />
        </div>

        
    </div>
  )
}

export default Post
