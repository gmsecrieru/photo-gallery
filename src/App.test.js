import React from 'react';
import { mount } from 'enzyme'

import App from './App';
import PhotoStreamContainer from './containers/PhotoStreamContainer';

describe('App', () => {
  it('renders without crashing', () => {
    // mock fetch implementation
    jest.spyOn(PhotoStreamContainer.prototype, 'fetch').mockImplementation(() => Promise.resolve([]))

    const subject = mount(<App />)
    expect(subject.find(PhotoStreamContainer).length).toBe(1)
  })
})
