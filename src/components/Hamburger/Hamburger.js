import * as React from 'react'
import { hamburgerMain, hamburger } from './Hamburger.module.css'

const Hamburger = ({hamClick}) => {
  return (
    <div className={hamburgerMain} onClick={() => hamClick()}>
      <div className={hamburger}></div>
      <div className={hamburger}></div>
      <div className={hamburger}></div>
    </div>
  )
}

export default Hamburger