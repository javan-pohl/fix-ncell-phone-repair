import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Faq from 'react-faq-component'
import Layout from '../../components/Layout/Layout'
import useWindowSize from '../../hooks/useWindowSize'
import phoneRepairSm from '../../images/iphone_screen_repair_439_b&w.webp'
import {
  cards,
  darkBackground,
  desktopImg,
  faqSection,
  faqOuter,
  rowReversed,
  h1Section,
  repairProcess,
  mobileCenter,
  mobileImg,
  sectionCard,
  repairTypes,
  sideBySide,
  fadeText,
} from './iphone-screen-repair.module.css'
import insidePhone from '../../images/inside_phone_horz.webp'
import iphoneXS from '../../images/iphone-xs-screen-replacement.webp'
import iphoneXsMobile from '../../images/iphone-xs-screen-replacement-mobile.webp'
import crackedLcd from '../../images/iphone-xr-broken-lcd.webp'
import crackedGlass from '../../images/iphone-cracked-glass.webp'
import damagedDisplay from '../../images/iphone-damaged-display.webp'
import EmbedSocialWidget from '../../components/EmbedSocialWidget/EmbedSocialWidget'
import SelectPhone from '../../components/SelectPhone/SelectPhone'

const faqData = {
  title: 'FAQ - iPhone Screen Repair',
  rows: [
    {
      title: 'My screen is totally destroyed--can it still be fixed?',
      content:
        'Absolutely. Even if the glass is totally shattered, or is missing pieces and you can see the internals of the Apple iPhone device--yes, the screen can be repaired. Typically the only type of damage that might not allow for an iPhone screen to be repaired is if the metal iPhone frame is drastically bent. In those cases, the entire iPhone frame assembly may need to be replaced as well.',
    },
    {
      title:
        'Will I notice a difference in quality with the screen you install?',
      content: `This is a multi-layered question. The first answer is "No--you likely won't notice a difference in quality between your original screen and the one we put on." 
				
				Related to this question is "Yes, we do typically use after-market screens, but we can install original quality Apple screens if you so desire."
				\n If, after having FixNcell repair your screen, you're unhappy with the quality of the after-market screen, we will install the original grade screen for only the difference in price of the after-market screen vs the original. We just want to point out that, out of the thousands of iPhone screens we've replaced, less than a dozen people have wanted to upgrade to the original quality. We're always keeping an eye on the quality of our iPhone parts, so the standard screens we use satisfy about 99.9% of our customers.`,
    },
    {
      title: 'Is is possible for me to replace my iPhone screen myself?',
      content:
        "Yes, but we don't recommend it. Even for our experienced iPhone repair technicians, jumping into a new model that we're not familiar with can be a daunting and stressful task. iPhone screen repair is a very delicate procedure and knowing how to safely remove and re-install parts in a phone you're unfamiliar with is a stressful and time-consuming task. After you do a few dozen, then it's pretty easy. If you're not trained in cell phone repair, then it would be relatively easy to irreparably damage your iPhone while attempting to replace your phone screen.",
    },
  ],
}

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
const processSection = () => (
  <section>
    <div className={repairProcess}>
      <h2>FixNcell iPhone Screen Replacement Process</h2>
      <ol>
        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
          <h3>Schedule Your Repair</h3>
          <p>
            You can book your iPhone Screen repair appointment through the
            website
            {' '}
            <Link to="/schedule-your-repair">here</Link>
            , or by giving
            us a call at
            {' '}
            <a href="tel:3034216499">303-421-6499</a>
            .
          </p>
        </li>
        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
          <h3>Make Sure Your iPhone is Charged</h3>
          <p>
            It makes the repair process go much more smoothly if your iPhone is
            charged. That way our technician can do a test of your device to
            make sure everything is working properly when they install the new
            screen.
          </p>
        </li>
        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
          <h3>Meet the Technician at the Designated Time and Place</h3>
          <p>
            While our iPhone repair technicians can meet you anywhere, we
            typically go to your work or home to fix your broken phone.
          </p>
          <p>
            In most cases, the technician will perform the iPhone screen
            replacement in their vehicle, but if you have any privacy concerns,
            they can do the repair in your home.
            <strong>
              (*Note that the repair tech does not need your iPhone passcode in
              most cases, so your data is safe.)
            </strong>
          </p>
        </li>
        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
          <h3>Wait for the Tech to Perform Their Phone Repair Magic</h3>
          <p>
            FixNcell technicians typically require about 15 - 30 minutes to
            install a new iPhone screen.
          </p>
        </li>
        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
          <h3>Check Your iPhone Screen After the Repair</h3>
          <p>
            Make sure the new iPhone display is functioning properly, that there
            are no dead touchscreen spots, screen freezing, or damage to the LCD
            display.
          </p>
        </li>
        <li data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
          <h3>Pay</h3>
          <p>
            The last thing to do is to pay for the screen repair. We accept cash
            and any major credit card as payment.
          </p>
        </li>
      </ol>
    </div>
  </section>
)
const iPhoneScreenRepair = ({ location: { pathname } }) => {
  const title = 'iPhone Screen Repairs | FixNcell | Westminster, CO'

  return (
    <Layout pageTitle={title} currentUrl={pathname}>
      <Helmet>
        <meta
          name="description"
          content="Information on the different types of broken iPhone screen issues that the process for getting an iPhone screen fixed through FixNcell. Westminster, C0 80021"
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
              <h1 className="pseudo_border_green">{title}</h1>
              <p>
                On this page, we'll provide more detail about the iPhone screen
                repair process at FixNcell, reviews from past screen repair
                customers, information about iPhone screens in general, and how
                you can learn more about getting your screen replaced.
              </p>
            </div>
            <img src={iphoneXS} className={desktopImg} />
            <img src={iphoneXS} className={mobileImg} />
          </div>
        </div>
      </section>
      <section>

        <SelectPhone />
      </section>
      <div>
        {/* <div>
          <h2 className="pseudo_border_green">Mobile iPhone Repairs</h2>
          <p>
            The first thing to know about getting your iPhone screen replaced
            with FixNcell is that we are a mobile service: we go to you! While
            we used to have a store-front, we switched to mobile only repairs in
            2020.
          </p>
        </div> */}
        <div>
          <h2 className="pseudo_border_green">
            iPhone Screen "Repair" or "Replacement"?
          </h2>
          <p>
            Something that's important to note is that the terms "iPhone Screen
            Repair" and "iPhone Screen Replacement" will be used
            interchangeably. Technically it IS possible to repair an iPhone
            screen, but in most every case (with FixNcell and cell phone repair
            shops in general), the entire screen assembly will be replaced.
          </p>
        </div>
        <div className={repairTypes}>
          <h2 className="pseudo_border_green">
            Types of Broken iPhone Screens
          </h2>
          <ul>
            <li>
              <div>
                <img
                  src={crackedGlass}
                  alt="iPhone with Apple logo on screen and spider web like crack in the glass at the top"
                />
              </div>
              <div>
                <h3>Cracked Glass</h3>
                <p>
                  In these cases, the iPhone glass is cracked or shattered but
                  the display and touchscreen underneath are still working
                  correctly. Cracked glass can be a nuisance in that it: 1)
                  cosmetically not appealing; 2) can cause you to cut your
                  fingers or face; 3) can make it more likely for your screen to
                  break entirely--leaving you unable to use your iPhone. If your
                  iPhone screen suffers from this issue, we recommend that you
                  schedule a screen repair with FixNcell today to have a new
                  glass screen installed.
                </p>
              </div>
            </li>

            <li className={rowReversed}>
              <div>
                <img
                  src={crackedLcd}
                  alt="iphone screen with vertical white lines cover the left half of the screen"
                />
              </div>
              <div>
                <h3>Display Damage</h3>
                <p>
                  iPhones can have either a liquid-crystal display (LCD) or
                  organic light-emitting diode (OLED) screen. If the display
                  portion of your iPhone screen has been damaged, that means
                  certain ports of the screen may be blank or distorted.
                  Thankfully, getting your iPhone screen replaced at FixNcell
                  means that your iPhone display will be back to normal.
                </p>
              </div>
            </li>

            <li>
              <div>
                <img
                  src={damagedDisplay}
                  alt="iPhone xr with cracked glass and most of the display blank"
                />
              </div>
              <div>
                <h3>Touch Screen Issues</h3>
                <p>
                  People often use the term "digitizer" to mean the display of
                  the device, but that is actually a misnomer as "digitizer"
                  means "touch screen" (or "touch monitor" or "touch panel"). To
                  "digitize", in this case, means to convert the physical
                  touches to digital signals. If your touch screen is not
                  working correctly, that could mean you: 1) have "dead spots"
                  on your iPhone screen that do not respond to touch, 2) that
                  the screen is pressing itself ("ghost touch" or "phantom
                  touches"--see an example of ghost touch
                  {' '}
                  <Link to="https://www.youtube.com/watch?v=vjVOpkcvkE4&t=10s&ab_channel=LiWang">
                    here
                  </Link>
                  ), 3) or that the screen does not respond to touches at all.
                </p>
                <p>
                  It is very important to replace your screen if you are
                  experiencing phantom touches because it can lead to too many
                  failed passcode attempts and the disabling of your iPhone.
                  Give us a call today so we can fix your iPhone touchscreen
                  issue.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {processSection()}
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
      <div className={faqOuter}>
        <div className={faqSection}>
          <Faq data={faqData} />
        </div>
      </div>
    </Layout>
  )
}

export default iPhoneScreenRepair
