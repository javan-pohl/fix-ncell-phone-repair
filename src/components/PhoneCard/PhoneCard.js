import * as React from 'react'
import { Link } from 'gatsby'
import { card } from './PhoneCard.module.css'

const PhoneCard = ({ model, img }) => {
  const name = `iPhone ${model}`
  return (
    <div className={card}>
      <img src={img} alt={name} />
      <h3>{`iPhone ${model}`}</h3>
    </div>
  )
}

export default PhoneCard
