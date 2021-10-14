import * as React from 'react'
import { Link } from 'gatsby'
import {
  showcaseMobileSection,
  showcaseMobile,
  showcaseMobileInner,
  showcaseMobileHeader,
  showcaseMobileScheduleButton,
} from './Showcase.module.css'
import MyLink from '../MyLink/MyLink'
import ReviewBadges from '../Badges/ReviewBadges'
import calendar from '../../images/calendar_transp.png'
import phone from '../../images/phone.png'
import getNum from '../../queries/getNum/getNum'

const BackImg = {
  margin: '0px',
  display: 'inlineBlock',
  paddingTop: '0px',
  background: `url(\'https://www.fixncell.com/img/mobile_iphone_screen_repair_bw.jpg\')
	noRepeat 0 -70px'`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  height: '300px',
  width: '100%',
  textAlign: 'center,',
}

function Showcase() {
  const num = getNum()
  return (
    <section className={showcaseMobileSection}>
      <div className={showcaseMobile}>
        <div className={showcaseMobileInner}>
          <span id={showcaseMobileHeader}>LET US COME TO YOU!</span>
          <p>FixNcell now comes to your location to fix your phone</p>
        </div>
        <Link
          to="/schedule-your-repair"
          className={showcaseMobileScheduleButton}
          data-sal="fade"
          data-sal-duration="1000"
        >
          <img src={calendar} style={{ height: '15px', verticalAlign: '-6.5%', horizontalAlign: '5%' }} />
          {' '}
          Book Appointment
        </Link>
        <br />
        <a
          style={{
            display: 'inline-block', marginTop: '10px', padding: '1px 9px 3px 3px',
          }}
          className={showcaseMobileScheduleButton}
          href={`tel:${num}`}
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="500"
        >
          <img src={phone} style={{ height: '18px', verticalAlign: '-10%' }} />
          {' '}
          <span style={{ paddingLeft: '5px' }}>Call Us For Quote</span>
        </a>
      </div>
      <ReviewBadges />
    </section>
  )
}

export default Showcase
