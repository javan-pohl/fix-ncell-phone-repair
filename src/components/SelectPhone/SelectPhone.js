import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

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

  console.log('data: ', data)

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
  // console.log('phone: ', name, link, pageURL)
  console.log('template: ', template, model)
  return <div>Select Phone</div>
}

export default SelectPhone
