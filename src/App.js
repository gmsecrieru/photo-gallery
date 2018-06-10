import React, { Component } from 'react';

import './App.css'

import PhotoGrid from './components/PhotoGrid'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Photo Gallery</h1>
        <PhotoGrid />
      </div>
    );
  }
}

export default App;
