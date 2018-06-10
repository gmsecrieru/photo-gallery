import React from 'react'
import { shallow } from 'enzyme'

import Photo from './'

describe('Photo', () => {
  it('renders URL prop as background image', () => {
    const imgUrl = 'http://foo.bar/baz'
    const subject = shallow(<Photo url={imgUrl} />)

    expect(subject.get(0).props.style.backgroundImage === `url(${imgUrl})`).toBe(true)
  })
})
