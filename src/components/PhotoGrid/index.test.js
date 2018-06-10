import React from 'react'
import { shallow } from 'enzyme'

import PhotoGrid from './'

describe('PhotoGrid', () => {
  it('renders without crashing', () => {
    const subject = shallow(<PhotoGrid />)
    expect(subject.hasClass('photo-grid')).toBe(true)
  })
})