import React from "react";
import Comment from './Comment'


class CommentSection extends React.Component {
    constructor(props) {
      super();
      console.log (props);
    }

    

    render () {
        return (
            <div className="commentSection">
                {this.props.comments.map( comment => {
                    return (
                        <Comment comment={comment}/>
                    )
                }
                )}
                {this.props.timestamp.map( time => {
                    return (

                    )
                })}
                <input />
            </div>
        )
    }
};


export default CommentSection;