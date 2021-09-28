import * as React from 'react'
import { Link } from 'gatsby'
import { locationsMain, locsDiv, locCard } from './SelectLocation.module.css'
import getLocations from '../../queries/getLocations/getLocations'

function SelectLocation() {
  const { locations } = getLocations()
  const locArray = locations.map((location) => location.name).sort()
  return (
    <div className={locationsMain}>
      <h3>Select Your Location</h3>
      <div className={locsDiv}>
        {locArray.map((loc) => (
          <Link to={`/${loc.toLowerCase()}/repairs`} key={loc}>
            <div className={locCard}>{loc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SelectLocation
