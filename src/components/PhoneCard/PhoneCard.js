import * as React from 'react'
import { card } from './PhoneCard.module.css'

const PhoneCard = ({ children }) => (
  <section className={card}>{children}</section>
)

export default PhoneCard
