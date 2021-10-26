import * as React from 'react'
import Layout from '../components/Layout/Layout'
import MyMap from '../components/MyMap/MyMap'
import phone from '../images/iphone-8-plus-repair-int-b&w.webp'
import insidePhone from '../images/inside_phone_horz.webp'
import headshot from '../images/javan_headshot.webp'
import {
  fadeText,
  mainText,
  meetTeam,
  reviews,
  reviewBadge,
  reviewBadges,
  facebook,
  google,
  teamText,
  teamBlock,
} from './about.module.css'
import ReviewBadges from '../components/Badges/ReviewBadges'

/* eslint-disable react/prop-types */

const backImg = (img, isFlex = true, opac = 0.9, col = '0, 152, 255') => {
  const myDisplay = isFlex ? 'flex' : ''
  return {
    display: 'relative',
    height: '400px',
    color: 'white',
    display: myDisplay,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(rgb(${col},${opac}),
	rgb(${col},${opac - 0.05})), url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    padding: '1px',
    marginBottom: '0px',
  }
}

const aboutHeading = {
  margin: '5vw 0',
  padding: '1vw 2vw',
  lineHeight: '10vw',
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: '6vw',
  backgroundColor: 'rgba(0,0,0,.5)',
  border: '2px solid white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'nowrap',
}
const AboutPage = ({ location: { pathname } }) => (
  <Layout pageTitle="About Us" currentUrl={pathname}>
    <section>
      <div style={backImg(phone, true, 0.7, '0,0,0')}>
        <span
          role="img"
          aria-label="interior shot of an iPhone 8 Plus that is opened and with a new screen installed"
        />
        <div style={aboutHeading} className={fadeText}>
          <h3>
            Committed to Quality
            <br />
            and Convenience
          </h3>
        </div>
      </div>
      <div className={mainText}>
        <h1>About Us</h1>
        <p>
          FixNcell started in 2014 as a store-front cell phone repair business
          in Westminster, CO. In 2020, right before the pandemic started, we
          made the decision to switch from a store-based provider to a
          mobile-based service--where we would go to the customer's location to
          perform our cell phone repairs. We also made the decision at that
          point to focus primarily on working on Apple iPhones (this is due to
          the difficulty in repairing other types of phones, which may require
          heat and adhesive.) We may revise our stance on that in the future.
        </p>
        <h2>Our Mission</h2>
        <p>
          We have two primary goals here at Fix N Cell and those are to make
          sure the customer has a repair experience that is performed with 1)
          quality craftsmanship and 2) in convenient fashion. Getting your phone
          repaired should be a hassle-free experience and it should work just
          like it did before it was damaged. We make take great care to ensure
          that your phone repair experience is as smooth painless as can be.
        </p>
        <h2>Highly Rated</h2>
        <div className={reviews}>
          <p>
            Unlike many other cell phone repair stores in the area, we do not
            cherry-pick our reviews to display on the website. We pride
            ourselves in giving our customer's quality service and go the extra
            mile to earn our high reviews. Part of the way in which we do this
            is by providing an excellent warranty on our iPhone screen repairs.
            If you're having issues with your new screen, and it does not show
            signs of physical damage, we will replace it for you, free of
            charge.
          </p>
          <div className={reviewBadges}>
            <div className={reviewBadge}>
              <img src="https://embedsocial.com/api/source_image_badges/badge-4-f/en/facebook/90654" />
              <iframe
                src="https://embedsocial.com/api/reviews_source_badges/badge-5-f/en/facebook/90654"
                scrolling="no"
                className={facebook}
              />
            </div>
            <div className={reviewBadge}>
              <img src="https://embedsocial.com/api/source_image_badges/badge-4-g/en/google/32472" />
              <iframe
                src="https://embedsocial.com/api/reviews_source_badges/badge-6-g/en/google/32472"
                scrolling="no"
                className={google}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={meetTeam}>
      <div style={backImg(insidePhone, false)}>
        <h2>Meet the Team</h2>
        <div className={teamBlock}>
          <div className={teamText}>
            <h3>Javan Pohl - Founder</h3>
            <p>Phone Wizard. Pun Master.</p>
          </div>
          <img src={headshot} />
        </div>
      </div>
    </section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391717.9312559606!2d-105.2316076770447!3d39.91238408742604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b896704be9a01%3A0xd964abf21c39a1f6!2sFixNcell%20iPhone%20Repair!5e0!3m2!1sen!2sus!4v1634255052913!5m2!1sen!2sus"
      width="100%"
      height="400"
      style={{
        border: '0',
        margin: 'auto',
        display: 'block',
      }}
      allowFullScreen=""
      loading="lazy"
    />
  </Layout>
)

export default AboutPage
