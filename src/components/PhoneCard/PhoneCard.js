import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { card } from './PhoneCard.module.css'

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

  return { name, link, pageURL }
}
const PhoneCard = ({ children }) => {
  // const PhoneCard = ({ model }) => {
  // console.log('model: ', model)
  console.log('children: ', children)
  const { name, link, pageURL } = getTemplate()
  return <section className={card}>{children}</section>
}

export default PhoneCard
