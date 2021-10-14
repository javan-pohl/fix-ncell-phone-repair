import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { contactButton } from './ContactPage.module.css'
import phoneIcon from '../../images/call.png'
import getNum from '../../queries/getNum/getNum.js'

const CallButton = () => {
  const num = getNum()
  return (
    <button data-testid="callUsButton" className={contactButton} type="button">
      <a data-testid="callButtonA" href={`tel:${num}`}>
        <img src={phoneIcon} alt="email icon" />
        <br />
        Call or Text
      </a>
    </button>
  )
}

export default CallButton
