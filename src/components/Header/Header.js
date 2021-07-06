import * as React from 'react'
import { Link } from 'gatsby'
import Navigation from '../Navigation/Navigation'
import { header, title, titleWhite } from './Header.module.css'

function Header() {
  return (
    <header className={header}>
      <div className={title}>
        <Link to="/">
          FixNcell
          {' '}
          <span className={titleWhite}>Phone Repair</span>
        </Link>
      </div>
      <Navigation />
    </header>
  )
}

export default Header
