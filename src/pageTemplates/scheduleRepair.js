import * as React from 'react'
import Layout from '../components/Layout/Layout'

const ScheduleRepair = ({
  pageContext: {
    phone: { make, model, screenScheduleID },
    location = 'Denver/Boulder Metro',
  },
}) => (
  <Layout
    pageTitle={`Schedule Your ${make} ${model} Screen Repair - ${location}`}
  >
    <h1>
      Schedule Your
      {' '}
      {make}
      {' '}
      {model}
      {' '}
      Screen Repair -
      {' '}
      {location}
    </h1>
    <iframe
      src={`https://app.acuityscheduling.com/schedule.php?owner=11997785&appointmentType=${screenScheduleID}`}
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

export default ScheduleRepair
