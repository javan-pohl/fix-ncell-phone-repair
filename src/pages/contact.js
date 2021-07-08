import * as React from 'react'
import Layout from '../components/Layout/Layout'
import CallButton from '../components/ContactPageButtons/CallButton'
import EmailButton from '../components/ContactPageButtons/EmailButton'
/* eslint-disable react/prop-types */

const contactButtons = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: 'auto',
  width: '100%',
}

function ContactPage({ location: { pathname } }) {
  return (
    <Layout pageTitle="Contact Us" currentUrl={pathname}>
      <div style={contactButtons}>
        <CallButton />
        <EmailButton />
      </div>
    </Layout>
  )
}

export default ContactPage
