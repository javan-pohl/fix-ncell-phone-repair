import 'jsdom-global/register'
import React from 'react'
import * as Gatsby from 'gatsby'
import Navigation from './Navigation'
import {render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'FixNcell Phone Repair',
      menuLinks: [
        {
          testid: 'homeLink',
          link: '/',
          text: 'Home',
        },
        {
          testid: 'aboutLink',
          link: '/about',
          text: 'About',
        },
        {
          testid: 'repairsLink',
          link: '/iphone-repair',
          text: 'Repairs',
        },
        {
          testid: 'contactLink',
          link: '/contact',
          text: 'Contact Us',
        },
      ],
    },
  },
}))

beforeEach(() => {
  jest.clearAllMocks()
})

test('expect menu to not be visible, then to be visible after clicking the hamburger menu, and to again not be visible after clicking the menu', () => {
	const {queryByTestId} = render(<Navigation />)
	const hamBtn = queryByTestId("hamburgerButton")
	let menuEl = queryByTestId("navMenu")
	expect(menuEl).not.toBeVisible()
	fireEvent.click(hamBtn)
	expect(menuEl).toBeVisible()
	fireEvent.click(menuEl)
	menuEl = queryByTestId("navMenu")
	expect(menuEl).not.toBeVisible()
})