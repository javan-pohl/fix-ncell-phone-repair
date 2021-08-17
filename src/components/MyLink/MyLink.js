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
  const toArr = to.split('/').filter((e) => e !== '')
  // for the following to work, the location must be the first item in the path
  const pathLoc = locations.some(
    (e) => e.name.toLowerCase() === pathArr[0].toLowerCase(),
  )
    ? pathArr[0]
    : false
  const toLoc = locations.some(
    (e) => e.name.toLowerCase() === toArr[0].toLowerCase(),
  )
    ? toArr[0]
    : false
  // ok, now that we have the url location, (assuming it's not false) we can check the 'to' path for a location and, if it doesn't exist, add it
  if (pathLoc && !toLoc) toArr.unshift(pathLoc)

  console.log('pathHasLoc: ', pathLoc)
  console.log('MyLink locations: ', locations)
  console.log('pathArr: ', pathArr)
  console.log('url: ', url)
  console.log('to: ', to)
  console.log('toArr: ', toArr)
  to = `/${toArr.join('/')}`
  console.log('to: ', to)
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
