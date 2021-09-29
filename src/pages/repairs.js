import * as React from 'react'
import Layout from '../components/Layout/Layout'
import SelectPhone from '../components/SelectPhone/SelectPhone'
/* eslint-disable react/prop-types */

const content = {
  width: '75%',
  margin: 'auto',
}

const header = {
  textAlign: 'center',
}
const IndexPage = ({
  location: { pathname },
  pageContext: { location, zipCodes },
}) => (
  <Layout pageTitle={`${location} Phone Repairs`} currentUrl={pathname}>
    <h1>
      {location}
      {' '}
      iPhone Repairs
    </h1>
    <SelectPhone url={pathname} />
    <div style={content}>
      <h2 style={header}>
        FixNcell iPhone Repairs -
        {' '}
        {location}
      </h2>
      <p>
        If you live in the
        {' '}
        {location}
        {' '}
        area and need to get an iPhone screen
        fixed, you've come to the right place. FixNcell is a mobile iPhone
        repair service that will come to your location in
        {' '}
        {location}
        {' '}
        to fix your
        phone. However, you may remember us from our store location on 100th and
        Wadsworth in Westminster where we opened in 2015.
      </p>
      <h3 style={header}>
        {' '}
        {location}
        {' '}
        Mobile iPhone Repairs - "We Come To You"
      </h3>
      <p>
        No need to come to a store-front and wait for hours to get your cell
        phone repaired. If you live in the
        {' '}
        {location}
        {' '}
        vicinity, then we can come
        to your home, work, or even set up a random location to meet, in order
        to get your Apple mobile device fixed.
      </p>
      <h3 style={header}>
        How Much Does it Cost to get an iPhone Repaired in
        {' '}
        {location}
        ?
      </h3>
      <p>
        The price of a repair on an iPhone in the
        {' '}
        {location}
        {' '}
        area varies by type
        of iPhone and what repair you need. Please select your iPhone model from
        the list above to see the pricing information for the most common iPhone
        repairs. Our prices are continuously updated. One thing to keep in mind
        about screen replacements on an iPhone--they are more expensive the
        newer the phone is. After about two years, prices for fixing a cracked
        screen, for example, tend to level out. If you don't see the price for
        the type of repair you need, please give us a call or send us a text.
      </p>
      <h3 style={header}>
        Some of the Zip Codes We Service in
        {' '}
        {location}
      </h3>
      <p>{typeof zipCodes !== 'undefined' && Object.keys(zipCodes).map((key) => ` ${zipCodes[key]} `)}</p>
    </div>
  </Layout>
)

export default IndexPage
