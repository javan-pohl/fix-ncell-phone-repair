import * as React from 'react'
import Layout from '../components/Layout/Layout'
import MyMap from '../components/MyMap/MyMap'
/* eslint-disable react/prop-types */

const AboutPage = ({ location: { pathname } }) => (
  <Layout pageTitle="About Us" currentUrl={pathname}>
    <p>About us</p>
    <MyMap />
  </Layout>
)

export default AboutPage
