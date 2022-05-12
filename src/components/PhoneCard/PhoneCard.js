import * as React from 'react'
import { card } from './PhoneCard.module.css'

const PhoneCard = ({ model, img, myKey }) => {
  const name = `iPhone ${model}`
  return (
    <div className={card} key={myKey} data-sal="slide-up" data-sal-easing="ease">
      <img src={img} alt={name} />
      <h3>{`iPhone ${model}`}</h3>
    </div>
  )
}

export default PhoneCard
