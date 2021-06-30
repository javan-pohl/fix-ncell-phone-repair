import * as React from 'react'
import PropTypes from 'prop-types'
import { hamburgerMain, hamburger } from './Hamburger.module.css'

const Hamburger = ({ hamClick }) => (
  <div className={hamburgerMain} onClick={() => hamClick()} onKeyDown={() => hamClick()} role="button" tabIndex={0}>
    <div className={hamburger} />
    <div className={hamburger} />
    <div className={hamburger} />
  </div>
)

Hamburger.propTypes = {
  hamClick: PropTypes.func.isRequired,
}
export default Hamburger
