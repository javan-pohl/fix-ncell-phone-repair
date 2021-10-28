import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import {
  navigation,
  dropDown,
  noDropDown,
  dropMenu,
  dropMenuItem,
} from './Navigation3.module.css'

export default function Navigation3({ currentUrl, menuLinks }) {
  const secSlash = currentUrl.indexOf('/', 2)
  const shortUrl = currentUrl.length > 1 && secSlash !== -1
    ? currentUrl.slice(0, secSlash)
    : currentUrl
  console.log('shortUrl: ', shortUrl, currentUrl)

  console.log('menuLinks: ', menuLinks)
  menuLinks = menuLinks.map((val) => {
    if (val.text === 'Repairs') {
      val.sublinks = [
        {
          testid: 'iphone-screen-repair',
          link: '/repairs/iphone-screen-repair',
          text: 'iPhone Screen Repair',
          pageURL: 'https://www.fixncell.com/repairs/iphone-screen-repair',
        },
        {
          testid: 'iphone-charging-port-repair',
          link: '/repairs/iphone-charging-port-repair',
          text: 'iPhone Charging Port Repair',
          pageURL:
            'https://www.fixncell.com/repairs/iphone-charging-port-repair',
        },
        {
          testid: 'iphone-battery-replacement',
          link: '/repairs/iphone-battery-replacement',
          text: 'iPhone Battery Replacement',
          pageURL:
            'https://www.fixncell.com/repairs/iphone-battery-replacement',
        },
      ]
    }
    return val
  })
  const links = menuLinks.map((link) => (link.sublinks !== undefined ? (
    <div className={dropDown}>
      <li style={{ color: `${link.link === shortUrl ? 'white' : 'black'}` }} key={link.testid}>
        <span>{link.text}</span>
      </li>
      <div className={dropMenu}>
        {link.sublinks.map((subLink) => (
          <Link className={dropMenuItem} to={subLink.link}>
            {subLink.text}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <li className={noDropDown} key={link.testid}>
      <Link
        style={{ color: `${link.link === shortUrl ? 'white' : 'black'}` }}
        data-testid={link.testid}
        to={link.link}
      >
        {link.text}
      </Link>
    </li>
  )))
  return (
    <div className={navigation}>
      <nav>
        <ul>{links}</ul>
      </nav>
    </div>
  )
}

Navigation3.propTypes = {
  currentUrl: PropTypes.string.isRequired,
  menuLinks: PropTypes.instanceOf(Array).isRequired,
}
