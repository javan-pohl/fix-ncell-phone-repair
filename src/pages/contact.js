import * as React from 'react'
import Layout from '../components/Layout/Layout'
import CallButton from '../components/ContactPageButtons/CallButton'
import EmailButton from '../components/ContactPageButtons/EmailButton'

const contactButtons = {
  display: 'flex',
  justifyContent: 'center',
  margin: 'auto',
	width: '50%'
}

const ContactPage = () => {
  return (
    <Layout pageTitle='Contact Us'>
      <div style={contactButtons}>
        <CallButton />
        <EmailButton />
      </div>
    </Layout>
  )
}

export default ContactPage
