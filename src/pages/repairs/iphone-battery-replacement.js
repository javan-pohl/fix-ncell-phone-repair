import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout/Layout'

const iPhoneBattery = ({ location: { pathname } }) => {
  const title = 'FixNcell iPhone Battery Replacement'

  return (
    <Layout pageTitle={title} currentUrl={pathname}>
      <Helmet>
        <meta
          name="description"
          content="Information getting an iPhone battery replaced through FixNcell."
        />
        <title>{title}</title>
      </Helmet>
      <h1>{title}</h1>
      <p>More information coming soon</p>
    </Layout>
  )
}
export default iPhoneBattery
