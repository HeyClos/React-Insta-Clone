import React from 'react';
import './App.css';
//import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'



class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        //dummyData: this.dummyData
      }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    )
  };
};

export default App;
