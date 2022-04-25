import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { LocalBusinessJsonLd } from 'gatsby-plugin-next-seo'
import Header2 from '../Header2/Header2'
import FooterStatic from '../FooterStatic/FooterStatic'

const GlobalStyle = createGlobalStyle`
body {
margin: 0
}
h1, h2, h3, h4, h5 {
text-align: center
}
`

const Layout = ({ currentUrl, pageTitle, children }) => {
  // keeping this here for now so that it doesn't try to force to an unbracketed arrow structure
  const description = 'FixNcell Phone Repair is a mobile phone repair shop located in Westminster, CO. We also serve the Broomfield and Arvada. We fix broken iPhones and cracked screens. We can replace batteries and repair broken charging ports. We go to you.'
  if (currentUrl === '/' && typeof window !== 'undefined') {
    currentUrl = window.location.pathname
  }
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <meta name="google-site-verification" content="UuKA9CsGyvBUBvry0azI_PdbJomI8HWoTgRkfpChb8o" />
      </Helmet>
      <LocalBusinessJsonLd
        type="Store"
        id="https://www.fixncell.com"
        name="FixNcell iPhone Repair"
        description={description}
        url="https://www.fixncell.com"
        telephone="+13034216499"
        address={{
          streetAddress: '9140 w 100th ave',
          addressLocality: 'Westminster',
          addressRegion: 'CO',
          postalCode: '80021',
          addressCountry: 'US',
        }}
        geo={{
          latitude: '39.8773119',
          longitude: '105.1007508',
        }}
      />
      <GlobalStyle />
      <title>{pageTitle}</title>
      <Header2 currentUrl={currentUrl} />
      {children}
      <FooterStatic url={currentUrl} />
    </main>
  )
}

Layout.propTypes = {
  currentUrl: PropTypes.string,
  pageTitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
Layout.defaultProps = {
  currentUrl: '/',
  pageTitle: 'FixNcell Mobile iPhone Repair',
}

export default Layout
