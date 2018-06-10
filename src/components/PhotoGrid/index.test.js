import React from 'react'
import { shallow } from 'enzyme'

import PhotoGrid from './'
import Photo from './../Photo'

describe('PhotoGrid', () => {
  it('renders a list of Photo components', () => {
    const photos = [
      { url: 'http://foo.bar/1' },
      { url: 'http://foo.bar/2' },
      { url: 'http://foo.bar/3' },
      { url: 'http://foo.bar/4' },
      { url: 'http://foo.bar/5' },
      { url: 'http://foo.bar/6' },
    ]

    const subject = shallow(<PhotoGrid photos={photos} />)
    expect(subject.find(Photo).length).toEqual(photos.length)
  })
})
