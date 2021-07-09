import * as React from 'react'
import { contactButton } from './ContactPage.module.css'
import emailIcon from '../../images/email.png'

const EmailButton = () => (
  <button type="button" className={contactButton}>
    <a data-testid="emailButtonA" href="mailto:fixncellllc@gmail.com">
      <img src={emailIcon} alt="email icon" />
      <br />
      Email Us
    </a>
  </button>
)

export default EmailButton
