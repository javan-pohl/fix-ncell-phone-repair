import * as React from 'react'
import Layout from '../components/Layout/Layout'
import SelectPhone from '../components/SelectPhone/SelectPhone'
/* eslint-disable react/prop-types */

const IndexPage = ({ location: { pathname } }) => (
  <Layout pageTitle="About Us" currentUrl={pathname}>
    <SelectPhone />
  </Layout>
)

export default IndexPage
