import React from 'react'

import './index.css'

export default function Photo({ url }) {
  const styles = {
    backgroundImage: `url(${url})`
  }

  return (
    <div className="photo" style={styles}></div>
  )
}
