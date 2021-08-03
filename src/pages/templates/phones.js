import * as React from 'react'
import Layout from '../../components/Layout/Layout'
import getImages from '../../queries/getSmallPhoneImgs/getSmallPhoneImgs'

const PhonePage = ({
  pageContext: {
    phone: { make, model, image },
  },
}) => {
  let imageURL = getImages(image)
  console.log('image: ', image)
  console.log('data: ', imageURL)
  if (!imageURL) {
    imageURL = '/static/cd25e3d6325109330ef342c482ef71a9/iphone-6-plus-small.jpg'
  }
  return (
    <Layout pageTitle="Phone Page">
      <h2>This is my default phone page</h2>
      <h3>
        {make}
        {' '}
        {model}
      </h3>
      <img src={imageURL} />
    </Layout>
  )
}

export default PhonePage
