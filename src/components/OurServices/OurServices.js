import * as React from 'react'
import {
  ourServices,
  serviceCard,
  serviceCards,
  serviceCardBody,
  serviceIcon,
  servicesInner,
  iconSection,
} from './OurServices.module.css'
import fastIcon from '../../images/fast_icon.webp'
import phoneIcon from '../../images/cracked_phone_icon.webp'
import chargingIcon from '../../images/charging_port_icon.webp'
import batteryIcon from '../../images/battery_icon.webp'

const ServiceCard = (cardTitle, iconImg, cardBody, imgText) => {
  const altText = typeof imgText === 'undefined' ? cardTitle.replace('_', ' ') : imgText
  return (
    <div className={serviceCard}>
      <div className={iconSection}>
        <div className={serviceIcon}>
          <img src={iconImg} alt={altText} />
        </div>
      </div>
      <div className={serviceCardBody}>
        <h3>{cardTitle}</h3>
        <p>{cardBody}</p>
      </div>
    </div>
  )
}
const OurServices = () => (
  <div className={ourServices}>
    <h2>Our iPhone Repair Services</h2>
    <div className={serviceCards}>
      {ServiceCard(
        'iPhone Screen Repair',
        phoneIcon,
        'At FixNcell, we perform our iPhone screen repairs by replacing the entire iPhone screen assembly, including the glass, digitizer (touch-screen), and display (LCD or OLED). This allows for a timely and quality repair.',
        'iPhone with cracked screen',
      )}

      {ServiceCard(
        'iPhone Charging Port Repair',
        chargingIcon,
        "If you are struggling to get a good connection with your iPhone's lightning charging port and the charging cable, it could be time for a new charging port. The charging port of iPhones and every other device wear out over time, but this is an issue that we can take care of for you.",
        'icon of iphone charging port',
      )}
      {ServiceCard(
        'iPhone Battery Replacement',
        batteryIcon,
        'Your iPhone may not be holding a charge like it used to, or you may noticed swelling coming from typically the left side of the screen, where the glass is bulging away from the frame--these are both signs that you may need a new iPhone battery.',
        'the battery icon found on an iPhone',
      )}
    </div>
  </div>
)
export default OurServices
