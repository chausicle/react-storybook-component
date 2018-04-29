import React from 'react'
import { shallow } from 'enzyme'
import Expenses from './Expenses'

it('renders without crashing', () => {
  shallow(<Expenses />)
})
