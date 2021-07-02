import React from 'react'

import { Link } from 'gatsby'
import { menu, open } from './Menu.module.css'

class Menu extends React.Component {

  render() {
    return (
      <div
				id="navMenu"
        role="button"
        tabIndex="0"
/* we don't want to destructure props here because that will cause name overlap */
/* eslint-disable */
        className={`${menu} ${this.props.visible ? `${open}` : ''}`}
/* eslint-enable */
        onClick={() => this.props.close()}
        onKeyDown={() => this.props.close()}
      >
        <Link to="/contact">
          <h1>Contact Us</h1>
        </Link>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/about">
          <h1>About</h1>
        </Link>
        <Link to="/iphone-repair">
          <h1>Repairs</h1>
        </Link>
      </div>
    )
  }
}

export default Menu