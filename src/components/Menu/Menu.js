import React from 'react'

import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { menu } from './Menu.module.css'

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
      id="navMenu"
      data-testid="navMenu"
      role="button"
      tabIndex="0"
      className={`${menu}`}
      onClick={() => close()}
      onKeyDown={() => close()}
      /* Moving these attributes from the css module here so that the visibility of the component is more easily testable */
      style={{
        visibility: `${visible ? 'visible' : 'hidden'}`,
        opacity: `${visible ? '1' : '0'}`,
      }}
    >
      {links}
    </div>
  )
}

Menu.propTypes = {
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

export default Menu
