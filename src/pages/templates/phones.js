import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout/Layout'

const PhonePage = ({ data }) => {
  console.log('data: ', data)
  return (
    <Layout pageTitle="Phone Page">
      <h2>This is my default phone page</h2>
      <h3>
        {data.phonesJson.make}
        {' '}
        {data.phonesJson.model}
      </h3>
    </Layout>
  )
}

export const query = graphql`
  query phoneQuery($id: String) {
    phonesJson(id: { eq: $id }) {
      make
      model
    }
  }
`

export default PhonePage
