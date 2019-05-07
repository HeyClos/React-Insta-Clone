import React from 'react'
import './PostContainer.css'

const PostHeader = props => {
    console.log(props);
  return (
    <div>
        <div className='postHeader'>
            <img className='thumbnail' src={props.thumbnailUrl} />
            <h1>
                {props.username}
            </h1>
        </div>

        <img src={props.imageUrl} />
    </div>
  )
}

export default PostHeader
