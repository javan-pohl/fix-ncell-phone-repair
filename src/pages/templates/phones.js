import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout/Layout'

const PhonePage = ({ pageContext }) => {
  console.log('data: ', pageContext)
  return (
    <Layout pageTitle="Phone Page">
      <h2>This is my default phone page</h2>
      <h3>
        {pageContext.phone.make}
        {' '}
        {pageContext.phone.model}
      </h3>
    </Layout>
  )
}

export default PhonePage
