import React from 'react'

import Menu from '../Menu/Menu'

import Hamburger from '../Hamburger/Hamburger'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  openMenu() {
    this.setState({ isOpen: true })
  }
  closeMenu() {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <>
        <Hamburger hamClick={() => this.openMenu()} />
        <Menu visible={this.state.isOpen} close={() => this.closeMenu()} />
      </>
    )
  }
}

export default Navigation
