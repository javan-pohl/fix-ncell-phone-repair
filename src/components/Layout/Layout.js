import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import Header2 from '../Header2/Header2'
import FooterStatic from '../FooterStatic/FooterStatic'

const GlobalStyle = createGlobalStyle`
body {
margin: 0
}
h1 {
text-align: center
}
`

const Layout = ({ currentUrl, pageTitle, children }) => (
  <main>
    <GlobalStyle />
    <title>{pageTitle}</title>
    <Header2 currentUrl={currentUrl} />
    {children}
    <FooterStatic />
  </main>
)

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
