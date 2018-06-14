import React, { Fragment } from 'react'
import moment from 'moment'

import './index.css'

export default function PhotoDetails(props) {
  const {
    url,
    title,
    user,
    published,
    tags,
    date_taken: dateTaken,
    post_url: postUrl
  } = props

  return (
    <div className="photo-details">
      <div className="photo-details--picture" style={ { backgroundImage: `url(${url})` } } />
      <div className="photo-details--content">
        <span className="title"><a href={postUrl}>{title || 'Original post'}</a> by </span>
        <span className="user">{user}</span>
        <div className="taken-on">Taken on {moment(dateTaken).format('LLLL')}</div>
        <div className="published-on">Published on {moment(published).format('LLLL')}</div>
        <p className="tags">
        {
          tags.map((tag, key) =>
            <Fragment key={key}>
              <a href={`https://www.flickr.com/photos/tags/${tag}`}>{`#${tag}`}</a>&nbsp;
            </Fragment>
          )
        }
        </p>
      </div>
    </div>
  )
}
