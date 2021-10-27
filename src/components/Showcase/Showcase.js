import * as React from 'react'
import { Link } from 'gatsby'
import {
  backImg,
  showcaseMobileSection,
  showcaseMobile,
  showcaseMobileInner,
  showcaseMobileHeader,
  showcaseMobileScheduleButton,
} from './Showcase.module.css'
import ReviewBadges from '../Badges/ReviewBadges'
import background from '../../images/mobile_iphone_screen_repair_bw.webp'
import backgroundLg from '../../images/mobile_iphone_screen_repair_bw_lg.webp'
import calendar from '../../images/calendar_transp.png'
import phone from '../../images/phone.png'
import getNum from '../../queries/getNum/getNum'
import useWindowSize from '../../hooks/useWindowSize'

const BackImg = () => ({
  padding: '1px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: myHeight,
  width: '100%',
})
const BackImg2 = (img) => {
  const { width } = useWindowSize()
  const myImg = width < 440 ? background : backgroundLg
  const myPos = width < 440 ? '-490px' : '0'
  return {
    backgroundImage: ` url(${myImg})`,
    backgroundPosition: `0 ${myPos}`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '1px',
    width: '100%',
  }
}

function Showcase() {
  const num = getNum()
  return (
    // <section className={showcaseMobileSection}>
    <section style={BackImg2(background)}>
      <span
        role="img"
        aria-label="FixNcell technician Javan Pohl doing an iPhone repair in the driver's seat of a car"
      />
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
          <img
            src={calendar}
            alt="calendar icon"
            style={{
              height: '15px',
              verticalAlign: '-6.5%',
              horizontalAlign: '5%',
            }}
          />
          {' '}
          Book Appointment
        </Link>
        <br />
        <a
          style={{
            display: 'inline-block',
            marginTop: '10px',
            padding: '1px 9px 3px 3px',
          }}
          className={showcaseMobileScheduleButton}
          href={`tel:${num}`}
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="200"
        >
          <img
            src={phone}
            alt="phone icon"
            style={{ height: '18px', verticalAlign: '-10%' }}
          />
          {' '}
          <span style={{ paddingLeft: '5px' }}>Call Us For Quote</span>
        </a>
      </div>
      <ReviewBadges />
    </section>
  )
}

export default Showcase
