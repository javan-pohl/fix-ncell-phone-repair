import 'jsdom-global/register'
import '@testing-library/jest-dom'
import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CallBar from './CallBar'

const rawNum = '3034216499'
const formattedNum = '(303)421-6499'

test('CallBar displays the number correctly', () => {
  render(<CallBar phone={rawNum} />)
  expect(screen.getByTestId('callBarNum')).toHaveTextContent(formattedNum)
})

describe('CallBar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CallBar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should have href attribute "tel:3034216499"', () => {
    const { queryByTestId } = render(<CallBar />)
    const callButton = queryByTestId('callBarNum')
    expect(callButton).toHaveAttribute('href', 'tel:3034216499')
  })
})
