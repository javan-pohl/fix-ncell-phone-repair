import 'jsdom-global/register'
import React from 'react'
import * as Gatsby from 'gatsby'
import Menu from './Menu'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'


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

test('should not be visible when fed a "visible" prop of false', () => {
  render(<Menu visible={false} />)
  const menu = screen.getByTestId('navMenu')
  const menuEl = document.getElementById('navMenu')
  expect(menuEl).not.toBeVisible()
})

test('should be visible when fed a "visible" prop of true', () => {
  render(<Menu visible={true} />)
  const menu = screen.getByTestId('navMenu')
  const menuEl = document.getElementById('navMenu')
  expect(menuEl).toBeVisible()
})

describe('Menu', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Menu visible={true}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})