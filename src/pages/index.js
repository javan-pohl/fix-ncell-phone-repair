import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout/Layout'
import Showcase from '../components/Showcase/Showcase'
import SelectPhone from '../components/SelectPhone/SelectPhone'
// import SelectLocation from '../components/SelectLocation/SelectLocation'
import WhyFixNcell from '../components/WhyFixNcell/WhyFixNcell'
import EmbedSocialWidget from '../components/EmbedSocialWidget/EmbedSocialWidget'
import ContactForm from '../components/ContactForm/ContactForm'
import ServiceCards from '../components/ServiceCards/ServiceCards'
import insidePhone from '../images/inside_phone_horz.webp'
import westy from '../images/westy.webp'

/* eslint-disable react/prop-types */
const backImg = (img, opac = 0.9, col = '0, 152, 255') => ({
  color: 'white',
  backgroundImage: `linear-gradient(rgb(${col},${opac}),
	rgb(${col},${opac - 0.05})), url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  padding: '1px',
})

const IndexPage = ({ location: { pathname } }) => {
  const IndexMain = () => (
    <div style={backImg(insidePhone)}>
      <span
        role="img"
        aria-label="a FixNcell workstation that has an opened iPhone that is being worked"
      />
      <div data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
        <h1 className="pseudo_border">{title}</h1>
        <p style={{ fontSize: '18px' }}>
          FixNcell is a mobile iPhone repair service that travels to your
          location to fix your broken iPhone. We come to you! You may remember
          us from our old store-based location in Westminster at 100th Ave
          (Church Ranch Road) and Wadsworth Pkwy. Now that we're mobile, getting
          your damaged iPhone repaired is easier than ever. Just schedule an
          appointment and our technician will come to your location (work, home,
          or whatever address is convenient for you).
          {' '}
        </p>
      </div>
    </div>
  )
  // useScript('https://reviewsonmywebsite.com/js/embedLoader.js?id=cb477ad3a93eb5d679f0')
  const title = 'FixNcell iPhone Repair'
  const servicesList = [
    {
      cardTitle: 'iPhone Screen Repair',
      cardBody:
        'At FixNcell, we perform our iPhone screen repairs by replacing the entire iPhone screen assembly, including the glass, digitizer (touch-screen), and display (LCD or OLED). This allows for a timely and quality repair.',
      imgText: 'iPhone with cracked screen',
      link: '/repairs/iphone-screen-repair',
    },
    {
      cardTitle: 'iPhone Charging Port Repair',
      cardBody:
        "If you are struggling to get a good connection with your iPhone's lightning charging port and the charging cable, it could be time for a new charging port. The charging port of iPhones and every other device wear out over time, but this is an issue that we can take care of for you.",
      imgText: 'icon of iphone charging port',
      link: '/repairs/iphone-charging-port-repair',
    },
    {
      cardTitle: 'iPhone Battery Replacement',
      cardBody:
        'Your iPhone may not be holding a charge like it used to, or you may noticed swelling coming from typically the left side of the screen, where the glass is bulging away from the frame--these are both signs that you may need a new iPhone battery.',
      imgText: 'the battery icon found on an iPhone',
      link: '/repairs/iphone-battery-replacement',
    },
  ]
  return (
    <Layout pageTitle={title} currentUrl={pathname}>
      <Helmet>
        <meta
          name="description"
          content="Get your broken iPhone fixed with our mobile iPhone repair service that operates in the Westminster, Boulder, and Denver metro areas. We come to you."
        />
        <title>{title}</title>
      </Helmet>
      <Showcase />
      <SelectPhone />
      {/* <SelectLocation /> */}
      {IndexMain()}
      <div style={{ marginBottom: '0px' }}>
        <EmbedSocialWidget refId="290bdda409a96a5c382887408438f18ddeabb3ab" />
      </div>
      {WhyFixNcell()}
      <ServiceCards services={servicesList} />
      <div
        style={backImg(westy, 0.8)}
        role="img"
        aria-label="view of the mountains from Westminster, Colorado"
      >
        <span
          role="img"
          aria-label="A mountain-facing view of Westminster, Colorado, including a park and some related buildings in the foreground"
        />
        <ContactForm />
      </div>
    </Layout>
  )
}

export default IndexPage
