import React, { useImperativeHandle, useRef } from 'react'

import { Link } from 'gatsby'
import { menu, open } from './Menu.module.css'

// import styles from './Menu.module.scss'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  close() {
    this.setState({ open: false })
  }

  open() {
    this.setState({ open: true })
  }

  render() {
    return (
      <div
				id="navMenu"
        role="button"
        tabIndex="0"
/* we don't want to destructure props here because that will cause name overlap */
/* eslint-disable */
        className={`${menu} ${this.state.open ? `${open}` : ''}`}
/* eslint-enable */
        onClick={() => this.close()}
        onKeyDown={() => this.close()}
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

export default React.forwardRef((props, ref) => {
  const menuRef = useRef()

  useImperativeHandle(ref, () => ({
    open() {
      menuRef.current.open()
    },
  }))

  return <Menu ref={menuRef} {...props} />
})
