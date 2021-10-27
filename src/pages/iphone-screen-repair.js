import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout/Layout'

const iPhoneScreenRepair = ({ location: { pathname } }) => {
  const title = 'FixNcell iPhone Screen Repairs'
  return (
    <Layout pageTitle={title} currentUrl={pathname}>
      <Helmet>
        <meta name="description" content="Information on the different types of broken iPhone screen issues that the process for getting an iPhone screen fixed through FixNcell." />
        <title>{title}</title>
      </Helmet>
      <div>
        <h1>iPhone Screen Repair</h1>
      </div>
    </Layout>
  )
}

export default iPhoneScreenRepair
