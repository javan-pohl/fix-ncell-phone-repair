import * as React from 'react'
import Layout from '../components/Layout/Layout'

const SchedulePage = () => (
  <Layout pageTitle="Schedule Your iPhone Repair">
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
