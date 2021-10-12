import * as React from 'react'
import PropTypes from 'prop-types'
import MyLink from '../MyLink/MyLink'
import PhoneCard from '../PhoneCard/PhoneCard'
import getImages from '../../queries/getSmallPhoneImgs/getSmallPhoneImgs'
import getPhones from '../../queries/getPhones/getPhones'
import { selectPhone, heading, info } from './SelectPhone.module.css'

function SelectPhone({ url }) {
  const phoneImages = getImages()
  const { nodes } = getPhones()
  const phones = nodes.map((phone, index) => {
    const phoneName = `iphone-${phone.model.replace(' ', '-').toLowerCase()}`
    return (
      <MyLink url={url} to={phone.slug} key={phoneName}>
        <PhoneCard
          model={phone.model}
          img={phoneImages[`${phoneName}-small`]}
          key={index}
        />
      </MyLink>
    )
  })
  return (
    <div data-sal="slide-up" data-sal-easing="ease">
      <div className={heading}>Select Your Phone:</div>
      <section className={selectPhone}>{phones}</section>
    </div>
  )
}

export default SelectPhone
