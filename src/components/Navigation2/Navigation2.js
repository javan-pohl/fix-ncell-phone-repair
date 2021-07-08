import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { navigation } from './Navigation2.module.css'

export default function Navigation2({ currentUrl, menuLinks }) {
  const links = menuLinks.map((link) => (
    <li key={link.testid}>
      <Link
        style={{
          color: `${currentUrl === link.link ? 'white' : 'black'}`,
        }}
        data-testid={link.testid}
        to={link.link}
      >
        {link.text}
      </Link>
    </li>
  ))
  return (
    <div className={navigation}>
      <nav>
        <ul>{links}</ul>
      </nav>
    </div>
  )
}

Navigation2.propTypes = {
  currentUrl: PropTypes.string.isRequired,
  menuLinks: PropTypes.instanceOf(Array).isRequired,
}
