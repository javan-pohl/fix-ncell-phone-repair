import * as React from 'react'
import { contactButton } from './ContactPage.module.css'
import phoneIcon from '../../images/call.png'

const CallButton = () => (
  <button className={contactButton} type="button">
    <a href="tel:3034216499">
      <img src={phoneIcon} alt="email icon" />
      <br />
      Call Us
    </a>
  </button>
)

export default CallButton
