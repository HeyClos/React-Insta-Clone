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

  render () {
    return <div className="App appWrapper">
      <ProfileList profiles={this.state.profiles} />
    </div>
  };
}

export default App;
