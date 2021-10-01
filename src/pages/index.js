import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Showcase from '../components/Showcase/Showcase'
import SelectLocation from '../components/SelectLocation/SelectLocation'
import useScript from '../hooks/useScript'

/* eslint-disable react/prop-types */

const IndexPage = ({ location: { pathname } }) => {
  useScript('https://reviewsonmywebsite.com/js/embedLoader.js?id=cb477ad3a93eb5d679f0')
  return (
    <Layout pageTitle="FixNcell Phone Repair Home Page" currentUrl={pathname}>
      <Showcase />
      <SelectLocation />
      <p>Test paragraph</p>
      <div
        data-token="t6Oio5DNjj3udVGPHeuzdMKTc0wPM7wU6FuGZlB8aeTB9RoYjv"
        className="romw-reviews"
      />

    </Layout>
  )
}

export default IndexPage
