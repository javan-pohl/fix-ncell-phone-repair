import React from 'react'

import Menu from '../Menu/Menu'

import Hamburger from '../Hamburger/Hamburger'

class Navigation extends React.Component {
  toggleMenu() {
    this.childMenu.open()
  }

  render() {
    return (
      <>
        <Hamburger hamClick={() => this.toggleMenu()} />
        <Menu ref={(el) => { this.childMenu = el }} />
      </>
    )
  }
}

export default Navigation
