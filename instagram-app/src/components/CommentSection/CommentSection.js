import React from 'react'
import Comment from './Comment'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }


    render() {
        return (
            <div>
                {this.state.comments.map(comment => 
                    <Comment comment={comment} />
                )}
                <form>
                    <input placeholder="Add a comment..." />  
                </form>               
            </div>
        )
    };
}

export default CommentSection;

{/* <form onSubmit = {this.handleSubmit}>
<input placeholder={"Add a comment..."}
value={this.state.comment}
onChange={this.changeHandler} />
</form> */}