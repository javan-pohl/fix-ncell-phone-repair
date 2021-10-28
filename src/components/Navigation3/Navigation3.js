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
  console.log('url: ', currentUrl)
  console.log('menuLinks: ', menuLinks)
  menuLinks = menuLinks.map((val) => {
    if (val.text === 'Repairs') {
      val.sublinks = [
        {
          testid: 'iphone-charging-port-repair',
          link: '/repairs/iphone-charging-port-repair',
          text: 'iPhone Screen Repair',
          pageURL:
            'https://www.fixncell.com/repairs/iphone-charging-port-repair',
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
  const links = menuLinks.map((link) => {
    console.log(link.sublinks !== undefined)

    return link.sublinks !== undefined ? (
      <div className={dropDown}>
        <li key={link.testid}>
          <span>{link.text}</span>
        </li>
        <div className={dropMenu}>
          <div className={dropMenuItem}>iPhone Screen Repairs</div>
          <div className={dropMenuItem}>iPhone Screen Repairs</div>
          <div className={dropMenuItem}>iPhone Screen Repairs</div>
        </div>
      </div>
    ) : (
      <li className={noDropDown} key={link.testid}>
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
    )
  })
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
