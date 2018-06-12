import React from 'react'

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
    const API_URL = `/api/photos?page=${page}`
    const result = [
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 101 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 102 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 103 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 104 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 105 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 106 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 107 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 108 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 109 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 110 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 111 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 112 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 113 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 114 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 115 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 116 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 117 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 118 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 119 },
      { url: `http://via.placeholder.com/320/${Math.round(Math.random() * 1000)}/${Math.round(Math.random() * 1000)}`, id: page * 120 }
    ]

    return Promise.resolve(result)
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
