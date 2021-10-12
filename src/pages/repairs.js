import * as React from 'react'
import Layout from '../components/Layout/Layout'
import SelectPhone from '../components/SelectPhone/SelectPhone'
import AtDoorPhoto from '../images/javan_door_99.webp'
import { main } from './repairs.module.css'
/* eslint-disable react/prop-types */
const main2 = {
  display: 'flex',
  width: '75%',
  margin: '35px auto',
}
const content = {
  margin: 'auto',
}

const header = {
  textAlign: 'center',
}

const backImg = {
  color: 'white',
  backgroundImage: `linear-gradient(rgb(0,152,255,0.90),
	rgb(0,152,255,0.85)), url(https://www.fixncell.com/img/inside_phone_horz.webp)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  padding: '1px',
  paddingBottom: '25px',
}
function Repairs({
  location: { pathname },
  pageContext: { location = 'Denver/Boulder Metro', zipCodes },
}) {
  const PageTitle = `FixNcell iPhone Repair - ${location}`
  const MainText = () => (
    <p>
      FixNcell is a mobile iPhone repair service. We go to the customer to fix
      their phone; however, we do the repair in our vehicle and typically do not
      need the passcode, so your information is safe with us. We've been in
      business 7 years, use high quality parts, and have long enjoyed some of
      the highest customer satisfaction ratings of any cell phone repair
      business in the
      {' '}
      {location}
      {' '}
      area.
    </p>
  )
  return (
    <Layout pageTitle={PageTitle} currentUrl={pathname}>
      <div style={backImg}>
        <h1 className="pseudo_border">{PageTitle}</h1>
        <div className={main}>
          {MainText()}
          <img src={AtDoorPhoto} alt="man wearing a shirt with a FixNcell logo at the door of a customer's house enthusiastically ready to fix a phone" />
        </div>
      </div>
      <SelectPhone url={pathname} />
      <div style={content}>
        <h1 style={header}>{PageTitle}</h1>
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
          to fix
          your phone. However, you may remember us from our store location on
          100th and Wadsworth in Westminster where we opened in 2015.
        </p>
        <h3 style={header}>
          {' '}
          {location}
          {' '}
          Mobile iPhone Repair Service - "We Come To You"
        </h3>
        <p>
          No need to come to a store-front and wait for hours to get your cell
          phone repaired. If you live in the
          {' '}
          {location}
          {' '}
          vicinity, then we can
          come to your home, work, or even set up a random location to meet, in
          order to get your Apple mobile device fixed.
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
          area varies by
          type of iPhone and what repair you need. Please select your iPhone
          model from the list above to see the pricing information for the most
          common iPhone repairs. Our prices are continuously updated. One thing
          to keep in mind about screen replacements on an iPhone--they are more
          expensive the newer the phone is. After about two years, prices for
          fixing a cracked screen, for example, tend to level out. If you don't
          see the price for the type of repair you need, please give us a call
          or send us a text.
        </p>
        {typeof zipCodes !== 'undefined' && (
          <>
            <h3 style={header}>
              Some of the Zip Codes We Service in
              {' '}
              {location}
            </h3>
            <p>{Object.keys(zipCodes).map((key) => ` ${zipCodes[key]} `)}</p>
          </>
        )}
      </div>
    </Layout>
  )
}
Repairs.defaultProps = {
  pageContext: {
    location: 'Denver/Boulder Metro',
  },
}
export default Repairs
