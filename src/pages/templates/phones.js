import * as React from 'react'
import Layout from '../../components/Layout/Layout'
import getImages from '../../queries/getSmallPhoneImgs/getSmallPhoneImgs'
import errImg from '../../images/no_image.jpg'

// pageContext comes from gatsby.node.js
const PhonePage = ({
  pageContext: {
    phone: { make, model, image },
    location,
  },
}) => {
  const imageURL = getImages(image) || errImg
  const name = `${make} ${model}`
  return (
    <Layout pageTitle="Phone Page">
      <h1>
        {location}
        {' '}
        {name}
        {' '}
        Repairs
      </h1>
      <img src={imageURL} alt={name} />
    </Layout>
  )
}

export default PhonePage
