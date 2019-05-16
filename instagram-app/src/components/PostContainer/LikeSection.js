import React from 'react'

class LikeSection extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
          likes: props.likes
        }
    }

    incrementLike = e => {
        //let likes = this.state.likes + 1;
        //this.setState({ likes });
        e.preventDefault();
        this.setState(prevState => ({ likes: ++prevState.like}));
    };

    render() {
      return (
        <div>
            {this.state.likes}
            <button OnClick={this.increment} >{} </button>
  
        </div>
      )
    };
  };
  
export default LikeSection
