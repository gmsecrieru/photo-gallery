import React, { Component } from 'react';

import './App.css'

import PhotoStreamContainer from './containers/PhotoStreamContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Photo Gallery</h1>
        <PhotoStreamContainer />
      </div>
    );
  }
}

export default App;
