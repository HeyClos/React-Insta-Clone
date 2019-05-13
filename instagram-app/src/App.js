import React from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';



class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        profiles: dummyData
      }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer profiles={this.state.profiles} />
        <CommentSection />

      </div>
    )
  };
};

export default App;
