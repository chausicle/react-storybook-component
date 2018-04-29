import React from 'react'
import renderer from 'react-test-renderer'
import ShowDate from './ShowDate'

test('ShowDate shows correct date', () => {
  const tree = renderer.create(<ShowDate />).toJSON()
  expect(tree).toMatchSnapshot()
})
