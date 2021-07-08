import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import formatPhone from '../../functions/formatPhone'
import Navigation2 from '../Navigation2/Navigation2'
import {
  header,
  callBar,
  headerContainer,
  highlight,
  branding,
  white,
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

  return { phone, menuLinks }
}

function Header2({ currentUrl }) {
  const { phone, menuLinks } = getData()
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
        <div className={branding} data-testid="bizName">
          <Link to="/">
            <span id="highlight" className={highlight}>
              FixNcell
              {' '}
            </span>
            <span className={white}>iPhone Repair</span>
          </Link>
        </div>
        <Navigation2 menuLinks={menuLinks} currentUrl={currentUrl} />
      </div>
    </header>
  )
}

Header2.propTypes = {
  currentUrl: PropTypes.string.isRequired,
}

export default Header2
