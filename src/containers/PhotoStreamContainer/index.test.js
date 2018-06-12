import React from 'react'
import { mount } from 'enzyme'


describe('PhotoStreamContainer', () => {
  it('fetches photos from API', () => {
    // mock API call
    // render component
    // assert rendered Photo components === MOCK_DATA.length)
  })

  it('paginates results with infinite scroll', () => {
    // mock request with 5 photos
    // render component
    // check if PhotoGrid was rendered with 5 Photos
    // mock second request with 4 photos
    // scroll to the bottom of page
    // check if PhotoGrid was rendered with 9 Photos

  })

  it('stops to attempt fetching if nothing was returned from last request', () => {
    // mock request with 5 photos
    // render component
    // check if PhotoGrid was rendered with 5 Photos
    // check if API was requested 1x
    // mock second request with 0 photos
    // scroll to the bottom of page
    // check if PhotoGrid was rendered with 5 Photos
    // check if API was requested 2x
    // scroll to the bottom of page
    // check if API was requested 2x
  })
})
