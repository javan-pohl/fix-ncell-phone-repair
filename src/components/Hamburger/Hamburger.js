import * as React from 'react'
import { hamburger } from './Hamburger.module.css'

const Hamburger = ({hamClick}) => {
  return (
    <div onClick={() => hamClick()}>
      <div className={hamburger}></div>
      <div className={hamburger}></div>
      <div className={hamburger}></div>
    </div>
  )
}

export default Hamburger