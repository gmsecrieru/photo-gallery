import React from 'react'
import { shallow } from 'enzyme'

import Photo from './'

describe('Photo', () => {
  const IMG_URL = 'http://foo.bar/baz'

  it('renders URL prop as background image', () => {
    const subject = shallow(<Photo url={IMG_URL} />)
    expect(subject.prop('style').backgroundImage).toEqual(`url(${IMG_URL})`)
  })

  it('renders images asynchronously', () => {
    const spyLoadImage = jest.spyOn(Photo.prototype, 'loadImage')
    const spySetState = jest.spyOn(Photo.prototype, 'setState')

    // render component
    const subject = shallow(<Photo url={IMG_URL} />)
    expect(spyLoadImage).toHaveBeenCalledTimes(1)
    expect(spySetState).toHaveBeenCalledWith({ isImageLoaded: true })
  })

  it('calls `onClick` prop when clicked', () => {
    const spy = jest.fn()

    const subject = shallow(<Photo url={IMG_URL} onClick={spy} />)
    expect(spy).toHaveBeenCalledTimes(0)

    subject.simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
