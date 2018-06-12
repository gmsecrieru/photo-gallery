import React from 'react'
import axios from 'axios'

import PhotoGrid from './../../components/PhotoGrid'

class PhotoStreamContainer extends React.Component {
  constructor(props) {
    super(props)

    this.loadPhotos = this.loadPhotos.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.domRef = React.createRef()

    this.state = {
      loading: true,
      hasMore: true,
      page: 1,
      photos: []
    }
  }

  componentWillMount() {
    this.loadPhotos()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
    window.removeEventListener('scroll', this.onScroll)
  }

  render() {
    const { loading, photos } = this.state

    return (
      <div className="photo-stream-container" ref={this.domRef}>
        <PhotoGrid photos={photos} />
        {
          loading
          ? "Loading..."
          : null
        }
      </div>
    )
  }

  loadPhotos() {
    const { photos } = this.state
    let { page, hasMore } = this.state
    this.fetch(page).then(result => {
      if (!result.length) {
        hasMore = false
      }

      this.setState({
        hasMore,
        loading: false,
        page: page + 1,
        photos: photos.concat(result)
      })
    })
  }

  fetch(page) {
    return axios.get(`/api/photos?page=${page}`).then(({ data }) => data)
  }

  onScroll() {
    const { hasMore } = this.state

    const { pageYOffset } = window
    const { scrollHeight } = this.domRef.current
    const diffHeightScroll = Math.max(pageYOffset, scrollHeight) - Math.min(pageYOffset, scrollHeight)
    const pageScrollThreshold = scrollHeight * 0.4

    clearTimeout(this.timeoutId)
    if (hasMore && diffHeightScroll < pageScrollThreshold) {
      this.timeoutId = setTimeout(() => {
        this.loadPhotos()
      }, 100)
    }
  }
}

export default PhotoStreamContainer
