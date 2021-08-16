import * as React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const MyLink = ({
  url, to, alt, key,
}) => {
  // we're going to take in the current url and the 'to' (which will probably be the slug) and determine if we need to replace an existing element of the current url or create one (e.g. if the slug is a location, replace the existing location or add the param for location)
}

MyLink.propTypes = {
  url: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  alt: PropTypes.string,
  key: PropTypes.string,
}

export default MyLink
