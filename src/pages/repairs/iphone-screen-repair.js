import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import useWindowSize from '../../hooks/useWindowSize'
import phoneRepairSm from '../../images/iphone_screen_repair_439_b&w.webp'
import {
  darkBackground,
  desktopImg,
  h1Section,
  repairProcess,
  mobileCenter,
  mobileImg,
  sideBySide,
  fadeText,
} from './iphone-screen-repair.module.css'
import './iphone-screen-repair.css'
import insidePhone from '../../images/inside_phone_horz.webp'
import iphoneXS from '../../images/iphone-xs-screen-replacement.webp'
import iphoneXsMobile from '../../images/iphone-xs-screen-replacement-mobile.webp'
import EmbedSocialWidget from '../../components/EmbedSocialWidget/EmbedSocialWidget'
import SelectLocation from '../../components/SelectLocation/SelectLocation'

const blueBackImg = (img, opac = 0.9, col = '0, 152, 255') => ({
  margin: '0 0 0 0',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
  height: 'auto',
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
      <section
        data-sal="slide-up"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <div style={blueBackImg(insidePhone)}>
          <div className={sideBySide}>
            <div className={h1Section}>
              <h1 className="pseudo_border">iPhone Screen Repair</h1>
              <div className={darkBackground}>
                On this page, we'll provide more detail about the iPhone screen
                repair process at FixNcell, reviews from past screen repair
                customers, information about iPhone screens in general, and how
                you can learn more about getting your screen replaced.
              </div>
            </div>
            <img src={iphoneXS} className={desktopImg} />
            <img src={iphoneXS} className={mobileImg} />
          </div>
        </div>
        <div style={blueBackImg(insidePhone)}>
          <div className={sideBySide}>
            <h2 className="pseudo_border">Mobile iPhone Repairs</h2>
            <p className={darkBackground}>
              The first thing to know about getting your iPhone screen replaced
              with FixNcell is that we are a mobile service: we go to you! While
              we used to have a store-front, we switched to mobile only repairs
              in 2020.
            </p>
            <h2 className="pseudo_border">
              "iPhone Screen Repair" or "iPhone Screen Replacement"
            </h2>
            <p className={darkBackground}>
              Something that's important to note is that the terms "iPhone
              Screen Repair" and "iPhone Screen Replacement" will be used
              interchangeably. Technically it IS possible to repair an iPhone
              screen, but in most every case (with FixNcell and cell phone
              repair shops in general), the entire screen assembly will be
              replaced.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className="pseudo_border_green">
            Reviews From Some of our Screen Repair Customers
          </h2>
          <div>
            <EmbedSocialWidget refId="e35bba2e39f8fa0f19ee05532fb6c8816178ae55" />
          </div>
        </div>
      </section>
      <section>
        <div className={repairProcess}>
          <h2>The FixNcell Screen Repair Process</h2>
          <ol>
            <li>
              <h3>Schedule Your Repair</h3>
              <p>
                You can book your iPhone Screen repair appointment through the
                website
                {' '}
                <Link to="/schedule-your-repair">here</Link>
                , or by
                giving us a call at
                {' '}
                <a href="tel:3034216499">303-421-6499</a>
                .
              </p>
            </li>
            <li>
              <h3>Make Sure Your iPhone is Charged</h3>
              <p>
                It makes the repair process go much more smoothly if your iPhone
                is charged. That way our technician can do a test of your device
                to make sure everything is working properly when they install
                the new screen.
              </p>
            </li>
            <li>
              <h3>Meet the Technician at the Designated Time and Place</h3>
              <p>
                While our iPhone repair technicians can meet you anywhere, we
                typically go to your work or home to fix your broken phone.
              </p>
              <p>
                In most cases, the technician will perform the iPhone screen
                replacement in their vehicle, but if you have any privacy
                concerns, they can do the repair in your home.
                <span style={{ fontWeight: 'bold' }}>
                  (*Note that the repair tech does not need your iPhone passcode
                  in most cases, so your data is safe.)
                </span>
              </p>
            </li>
            <li>
              <h3>Wait for the Tech to Perform Their Phone Repair Magic</h3>
              <p>
                FixNcell technicians typically require about 15 - 30 minutes to
                install a new iPhone screen.
              </p>
            </li>
            <li>
              <h3>Check Your iPhone Screen After the Repair</h3>
              <p>
                Make sure the new iPhone display is functioning properly, that
                there are no dead touchscreen spots, screen freezing, or damage
                to the LCD display.
              </p>
            </li>
            <li>
              <h3>Pay</h3>
              <p>
                The last thing to do is to pay for the screen repair. We accept
                cash and any major credit card as payment.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section>
        <h2>Get More Information</h2>
        <p>
          To get more information, including pricing and available of iPhone
          screen repairs for your particular iPhone model, please select your
          location below:
        </p>
        <SelectLocation />
      </section>
    </Layout>
  )
}

export default iPhoneScreenRepair
