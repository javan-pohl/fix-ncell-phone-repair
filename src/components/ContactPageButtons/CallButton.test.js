import 'jsdom-global/register'
import '@testing-library/jest-dom'
import React from 'react'
import * as Gatsby from 'gatsby'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CallButton from './CallButton'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      phone: '3034216499',
    },
  },
}))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('CallButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CallButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should have href attribute "tel:3034216499"', () => {
    const { queryByTestId } = render(<CallButton />)
    const callButton = queryByTestId('callButtonA')
    expect(callButton).toHaveAttribute('href', 'tel:3034216499')
  })
})
