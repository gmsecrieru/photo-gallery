import React from 'react'

import './index.css'

import Spinner from './../Spinner'

export default class Photo extends React.Component {
  constructor(props) {
    super(props)

    this.loadImage = this.loadImage.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      isImageLoaded: false
    }
  }

  componentDidMount() {
    this.loadImage()
  }

  render() {
    if (this.state.isImageLoaded) {
      return this.renderPhoto()
    } else {
      return this.renderSpinner()
    }
  }

  renderSpinner() {
    return <div className="photo"><Spinner /></div>
  }

  renderPhoto() {
    const styles = {
      backgroundImage: `url(${this.props.url})`
    }

    return (
      <div className="photo" style={styles} onClick={this.handleClick}>
        <div className="photo--details">
          <div className="photo--content">
            <div className="photo--title">{this.props.title}</div>
            <div className="photo--owner">
              <a href={this.props.post_url}>{this.props.user}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  loadImage() {
    const img = new Image()
    img.onload = () => this.setState({ isImageLoaded: true })
    img.src = this.props.url
  }

  handleClick(e) {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(this)
    }
  }
}
