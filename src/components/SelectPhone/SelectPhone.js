import * as React from 'react'
import PropTypes from 'prop-types'
import PhoneCard from '../PhoneCard/PhoneCard'
import getImages from '../../queries/getSmallPhoneImgs/getSmallPhoneImgs'
import getModels from '../../queries/getModels/getModels'
import getTemplate from '../../queries/getTemplate/getTemplate'
import { selectPhone, heading } from './SelectPhone.module.css'

function SelectPhone() {
  const phoneImages = getImages()
  const { models } = getModels()
  const {
    template: { name, link, pageURL },
  } = getTemplate()
  const phones = models.map((phone) => {
    const phoneName = `iphone-${phone.model.replace(' ', '-').toLowerCase()}`
    return (
      <PhoneCard
        key={phoneName}
        model={phone.model}
        img={phoneImages[`${phoneName}-small`]}
      />
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
