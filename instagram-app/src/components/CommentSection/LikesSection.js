import React from 'react'

class LikesSection extends React.Component {
    state = {
        likesCounter: this.props.likes
    }

    clickHandler = () => {
        //console.log('click')
        this.setState ({ likesCounter: this.state.likesCounter +1 })
    }

    render() {
        return(
        <div>
            <i class="far fa-heart" onClick={this.clickHandler}></i>
            <i class="far fa-comment"></i>
            <div>{this.state.likesCounter}likes</div>
        </div>
        )}
}

export default LikesSection;