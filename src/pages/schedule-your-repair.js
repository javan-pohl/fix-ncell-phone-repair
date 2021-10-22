import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout/Layout'

const title = 'Schedule Your iPhone Repair'
const SchedulePage = () => (
  <Layout pageTitle={title}>
    <Helmet>
      <meta
        name="description"
        content="Schedule your iPhone repair appointment by selecting your device model and the service you require. A technician will come to your address to fix your phone."
      />
      <title>{title}</title>
    </Helmet>
    <h1>Schedule Your iPhone Repair</h1>
    <iframe
      src="https://app.acuityscheduling.com/schedule.php?owner=11997785"
      title="Schedule Appointment"
      width="100%"
      height="800"
      frameBorder="0"
    />
    <script
      src="https://embed.acuityscheduling.com/js/embed.js"
      type="text/javascript"
    />
  </Layout>
)

export default SchedulePage
