import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import CallBar from '../CallBar/CallBar'
import Navigation3 from '../Navigation3/Navigation3'
import {
  header,
  headerContainer,
  highlight,
  branding,
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
  return (
    <header className={header}>
      <div className={headerContainer}>
        <CallBar phone={phone} />
        <div className={branding} data-testid="bizName">
          <Link to="/">
            <span id="highlight" className={highlight}>
              FixNcell
              {' '}
            </span>
            <span>iPhone Repair</span>
          </Link>
        </div>
        <Navigation3 menuLinks={menuLinks} currentUrl={currentUrl} />
      </div>
    </header>
  )
}

Header2.propTypes = {
  currentUrl: PropTypes.string,
}
Header2.defaultProps = {
  currentUrl: '/',
}
export default Header2
