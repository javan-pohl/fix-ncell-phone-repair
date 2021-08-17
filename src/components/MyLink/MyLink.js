import * as React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import getLocations from '../../queries/getLocations/getLocations'

const MyLink = ({
  url, to, alt, key, children,
}) => {
  // we're going to take in the current url and the 'to' (which will probably be the slug) and determine if we need to replace an existing element of the current url or create one (e.g. if the slug is a location, replace the existing location or add the param for location)
  const { locations } = getLocations()
  const pathArr = url.split('/').filter((e) => e !== '')
  const pathHasLoc = locations.some((e) => e.name.toLowerCase() === pathArr[0].toLowerCase())
  console.log('pathHasLoc: ', pathHasLoc)
  console.log('MyLink locations: ', locations)
  console.log('pathArr: ', pathArr)
  // if slug is a location
  // // check current url for a location and replace if different
  // // add location if no location present
  return (
    <Link to={to} key={key} alt={alt}>
      {children}
    </Link>
  )
}

MyLink.propTypes = {
  url: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  alt: PropTypes.string,
  key: PropTypes.string,
}

export default MyLink
