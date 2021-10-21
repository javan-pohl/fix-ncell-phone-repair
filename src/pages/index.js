import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Showcase from '../components/Showcase/Showcase'
import SelectLocation from '../components/SelectLocation/SelectLocation'
import useScript from '../hooks/useScript'
import EmbedSocialWidget from '../components/EmbedSocialWidget/EmbedSocialWidget'
import ContactForm from '../components/ContactForm/ContactForm'

/* eslint-disable react/prop-types */
const phoneImg = 'https://www.fixncell.com/img/inside_phone_horz.webp'
const westyImg = 'https://www.fixncell.com/img/westy.webp'
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
    <div style={backImg(phoneImg)}>
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
  const title = 'FixNcell Mobile iPhone Repair Service'
  return (
    <Layout pageTitle={title} currentUrl={pathname}>
      <Showcase />
      <SelectLocation />
      {IndexMain()}
      <div style={{ marginBottom: '0px' }}>
        <EmbedSocialWidget refId="290bdda409a96a5c382887408438f18ddeabb3ab" />
        {/* <EmbedSocialRaw refId="290bdda409a96a5c382887408438f18ddeabb3ab" /> */}

      </div>
      <div
        style={backImg(westyImg, 0.8)}
        role="img"
        aria-label="picture of Westminster, Colorado"
      >
        <ContactForm />
      </div>
    </Layout>
  )
}

export default IndexPage
