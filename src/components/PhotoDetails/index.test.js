import React from 'react'
import { shallow } from 'enzyme'

import PhotoDetails from './'

describe('PhotoDetails', () => {
  const MOCK_PHOTO_PROPS = {
    url: 'http://foo.bar/123/456.jpg',
    title: 'My mock photo #1',
    user: 'photodetailstester',
    tags: ['pizza', 'cats', 'dogs'],
    published: '2018-02-01 00:00:00',
    date_taken: '2018-01-01 00:00:00',
    post_url: 'http://foo.bar/user/photo'
  }

  let subject
  beforeEach(() => {
    subject = shallow(<PhotoDetails {...MOCK_PHOTO_PROPS} />)
  })

  it('renders photo URL as background image', () => {
    expect(subject.find('.photo-details--picture').prop('style').backgroundImage).toEqual(`url(${MOCK_PHOTO_PROPS.url})`)
  })

  it('renders a link for each tag', () => {
    expect(subject.find('.tags a').length).toEqual(MOCK_PHOTO_PROPS.tags.length)
  })
})
