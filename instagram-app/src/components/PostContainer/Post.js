import React from 'react'

const Post = props => {
  return (
    <div>
        <div>
            <img className='thumbnail' src={props.thumbnailUrl} />
            <h1>
                {props.username}
            </h1>
        </div>

        <img src={props.imageUrl} />
    </div>
  )
}

export default Post
