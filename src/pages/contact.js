import * as React from 'react'
import Layout from '../components/Layout/Layout'
import CallButton from '../components/ContactPageButtons/CallButton'
import EmailButton from '../components/ContactPageButtons/EmailButton'

const contactButtons = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: 'auto',
  width: '100%',
}

const ContactPage = () => (
  <Layout pageTitle="Contact Us">
    <div style={contactButtons}>
      <CallButton />
      <EmailButton />
    </div>
  </Layout>
)

export default ContactPage
