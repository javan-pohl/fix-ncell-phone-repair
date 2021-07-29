import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { card } from './PhoneCard.module.css'
import SelectPhoneImg from '../SelectPhoneImg/SelectPhoneImg'

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
  // const PhoneCard = ({ model }) => { // console.log('model: ', model)
  console.log('children: ', children)
  const { name, link, pageURL } = getTemplate() // return <section className={card}>{children}</section>
  const path = '../../iphone-6-small.jpg'
  const obj = {
    'iphone-6-small.jpg':
      '/static/7afa24436d6df59d083439fe5e6a99ee/iphone-6-small.jpg',
  }
  return (
    <section className={card}>
      {/* <img src="/static/7afa24436d6df59d083439fe5e6a99ee/iphone-6-small.jpg" /> */}
      <img src={obj['iphone-6-small.jpg']} />
    </section>
  )
  // return (
  //   <section className={card}>
  //     <SelectPhoneImg model={children} />
  //   </section>
  // )
}

export default PhoneCard
