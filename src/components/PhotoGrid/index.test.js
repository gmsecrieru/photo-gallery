import React from 'react'
import { shallow } from 'enzyme'

import PhotoGrid from './'
import Photo from './../Photo'

describe('PhotoGrid', () => {
  const SPY_ONCLICK = jest.fn()
  const MOCK_PHOTOS = [
    { url: 'http://foo.bar/1' },
    { url: 'http://foo.bar/2' },
    { url: 'http://foo.bar/3' },
    { url: 'http://foo.bar/4' },
    { url: 'http://foo.bar/5' },
    { url: 'http://foo.bar/6' },
  ]

  let subject
  beforeEach(() => {
    subject = shallow(<PhotoGrid photos={MOCK_PHOTOS} onClick={SPY_ONCLICK}/>)
  })

  it('renders a list of Photo components', () => {
    expect(subject.find(Photo).length).toEqual(MOCK_PHOTOS.length)
  })

  it('forwards `onClick` prop to Photo components', () => {
    subject.find(Photo).forEach(photo => expect(photo.prop('onClick')).toEqual(SPY_ONCLICK))
  })
})
