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
  // toggleMenu() {
  //   this.childMenu.open()
  // }
  openMenu() {
    this.setState({ isOpen: true })
  }
	closeMenu() {
		this.setState({ isOpen: false})
	}

  render() {
    return (
      <>
        {/* <Hamburger hamClick={() => this.toggleMenu()} /> */}
        <Hamburger hamClick={() => this.openMenu()} />
        {/* <Menu
          ref={(el) => {
            this.childMenu = el
          }}
        /> */}
				<Menu visible={this.state.isOpen}	close={() => this.closeMenu()}/>
      </>
    )
  }
}

export default Navigation
