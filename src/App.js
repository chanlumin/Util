import React, { Component } from 'react';
import  {BrowserRouter, Route} from 'react-router-dom'
import Home from './lodash/home'
import './App.css';
import {
  slice
} from './lodash/base'
import {
  chunk,
  compact,
  compact1,
  concat
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
    window.compact1 = compact1
    window.concat = concat

  }
  testApi() {
    window.slice = slice
    window.chunk = chunk

    var result = slice(this.state.arr, 0,6)
    console.log(result)
  }
  render() {
    return (
        <BrowserRouter>
          <Route path="/" component={Home}/>
        </BrowserRouter>
    );
  }
}

export default App;

