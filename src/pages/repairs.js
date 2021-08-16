import * as React from 'react'
import Layout from '../components/Layout/Layout'
import SelectPhone from '../components/SelectPhone/SelectPhone'
/* eslint-disable react/prop-types */

const IndexPage = ({ location: { pathname }, pageContext: { location } }) => (
  <Layout pageTitle="About Us" currentUrl={pathname}>
    <h1>
      {location}
      {' '}
      iPhone Repairs
    </h1>
    <SelectPhone />
  </Layout>
)

export default IndexPage
