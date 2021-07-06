import 'jsdom-global/register'
import '@testing-library/jest-dom'
import React from 'react'
import * as Gatsby from 'gatsby'
import renderer from 'react-test-renderer'
import {render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import EmailButton from './EmailButton'
import emailIcon from '../../images/email.png'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      email: 'fixncellllc@gmail.com',
    },
  },
}))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('EmailButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<EmailButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
	it('should have href attribute "mailto:fixncellllc@gmail.com"', () => {
		const {queryByTestId} = render(<EmailButton />)
		const emailButton = queryByTestId("emailButtonA")
		expect(emailButton).toHaveAttribute('href', 'mailto:fixncellllc@gmail.com')
	})
})


