import React from 'react';
import { mount } from 'enzyme'

import App from './App';
import PhotoStreamContainer from './containers/PhotoStreamContainer';

describe('App', () => {
  it('renders without crashing', () => {
    const subject = mount(<App />)
    expect(subject.find(PhotoStreamContainer).length).toBe(1)
  })
})
