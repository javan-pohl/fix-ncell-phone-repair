import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Showcase from '../components/Showcase/Showcase'
import SelectLocation from '../components/SelectLocation/SelectLocation'
import useScript from '../hooks/useScript'
import EmbedSocialWidget from '../components/EmbedSocialWidget/EmbedSocialWidget'

/* eslint-disable react/prop-types */
const backImg = {
  color: 'white',
  backgroundImage: `linear-gradient(rgb(0,152,255,0.90),
	rgb(0,152,255,0.85)), url(https://www.fixncell.com/img/inside_phone_horz.webp)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  padding: '1px',
}
const IndexPage = ({ location: { pathname } }) => {
  // useScript('https://reviewsonmywebsite.com/js/embedLoader.js?id=cb477ad3a93eb5d679f0')
  const title = 'FixNcell Mobile iPhone Repair Service'
  return (
    <Layout pageTitle={title} currentUrl={pathname}>
      <Showcase />
      <SelectLocation />
      <div>
        <EmbedSocialWidget refId="290bdda409a96a5c382887408438f18ddeabb3ab" />
      </div>
      <div style={backImg}>
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
      <p>
        The technician will work on your phone in their vehicle; however, if you
        have security concerns you can be present for the repair (granted, we do
        not typically need your passcode to work on the mobile device so you
        don't have much to worry about in terms of security violations--it's
        near impossible to get past an iPhone's security without the passcode).
      </p>
    </Layout>
  )
}

export default IndexPage
