import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import ProfileList from './components/PostContainer/ProfileList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: dummyData
    };
  }

  addComment = (e, comment, index) => {
    e.preventDefault();
    const newComment =  {
      username: "carlos",
      text: comment
    };

    const newData = [
      ...this.state.profiles
    ]

    newData[index].comments = [
      ...newData[index].comments, newComment
    ]

    this.setState({ 
      profiles: newData, 
    });
  };

  render () {
    return <div className="App appWrapper">
      <ProfileList profiles={this.state.profiles} addComment={this.addComment}/>
    </div>
  };
}

export default App;
