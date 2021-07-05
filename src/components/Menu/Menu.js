import React from 'react'

import { Link, useStaticQuery, graphql } from 'gatsby'
import { menu, open } from './Menu.module.css'

function getLinks() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          menuLinks {
            link
            testid
            text
          }
        }
      }
    }
  `)
  const {
    site: {
      siteMetadata: { menuLinks },
    },
  } = data
  return menuLinks
}
function Menu({ visible, close }) {
  const menuLinks = getLinks()
  const links = menuLinks.map((link) => (
    <Link data-testid={link.testid} to={link.link} key={link.testid}>
      <h1>{link.text}</h1>
    </Link>
  ))
  return (
    <div
      id='navMenu'
      data-testid='navMenu'
      role='button'
      tabIndex='0'
      /* we don't want to destructure props here because that will cause name overlap */
      /* eslint-disable */
      className={`${menu} ${visible ? `${open}` : ''}`}
      /* eslint-enable */
      onClick={() => close()}
      onKeyDown={() => close()}
    >
      {links}
    </div>
  )
}

export default Menu
