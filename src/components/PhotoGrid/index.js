import React from 'react'

import './index.css'

import Photo from './../Photo'

export default function PhotoGrid({ photos = [], onClick }) {
  return (
    <div className="photo-grid">
    {
      photos.map((item, key) => <Photo {...item} key={key} onClick={onClick} />)
    }
    </div>
  )
}
