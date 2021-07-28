import * as React from 'react'
import Layout from '../components/Layout/Layout'
/* eslint-disable react/prop-types */

const AboutPage = ({ location: { pathname } }) => (
  <Layout pageTitle="About Us" currentUrl={pathname}>
    <p>About us</p>
  </Layout>
)

export default AboutPage
