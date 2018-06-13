import React from 'react'
import { shallow } from 'enzyme'
import moxios from 'moxios'

import PhotoStreamContainer from './'
import PhotoGrid from './../../components/PhotoGrid'

describe('PhotoStreamContainer', () => {
  const MOCK_DATA = [
    { id: 1, url: 'http://foo.bar/111' },
    { id: 2, url: 'http://foo.bar/222' },
    { id: 3, url: 'http://foo.bar/333' },
    { id: 4, url: 'http://foo.bar/444' },
    { id: 5, url: 'http://foo.bar/555' }
  ]

  beforeEach(() => {
    jest.useFakeTimers()
    moxios.install()
    moxios.stubRequest(/api\/photos/, { status: 200, response: MOCK_DATA })
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('fetches photos from API', () => {
    // render component
    const subject = shallow(<PhotoStreamContainer />)
    expect(subject.find(PhotoGrid).length).toBe(1)

    process.nextTick(() => {
      subject.update()
      expect(subject.find(PhotoGrid).prop('photos')).toEqual(MOCK_DATA)
    })
  })

  it('paginates results with infinite scroll', () => {
    // mock element height since JSDOM does not handle this scenario
    jest.spyOn(PhotoStreamContainer.prototype, 'getRefScrollHeight').mockImplementation(() => ({ scrollHeight: 500 }))

    // spy scrolling
    const spyScrollCallback = jest.spyOn(PhotoStreamContainer.prototype, 'onScroll')
    const spyLoadPhotosCallback = jest.spyOn(PhotoStreamContainer.prototype, 'loadPhotos')

    // render component
    const subject = shallow(<PhotoStreamContainer />)
    expect(spyScrollCallback).toHaveBeenCalledTimes(0)
    expect(spyLoadPhotosCallback).toHaveBeenCalledTimes(1)

    // simulate page scrolling
    window.pageYOffset = 400
    window.dispatchEvent(new Event('scroll'))

    jest.runAllTimers()

    expect(spyScrollCallback).toHaveBeenCalledTimes(1)
    expect(spyLoadPhotosCallback).toHaveBeenCalledTimes(2)
  })
})
