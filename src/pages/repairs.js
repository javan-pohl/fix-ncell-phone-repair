import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SelectPhone from '../components/SelectPhone/SelectPhone'
import AtDoorPhoto from '../images/javan_door_99.webp'
import {
  main,
  mainTagLine,
  pseudoBorder,
  scheduleButton,
} from './repairs.module.css'
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
  marginTop: '0px',
  paddingTop: '1px',
  paddingBottom: '25px',
}
function Repairs({
  location: { pathname },
  pageContext: { location = 'Denver/Boulder Metro', zipCodes },
}) {
  const PageTitle = `FixNcell iPhone Repair - ${location}`
  const MainText = () => (
    <div style={{ margin: '0 auto', padding: '0' }}>
      <p>
        <div className={mainTagLine}>"We Come To You!"</div>
        FixNcell is a mobile iPhone repair service that goes to the customer's
        location to fix the broken device. Select your iPhone model below to get your repair started.
      </p>
    </div>
  )
  const Services = () => (
    <div>
      <h2>
        Services at FixNcell in
        {' '}
        {location}
        {' '}
        Include:
      </h2>
      <p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>
            <span style={{ fontWeight: 'bold' }}>
              Phone Screen Replacement:
              {' '}
            </span>
            Whether you have cracked glass, a touchscreen that is not responding
            to touch in certain areas, or the LCD / OLED display is damaged and
            parts of the image are distorted or blank (or even if the screen is
            completely blank) - FixNcell
            {' '}
            {location}
            {' '}
            can replace your damaged
            phone screen and have your device back to working condition again.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>
              Charging / Lightning Port Repair:
              {' '}
            </span>
            Having trouble getting your phone to charge? With time, the charging
            ports on phones tend to wear out or get filled with debris. Easy as
            it may sound, it's best to leave issues like this to professionals
            like FixNcell iPhone technicians. If it feels like the charging
            cable isn't inserting into the phone like it should, of if the phone
            is dead and not turning on, give us a call. FixNcell
            {' '}
            {location}
            {' '}
            can
            repair or replace the lighting port in your iPhone.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Battery Replacement: </span>
            Is your iPhone not holding a charge like it used to? iPhone
            batteries typically need to be replaced every two years to maintain
            peak performance. Lithiom-ion batteries depreciate with age.
            Schedule your iPhone battery replacement at FixNcell
            {' '}
            {location}
            {' '}
            and
            have your phone back to the way it used to be.
          </li>
        </ul>
      </p>
    </div>
  )
  const metaDesc = `Information on our ${location} iPhone repairs and services, including cracked screen repair. Select your iPhone model to get your repair started.`
  return (
    <Layout pageTitle={PageTitle} currentUrl={pathname}>
      <Helmet>
        <meta name="description" content={metaDesc} />
        <title>{PageTitle}</title>
      </Helmet>
      <div style={backImg}>
        <span
          role="img"
          aria-label="a FixNcell workstation with an iPhone X that has been opened for a screen replacement"
        />
        <div data-sal="fade-in" data-sal-easing="ease" data-sal-duration="500">
          <h1 className={pseudoBorder}>{PageTitle}</h1>
          <div className={main}>
            {MainText()}
            <img
              src={AtDoorPhoto}
              alt="man wearing a shirt with a FixNcell logo at the door of a customer's house enthusiastically ready to fix a phone"
            />
          </div>
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
        <h2>
          {location}
          's Top-Rated iPhone Repair Service
        </h2>
        <p>
          We provide many services at FixNcell
          {' '}
          {location}
          , but
          {' '}
          <span style={{ fontWeight: 'bold' }}>
            we are renowned for our high-quality iPhone screen repair service
          </span>
          . We can replace your damaged iPhone screen typically in 20 minutes.
          Rest assured that your new screen will function like it should--our
          apple screen replacements are covered by a warranty!
        </p>
        <h3 style={{ textAlign: 'center', margin: '0px', padding: '0px' }}>
          {' '}
          {location}
          {' '}
          Mobile iPhone Repair Service
        </h3>
        <h4 style={{ textAlign: 'center', margin: '0px', padding: '0px' }}>
          "We Come To You"
        </h4>
        <p style={{ marginBottom: '5px' }}>
          No need to come to a store-front and wait for hours to get your cell
          phone repaired. If you live in the
          {' '}
          {location}
          {' '}
          vicinity, then we can
          come to your home, work, or even set up a random location to meet, in
          order to get your Apple mobile device fixed. The typical time to
          repair an iPhone screen takes 20 minutes. We'll have your broken phone
          fixed in no time!
        </p>
        <Link to="/schedule-your-repair" class={scheduleButton}>
          Click to Schedule Your iPhone Screen Repair
        </Link>

        {Services()}
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
