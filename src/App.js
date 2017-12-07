import React, { Component } from 'react';
import {createStore} from 'redux';

const store = createStore();


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hi there</h1>
      </div>
    );
  }
}

export default App;
