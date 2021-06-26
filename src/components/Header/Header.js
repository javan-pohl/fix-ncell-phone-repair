import * as React from 'react'
import { Link } from 'gatsby'
import { header, li, navUl, title, titleWhite } from './Header.module.css'

const Header = () => {
  return (
    <header className={header}>
      <div className={title}><Link to='/'>FixNcell <span className={titleWhite}>Phone Repair</span></Link></div>
        <nav >
          <ul className={navUl}>
            <li className={li}>
              <Link to='/'>Home</Link>
            </li>
            <li className={li}>
              <Link to='/about'>About</Link>
            </li>
            <li className={li}>
              <Link to='/iphone-repair'>Repairs</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header
