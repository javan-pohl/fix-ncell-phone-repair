import * as React from 'react'
import { Link } from 'gatsby'
import {
  locationsMain, locsDiv, locCard, button,
} from './SelectLocation.module.scss'
import getLocations from '../../queries/getLocations/getLocations'

function SelectLocation() {
  const { locations } = getLocations()
  const locArray = locations.map((location) => location.name).sort()
  return (
    <div className={locationsMain}>
      <h3>Select Your Location to Get Started</h3>
      <div className={locsDiv}>
        {locArray.map((loc, index) => (
          <Link to={`/${loc.toLowerCase()}/repairs/iphone`} key={loc}>
            <div className={locCard} data-sal="fade" data-sal-duration="1000" data-sal-delay={index * (100)}>{loc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SelectLocation
