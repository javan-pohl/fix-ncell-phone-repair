import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PhoneCard from '../PhoneCard/PhoneCard'
// import SelectPhoneImg from '../SelectPhoneImg/SelectPhoneImg'
import getImages from '../../queries/getSmallPhoneImgs/getSmallPhoneImgs'
import getModels from '../../queries/getModels/getModels'

function SelectPhone() {
  // const { name, link, pageURL } = getModel()
  const phoneImages = getImages()
  // console.log('phoneImages: ', phoneImages)
  const { models } = getModels()
  // console.log('template: ', template)
  console.log('model: ', models)
  const phones = models.map((phone) => {
    const phoneName = `iphone-${phone.model.replace(' ', '-').toLowerCase()}`
    return (
      <PhoneCard key={phoneName} model={phone.model} img={phoneImages[`${phoneName}-small`]} />

    )
  })
  // const phones = model.map((phone) => <PhoneCard model={phone.model} />)
  return phones
}

export default SelectPhone
