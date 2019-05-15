import React from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer';
import PostPage from './components/PostContainer/PostPage'
import withAuthenticate from './components/Authentication/WithAuthenticate'
import LoginPage from './components/Login/LoginPage'

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        profiles: []
      }
  }

  componentDidMount (){
    this.setState({profiles: dummyData})
  }

  render() {
    return (
      <div className="App">
        <PostPage profiles={this.state.profiles} />

      </div>
    )
  };
};

export default withAuthenticate(App)(LoginPage);
