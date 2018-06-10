import React, { Component } from 'react';

import './App.css'

import PhotoGrid from './components/PhotoGrid'

class App extends Component {
  render() {
    const photos = [
      { url: 'http://via.placeholder.com/320' },
      { url: 'http://via.placeholder.com/320' },
      { url: 'http://via.placeholder.com/320' },
      { url: 'http://via.placeholder.com/320' },
      { url: 'http://via.placeholder.com/320' },
      { url: 'http://via.placeholder.com/320' },
    ]

    return (
      <div className="app">
        <h1>Photo Gallery</h1>
        <PhotoGrid photos={photos} />
      </div>
    );
  }
}

export default App;
