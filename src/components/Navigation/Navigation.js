import React from "react"

import Menu from "../Menu/Menu"

import Hamburger from "../Hamburger/Hamburger"

class Navigation extends React.Component {

  render() {
    return (
      <>
        {/* <button onClick={() => this.toggleMenu()}>
          Open Menu
        </button> */}
				<Hamburger hamClick={()=> this.toggleMenu()} />
        <Menu ref={el => (this.childMenu = el)} />
      </>
    )
  }

  toggleMenu() {
    this.childMenu.open()
  }
}

export default Navigation