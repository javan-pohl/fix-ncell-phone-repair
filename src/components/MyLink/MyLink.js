import * as React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import getLocations from '../../queries/getLocations/getLocations'

const MyLink = ({
  url, to, alt, key, children,
}) => {
  if (typeof url === 'undefined' && typeof window !== 'undefined') {
    url = window.location.pathname
  }
  // we're going to take in the current url and the 'to' (which will probably be the slug) and determine if we need to replace an existing element of the current url or create one (e.g. if the slug is a location, replace the existing location or add the param for location)
  if (url !== '/' && url.includes('repair')) {
    const { locations } = getLocations()
    const pathArr = url.split('/').filter((e) => e !== '')
    const toArr = to.split('/').filter((e) => e !== '')
    // for the following to work, the location must be the first item in the path
    // console.log('url: ', url)
    // console.log('to: ', to)
    // console.log('MyLink locations: ', locations)
    // this does not function when url is '/'
    // change this component to take in location from layout... or maybe make location a global variable?
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
    if (pathLoc && !toLoc) {
      toArr.unshift(pathLoc)
      to = `/${toArr.join('/')}`
    } else if (!pathLoc && toLoc) {
      // append location to beginning of curPath to create toPath
      pathArr.unshift(toLoc)
      to = `/${pathArr.join('/')}`
    } else if (pathLoc && toLoc) {
      // would this ever happen?
      // yes,in boulder/repairs/iphone-7 and wanting to go to 'Denver'
      // replace current loc (delete first item and replace with toLoc)
      pathArr[0] = toLoc
      to = `/${pathArr.join('/')}`
    }

    // console.log('pathHasLoc: ', pathLoc)
    // console.log('pathArr: ', pathArr)
    // console.log('url: ', url)
    // console.log('to: ', to)
    // console.log('toArr: ', toArr)
    // console.log('to: ', to)
    // if slug is a location
    // // check current url for a location and replace if different
    // // add location if no location present
  }
  return (
    <Link to={to} key={key || to} alt={alt}>
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
