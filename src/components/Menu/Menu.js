import React, { useImperativeHandle, useRef } from 'react'

import { Link } from 'gatsby'
import {menu, open} from './Menu.module.css'

// import styles from './Menu.module.scss'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <div
        role='button'
        tabIndex='0'
        className={`${menu} ${this.state.open ? `${open}` : ''}`}
        onClick={() => this.close()}
        onKeyDown={() => this.close()}
      >
        <Link to='/contact'>
          <h1>Contact Us</h1>
        </Link>
        <Link to='/'>
          <h1>Home</h1>
        </Link>
        <Link to='/about'>
          <h1>About</h1>
        </Link>
        <Link to='/iphone-repair'>
          <h1>Repairs</h1>
        </Link>
      </div>
    )
  }

  close() {
    this.setState({ open: false })
  }

  open() {
    this.setState({ open: true })
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
