import React from 'react'

import './index.css'

export default class Photo extends React.Component {
  constructor(props) {
    super(props)

    this.loadImage = this.loadImage.bind(this)

    this.state = {
      isImageLoaded: false
    }
  }

  componentDidMount() {
    this.loadImage()
  }

  render() {
    const styles = {}
    if (this.state.isImageLoaded) {
      styles.backgroundImage = `url(${this.props.url})`
    } else {
      styles.backgroundColor = 'cyan'
    }

    return (
      <div className="photo" style={styles}></div>
    )
  }

  loadImage() {
    const img = new Image()
    img.onload = () => this.setState({ isImageLoaded: true })
    img.src = this.props.url
  }
}
