import * as React from 'react'
import {
  showcaseMobileSection,
  showcaseMobile,
  showcaseMobileInner,
  showcaseMobileHeader,
  showcaseMobileScheduleButton,
} from './Showcase.module.css'

function Showcase() {
  return (
    <section className={showcaseMobileSection}>
      <div className={showcaseMobile}>
        <div className={showcaseMobileInner}>
          <span id={showcaseMobileHeader}>LET US COME TO YOU!</span>
          <p>FixNcell now comes to your location to fix your phone</p>
        </div>
        <a
          href="https://www.fixncell.com/schedule-your-repair.html"
          className={showcaseMobileScheduleButton}
        >
          Schedule now
        </a>
      </div>
    </section>
  )
}

export default Showcase
