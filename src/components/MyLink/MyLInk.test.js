import 'jsdom-global/register'
import '@testing-library/jest-dom'
import React from 'react'
import * as Gatsby from 'gatsby'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import MyLink from './MyLink'

const testCases = [
  { url: '/', to: '/iphone-6', expected: '/repairs/iphone-6' },
  { url: '/', to: '/iphone-6', expected: '/repairs/iphone-6' },
  { url: '/repairs', to: '/iphone-6', expected: '/repairs/iphone-6' },
  { url: '/about', to: '/iphone-6', expected: '/repairs/iphone-6' },
  { url: '/contact', to: '/iphone-6', expected: '/repairs/iphone-6' },
  { url: '/westminster/repairs', to: '/iphone-6', expected: '/westminster/repairs/iphone-6' },
  { url: '/westminster/repairs/iphone-7', to: '/iphone-6', expected: '/westminster/repairs/iphone-6' },
  { url: '/westminster/repairs/iphone-7', to: '/denver', expected: '/denver/repairs/iphone-6' },
]

beforeEach(() => {
  jest.clearAllMocks()
})

describe('MyLink', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MyLink />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should have href attribute "tel:3034216499"', () => {
    const { queryByTestId } = render(<MyLink />)
    const callButton = queryByTestId('callButtonA')
    expect(callButton).toHaveAttribute('href', 'tel:3034216499')
  })
})
