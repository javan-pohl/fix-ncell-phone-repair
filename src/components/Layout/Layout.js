import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../Header/Header'
import {createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
	body {
		margin: 0
	}
`

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
			<GlobalStyle />
      <title>{pageTitle}</title>
      <Header />
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
