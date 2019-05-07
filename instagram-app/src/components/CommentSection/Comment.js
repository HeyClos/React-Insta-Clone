import React from "react";
import './CommentSection.css'


const Comment = (props) => {
    return (
        <div className="comment">
            <p className="username">{props.comment.username} </p>
            <p> {props.comment.text}</p>
        </div>
    )
}


export default Comment;