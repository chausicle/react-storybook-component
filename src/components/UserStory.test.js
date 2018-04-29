import React from 'react'
import { shallow } from 'enzyme'
import UserStory from './UserStory'

describe('UserStory', () => {
  it ('clicks deliver button', () => {
    const updateStatus = jest.fn()

    const component = shallow(<UserStory updateStatus={updateStatus} />)
    component.find('button[data-behavior="deliver"]').simulate('click')
    expect(updateStatus.mock.calls).toEqual([['delivered']])
  })
  it ('clicks finish button', () => {
    const updateStatus = jest.fn()

    const component = shallow(<UserStory updateStatus={updateStatus} />)
    component.find('button[data-behavior="finish"]').simulate('click')
    expect(updateStatus.mock.calls).toEqual([['finished']])
  })
})
