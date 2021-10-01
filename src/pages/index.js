import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Showcase from '../components/Showcase/Showcase'
import SelectLocation from '../components/SelectLocation/SelectLocation'
import useScript from '../hooks/useScript'
import EmbedSocialWidget from '../components/EmbedSocialWidget/EmbedSocialWidget'

/* eslint-disable react/prop-types */

const IndexPage = ({ location: { pathname } }) =>
  // useScript('https://reviewsonmywebsite.com/js/embedLoader.js?id=cb477ad3a93eb5d679f0')
  (
    <Layout pageTitle="FixNcell Phone Repair Home Page" currentUrl={pathname}>
      <Showcase />
      <SelectLocation />
      <p>Test paragraph</p>

      <div>
        <EmbedSocialWidget refId="290bdda409a96a5c382887408438f18ddeabb3ab" />
      </div>
    </Layout>
  )

export default IndexPage
