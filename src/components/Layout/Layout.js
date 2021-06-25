import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../Header/Header'

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <Header />
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
