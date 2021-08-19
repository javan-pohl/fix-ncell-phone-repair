import * as React from 'react'
import PropTypes from 'prop-types'
import MyLink from '../MyLink/MyLink'
import PhoneCard from '../PhoneCard/PhoneCard'
import getImages from '../../queries/getSmallPhoneImgs/getSmallPhoneImgs'
import getPhones from '../../queries/getPhones/getPhones'
import { selectPhone, heading } from './SelectPhone.module.css'

function SelectPhone() {
  const phoneImages = getImages()
  const { nodes } = getPhones()
  const phones = nodes.map((phone) => {
    const phoneName = `iphone-${phone.model.replace(' ', '-').toLowerCase()}`
    return (
      <MyLink to={phone.slug} key={phoneName}>
        <PhoneCard
          model={phone.model}
          img={phoneImages[`${phoneName}-small`]}
        />
      </MyLink>
    )
  })
  return (
    <>
      <div className={heading}>Select Your Phone:</div>
      <section className={selectPhone}>{phones}</section>
    </>
  )
}

export default SelectPhone
