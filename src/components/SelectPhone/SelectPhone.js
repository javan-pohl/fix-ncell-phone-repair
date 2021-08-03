import * as React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import PhoneCard from '../PhoneCard/PhoneCard'
import getImages from '../../queries/getSmallPhoneImgs/getSmallPhoneImgs'
// import getModels from '../../queries/getModels/getModels'
import getPhones from '../../queries/getPhones/getPhones'
// import getTemplate from '../../queries/getTemplate/getTemplate'
import { selectPhone, heading } from './SelectPhone.module.css'

function SelectPhone() {
  const phoneImages = getImages()
  const { nodes } = getPhones()
  // const {
  //   template: { name, link, pageURL },
  // } = getTemplate()
  const phones = nodes.map((phone) => {
    // console.log('phone: ', phone)
    const phoneName = `iphone-${phone.model.replace(' ', '-').toLowerCase()}`
    return (
      <Link to={phone.slug}>
        <PhoneCard
          key={phoneName}
          model={phone.model}
          img={phoneImages[`${phoneName}-small`]}
        />
      </Link>
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
