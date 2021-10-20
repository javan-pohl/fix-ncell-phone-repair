import * as React from 'react'
import Layout from '../components/Layout/Layout'
import CallButton from '../components/ContactPageButtons/CallButton'
import EmailButton from '../components/ContactPageButtons/EmailButton'
import ContactForm from '../components/ContactForm/ContactForm'
/* eslint-disable react/prop-types */

const contactButtons = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: 'auto',
  paddingTop: '5%',
  width: '100%',
}

const ContactPage = ({ location: { pathname } }) => (
  <Layout pageTitle="Contact Us" currentUrl={pathname}>
    <div style={contactButtons}>
      <CallButton />
      <EmailButton />
    </div>
    <ContactForm />
  </Layout>
)

export default ContactPage
