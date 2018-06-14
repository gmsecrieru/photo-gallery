import React from 'react'

import './index.css'

export default class Lightbox extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { children, onClick } = this.props

    return (
      <div className="lightbox" onClick={this.handleClick}>
        <div className="lightbox--inner">
          {children}
        </div>
      </div>
    )
  }

  handleClick(e) {
    if (e.target.matches('.lightbox')) {
      this.props.onClick()
    }
  }
}
