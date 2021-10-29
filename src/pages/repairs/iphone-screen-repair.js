import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import useWindowSize from '../../hooks/useWindowSize'
import phoneRepairSm from '../../images/iphone_screen_repair_439_b&w.webp'
import {
  darkBackground,
  sideBySide,
  fadeText,
} from './iphone-screen-repair.module.css'
import insidePhone from '../../images/inside_phone_horz.webp'
import iphoneXS from '../../images/iphone-xs-screen-replacement.webp'
import EmbedSocialWidget from '../../components/EmbedSocialWidget/EmbedSocialWidget'

const blueBackImg = (img, opac = 0.9, col = '0, 152, 255') => ({
  float: 'left',
  fontSize: '20px',
  color: 'white',
  backgroundImage: `linear-gradient(rgb(${col},${opac}),
	rgb(${col},${opac - 0.05})), url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  padding: '1px',
})

const mainBackImg = (
  img,

  opac = 0.9,
  col = '0, 152, 255',
) => ({
  display: 'relative',
  height: '400px',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `linear-gradient(rgb(${col},${opac}),
	rgb(${col},${opac - 0.05})), url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  backgroundPosition: 'center',
  padding: '1px',
  marginBottom: '0px',
})
const backImg = (
  img,
  mobileHeight = true,
  isFlex = true,
  opac = 0.9,
  col = '0, 152, 255',
) => {
  const { height, width } = useWindowSize()
  const myHeight = width < 961 && mobileHeight ? '700px' : '400px'
  const myDisplay = isFlex && mobileHeight ? 'flex' : ''
  return {
    display: 'relative',
    height: myHeight,
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
  maxHeight: '350px',
  margin: '5vw 0',
  padding: '1vw 2vw',
  lineHeight: '10vw',
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: '6vw',
  backgroundColor: 'rgba(0,0,0,.8)',
  border: '2px solid white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'nowrap',
}
const iPhoneScreenRepair = ({ location: { pathname } }) => {
  const title = 'FixNcell iPhone Screen Repairs'

  return (
    <Layout pageTitle={title} currentUrl={pathname}>
      <Helmet>
        <meta
          name="description"
          content="Information on the different types of broken iPhone screen issues that the process for getting an iPhone screen fixed through FixNcell."
        />
        <title>{title}</title>
      </Helmet>
      <div style={mainBackImg(phoneRepairSm, 0.6, '0,0,0')}>
        <span
          role="img"
          aria-label="An iPhone X that is in the process of having its screen replaced. The phone is open and the various tools used in the repair are located on the table next to it."
        />
        <div style={aboutHeading} className={fadeText}>
          <h3>
            We'll Come To You
            <br />
            To Fix Your iPhone Screen
          </h3>
        </div>
      </div>
      <div>
        <div
          className={sideBySide}
          data-sal="slide-up"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <div style={blueBackImg(insidePhone)}>
            <h1 className="pseudo_border">iPhone Screen Repair</h1>
            <p className={darkBackground}>
              We are a mobile iPhone Repair service that goes to the customer's
              location to fix their phone. With certified technicians,
              hi-quality parts, thousands of happy customers, you can trust
              FixNcell to fix your broken iPhone screen.
            </p>
          </div>
          <div>
            <img src={iphoneXS} />
          </div>
        </div>
        <div>
          <EmbedSocialWidget refId="e35bba2e39f8fa0f19ee05532fb6c8816178ae55" />
        </div>
        <h2>The Screen Repair Process</h2>
        <ol>
          <li>Schedule Your Repair</li>
          <p>
            You can book your iPhone Screen repair through the website
            {' '}
            <Link to="/schedule-your-repair">here</Link>
            , by giving us a call at
            {' '}
            <a href="tel:3034216499">303-421-6499</a>
            .
          </p>
          <li>Make Sure Your iPhone is Charged</li>
          <p>
            It makes the repair process go much more smoothly if your iPhone is
            charged. That way our technician can do a test of your device to
            make sure everything is working properly when they install the new
            screen.
          </p>
        </ol>
      </div>
    </Layout>
  )
}

export default iPhoneScreenRepair
