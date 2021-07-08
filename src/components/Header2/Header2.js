import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import formatPhone from '../../functions/formatPhone'
import {
  header,
  callBar,
  headerContainer,
  highlight,
  branding,
  navigation,
  current,
} from './Header2.module.css'

function getData() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          phone
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
      siteMetadata: { phone, menuLinks },
    },
  } = data

  const myData = { phone, menuLinks }
  return myData
}

function Header2() {
  const { phone, menuLinks } = getData()
  const links = menuLinks.map((link) => (
    <li className={current} key={link.testid}>
      <Link data-testid={link.testid} to={link.link}>
        {link.text}
      </Link>
    </li>
  ))
  const phoneFormatted = formatPhone(phone)
  return (
    <header className={header}>
      <div className={callBar}>
        <a href={`tel:${phone}`}>
          &#9742; Call
          {' '}
          {phoneFormatted}
        </a>
      </div>
      <div className={headerContainer}>
        <div className={branding}>
          <Link to="/">
            <span id="highlight" className={highlight}>
              FixNcell
              {' '}
            </span>
            iPhone Repair
          </Link>
        </div>
        <div className={navigation}>
          <nav>
            <ul>{links}</ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header2
