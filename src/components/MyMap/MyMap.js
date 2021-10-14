import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapContainerStyle = {
  height: "400px",
  width: "800px"
}

const center = {
  lat: 0,
  lng: -180
}

const position = {
  lat: 39.8367,
  lng: -105.0372
}

const onLoad = marker => {
  console.log('marker: ', marker)
}
const MyMap = () => (
  <LoadScript googleMapsApiKey="AIzaSyAKvUS4Lp_4GCNufccmpeF-dLf7No0_Nrw">
    <GoogleMap
    id="marker-example"
    mapContainerStyle={mapContainerStyle}
    zoom={12}
    center={position}
  >
    <Marker
      onLoad={onLoad}
      position={position}
    />
  </GoogleMap>
  </LoadScript>
)
export default MyMap
