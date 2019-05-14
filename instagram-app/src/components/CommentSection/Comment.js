import React from 'react'

const Comment = props => {
  return (
    <div>
      <div>
        <p>{props.comment.username}</p>
        <p>{props.comment.text} </p>
      </div>

    </div>
  )
}

export default Comment
