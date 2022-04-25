import * as React from 'react'
import { Helmet } from 'react-helmet'
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
const title = 'Contact Us | FixNcell | Westminster, CO'
const ContactPage = ({ location: { pathname } }) => (
  <Layout pageTitle={title} currentUrl={pathname}>
    <Helmet>
      <meta
        name="description"
        content="How to contact us here at FixNcell Phone Repair. Westminster, C0 80021. You can reach us by text, phone, email, or form submission."
      />
      <title>{title}</title>
    </Helmet>

    <div style={contactButtons}>
      <CallButton />
      <EmailButton />
    </div>
    <ContactForm />
  </Layout>
)

export default ContactPage
