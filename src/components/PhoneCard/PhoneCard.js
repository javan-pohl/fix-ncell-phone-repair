import * as React from 'react'
import { Link } from 'gatsby'
import { card } from './PhoneCard.module.css'

const PhoneCard = ({ model, img }) => {
  console.log('model: ', model)
  console.log('img', img)

  return (
    <div className={card}>
      <img src={img} />
      <h3>{`iPhone ${model}`}</h3>
    </div>
  )
}

export default PhoneCard
