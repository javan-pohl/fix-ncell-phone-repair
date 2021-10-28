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
import getLocations from '../../queries/getLocations/getLocations'

export default function Navigation3({ currentUrl, menuLinks }) {
  const secSlash = currentUrl.indexOf('/', 2)
  const shortUrl = currentUrl.length > 1 && secSlash !== -1
    ? currentUrl.slice(0, secSlash)
    : currentUrl
  const { locations } = getLocations()
  const urlCap = shortUrl.charAt(1).toLocaleUpperCase() + shortUrl.slice(2)
  const pageIsLoc = locations.some((loc) => loc.name === urlCap)
  // console.log('pageIsloc: ', pageIsLoc)
  // console.log('urlCap: ', urlCap)
  // console.log('locations: ', locations)
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
    } else if (val.text === 'Locations') {
      val.sublinks = locations.map((loc) => {
        const locLowerCase = loc.name.toLowerCase()
        return {
          testid: locLowerCase,
          link: `/${locLowerCase}/repairs/iphone`,
          text: loc.name,
          pageURL: `https://www.fixncell.com/${locLowerCase}/repairs/iphone`,
        }
      })
    }
    return val
  })
  const links = menuLinks.map((link) => (link.sublinks !== undefined ? (
    <div className={dropDown} key={link.text}>
      <li
        style={{
          color: `${
            link.link === shortUrl
              || link.text === 'Locations' && locations.some((loc) => loc.name.toLowerCase() === shortUrl.slice(1))
              ? 'white'
              : 'black'
          }`,
        }}
        key={link.testid}
      >
        <span>{link.text}</span>
      </li>
      <div className={dropMenu} key={link.text}>
        {link.sublinks.map((subLink) => (
          <Link className={dropMenuItem} to={subLink.link} key={subLink.text}>
            {subLink.text}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <li className={noDropDown} key={link.testid}>
      <Link
        style={{
          color: `${
            link.link === shortUrl
              || locations.some((loc) => loc.name === link.text)
              ? 'white'
              : ''
          }`,
        }}
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
