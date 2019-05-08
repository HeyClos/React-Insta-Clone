import React from "react";
import Comment from './Comment'


class CommentSection extends React.Component {
    constructor(props) {
      super();
      this.state = {
          comment:''
      }

    }

    changeHandler = e => {
        this.setState ({ comment: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.props.addComment(e, this.state.comment, this.props.index)
        //my new state needs to go in the curly brackets underneath. is it e.target.value?
        // comments + new comment?
        this.setState({comment:''})
    }


    render () {
        return (
            <div className="commentSection">
                {this.props.comments.map( comment => {
                    return (
                        <Comment comment={comment}/>
                    )
                })}
                <div className="timeStampContainer">
                    <div className="timeStamp">{this.props.timestamp}</div>
                </div>
                
                <form onSubmit = {this.handleSubmit}>
                    <input placeholder={"Add a comment..."}
                    value={this.state.comment}
                    onChange={this.changeHandler} />
                </form>
            </div>
        )
    }
};


export default CommentSection;