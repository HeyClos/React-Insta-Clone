import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: dummyData
    };
  }

  render () {
    return <div className="App">
      <PostContainer profiles={this.state.profiles} />
    </div>
  };
}

export default App;
