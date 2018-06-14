import React, { Component } from 'react';

import './App.css'

import Lightbox from './components/Lightbox'
import PhotoDetails from './components/PhotoDetails'
import PhotoStreamContainer from './containers/PhotoStreamContainer'

class App extends Component {
  constructor(props) {
    super(props)

    this.handlePhotoClick = this.handlePhotoClick.bind(this)
    this.handleLightboxClick = this.handleLightboxClick.bind(this)

    this.state = {
      isLightBoxOpen: false,
      photoDetailsProps: null
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Photo Gallery</h1>
        {
          this.state.isLightBoxOpen
          ? <Lightbox onClick={this.handleLightboxClick}>
              <PhotoDetails {...this.state.photoDetailsProps} />
            </Lightbox>
          : null
        }
        <PhotoStreamContainer onClick={this.handlePhotoClick}/>
      </div>
    );
  }

  handlePhotoClick(photo) {
    this.setState({
      isLightBoxOpen: true,
      photoDetailsProps: photo.props
    })
  }

  handleLightboxClick() {
    this.setState({
      isLightBoxOpen: false
    })
  }
}

export default App;
