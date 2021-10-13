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
  return (
    <section
      className={showcaseMobileSection}
    >
      <div className={showcaseMobile}>
        <div className={showcaseMobileInner}>
          <span id={showcaseMobileHeader}>LET US COME TO YOU!</span>
          <p>FixNcell now comes to your location to fix your phone</p>
        </div>
        <Link
          to="/schedule-your-repair"
          className={showcaseMobileScheduleButton}
        >
          Schedule now
        </Link>
      </div>
      <ReviewBadges />
    </section>
  )
}

export default Showcase
