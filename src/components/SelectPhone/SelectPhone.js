import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PhoneCard from '../PhoneCard/PhoneCard'

function getTemplate() {
  const data = useStaticQuery(graphql`
    query {
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
  const { template, model } = getTemplate()
  console.log('model', model)
  const phones = model.map((phone) => {
    console.log('phone.model: ', phone.model)
    return <PhoneCard>{phone.model}</PhoneCard>
  })
  console.log('phones', phones)
  // console.log('phone: ', name, link, pageURL)
  console.log('template: ', template, model)
  // return <PhoneCard>this</PhoneCard>
  return phones
}

export default SelectPhone
