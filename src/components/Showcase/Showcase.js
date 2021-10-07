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

function Showcase() {
  return (
    <section className={showcaseMobileSection}>
      <div className={showcaseMobile}>
        <div className={showcaseMobileInner}>
          <span id={showcaseMobileHeader}>LET US COME TO YOU!</span>
          <p>FixNcell now comes to your location to fix your phone</p>
        </div>
        <Link to="/schedule-your-repair" className={showcaseMobileScheduleButton}>Schedule now</Link>
      </div>
      <ReviewBadges />

    </section>
  )
}

export default Showcase
