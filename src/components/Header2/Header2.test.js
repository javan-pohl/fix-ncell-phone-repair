import 'jsdom-global/register'
import '@testing-library/jest-dom'
import React from 'react'
import * as Gatsby from 'gatsby'
import renderer from 'react-test-renderer'

import Header2 from './Header2'

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

describe('Header2', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header2 />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
