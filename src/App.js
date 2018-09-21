import React, { Component } from 'react';
import './App.css';
import {
  slice
} from './lodash/base'
import {
  chunk,
  compact
} from './lodash/array'
class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      arr : [1,2,3,4,5,6,7]
    }
  }
  componentDidMount() {
    this.testApi()
    window.compact = compact
  }
  testApi() {
    window.slice = slice
    window.chunk = chunk

    var result = slice(this.state.arr, 0,6)
    console.log(result)
  }
  render() {
    return (
      <div className="App">
       Home
      </div>
    );
  }
}

export default App;

