import React, { Component } from 'react';
import './App.css';
import slice from './lodash/base/slice'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      arr : [1,2,3,4,5,6,7]
    }
  }
  componentDidMount() {
    this.testApi()
  }
  testApi() {
    window.slice = slice
    var result = slice(this.state.arr, 0,6)
    console.log(result)
  }
  render() {
    return (
      <div className="App">
        Are You OK ?
      </div>
    );
  }
}

export default App;

