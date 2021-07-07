import * as React from 'react'
import { Link } from 'gatsby'
import {
  header,
  callBar,
  headerContainer,
  highlight,
  branding,
  navigation,
  current,
} from './Header2.module.css'

function Header2() {
  return (
    <header className={header}>
      <div className={callBar}>
        <a href="tel:3034216499">&#9742; Call (303)421-6499</a>
      </div>
      <div className={headerContainer}>
        <div className={branding}>
          <a href="https://www.fixncell.com/">
            <span id="highlight" className={highlight}>
              FixNcell
              {' '}
            </span>
            iPhone Repair
          </a>
        </div>
        <div className={navigation}>
          <nav>
            <ul>
              <li className={current}>
                <a href="https://www.fixncell.com/">Home</a>
              </li>
              <li className={current}>
                <a href="./repairs.html">Repairs</a>
              </li>
              <li className={current}>
                <a href="./about.html">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header2
