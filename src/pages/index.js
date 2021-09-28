import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Showcase from '../components/Showcase/Showcase'
import SelectLocation from '../components/SelectLocation/SelectLocation'

/* eslint-disable react/prop-types */

const IndexPage = ({ location: { pathname } }) => (
  <Layout pageTitle="FixNcell Phone Repair Home Page" currentUrl={pathname}>
    <Showcase />
    <SelectLocation />
    <p>Test paragraph</p>
  </Layout>
)

export default IndexPage
