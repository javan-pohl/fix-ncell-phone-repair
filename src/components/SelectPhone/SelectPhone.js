import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PhoneCard from '../PhoneCard/PhoneCard'
// import SelectPhoneImg from '../SelectPhoneImg/SelectPhoneImg'
import getImages from '../../queries/getSmallPhoneImgs/getSmallPhoneImgs'

function getTemplate() {
  const data = useStaticQuery(graphql`
    query MyQuery{
      site {
        siteMetadata {
          phoneTemplate {
            name
            link
            pageURL
          }
          phones {
            model
          }
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: {
        phoneTemplate: { name, link, pageURL },
      },
    },
  } = data

  const {
    site: {
      siteMetadata: { phones: model },
    },
  } = data

  return { template: { name, link, pageURL }, model }
}

function SelectPhone() {
  // const { name, link, pageURL } = getTemplate()
  const phoneImages = getImages()
  console.log('phoneImages: ', phoneImages)
  const { template, model } = getTemplate()
  console.log('model: ', model)
  const phones = model.map((phone) => {
    const phoneName = `iphone-${phone.model.replace(' ', '-').toLowerCase()}`
    return (
      <PhoneCard phoneName={phoneName} key={phoneName} img={phoneImages[`${phoneName}-small`]} />

    )
  })
  // const phones = model.map((phone) => <PhoneCard model={phone.model} />)
  return phones
}

export default SelectPhone
