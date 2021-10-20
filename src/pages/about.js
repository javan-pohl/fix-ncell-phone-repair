import * as React from 'react'
import Layout from '../components/Layout/Layout'
import MyMap from '../components/MyMap/MyMap'
/* eslint-disable react/prop-types */

const AboutPage = ({ location: { pathname } }) => (
  <Layout pageTitle="About Us" currentUrl={pathname}>
    <p>About us</p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391717.9312559606!2d-105.2316076770447!3d39.91238408742604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b896704be9a01%3A0xd964abf21c39a1f6!2sFixNcell%20iPhone%20Repair!5e0!3m2!1sen!2sus!4v1634255052913!5m2!1sen!2sus"
      width="100%"
      height="450"
      style={{
        border: '0', maxWidth: '600px', margin: 'auto', display: 'block',
      }}
      allowFullScreen=""
      loading="lazy"
    />
  </Layout>
)

export default AboutPage
