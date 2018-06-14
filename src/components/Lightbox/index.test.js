import React from 'react'
import { shallow } from 'enzyme'

import Lightbox from './'

describe('Lightbox', () => {
  const SPY_ONCLICK = jest.fn()
  let subject

  beforeEach(() => {
    subject = shallow(<Lightbox onClick={SPY_ONCLICK} />)
  })

  it('triggers `onClick` prop when clicked', () => {
    const mockClickEvent = {
      target: {
        matches(selector) {
          return selector == '.lightbox'
        }
      }
    }

    expect(SPY_ONCLICK).toHaveBeenCalledTimes(0)
    subject.simulate('click', mockClickEvent)
    expect(SPY_ONCLICK).toHaveBeenCalledTimes(1)
  })
})


