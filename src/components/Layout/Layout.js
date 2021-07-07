import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Header2 from '../Header2/Header2'

const GlobalStyle = createGlobalStyle`
body {
margin: 0
}
h1 {
text-align: center
}
`

const Layout = ({ pageTitle, children }) => (
  <main>
    <GlobalStyle />
    <title>{pageTitle}</title>
    {/* <Header /> */}
    <Header2 />
    {/* <h1>{pageTitle}</h1> */}
    {children}
  </main>
)

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
Layout.defaultProps = {
  pageTitle: 'FixNcell Mobile iPhone Repair',
}

export default Layout
