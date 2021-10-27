import * as React from 'react'
import { Link } from 'gatsby'
import {
  button,
  ourServices,
  serviceCard,
  serviceCards,
  serviceCardBody,
  serviceIcon,
  servicesInner,
  iconSection,
} from './ServiceCards.module.css'
import fastIcon from '../../images/fast_icon.webp'
import phoneIcon from '../../images/cracked_phone_icon.webp'
import chargingIcon from '../../images/charging_port_icon.webp'
import batteryIcon from '../../images/battery_icon.webp'

const ServiceCard = ({
  cardTitle, iconImg, cardBody, imgText, link,
}) => {
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
        <Link to={link}>
          <div className={button}>Learn More</div>
        </Link>
      </div>
    </div>
  )
}

const ServiceCards = (serviceList) => {
  serviceList.services[0].iconImg = phoneIcon
  serviceList.services[1].iconImg = chargingIcon
  serviceList.services[2].iconImg = batteryIcon
  return (
    <div className={ourServices}>
      <h2>Our iPhone Repair Services</h2>
      <div className={serviceCards}>
        {ServiceCard(serviceList.services[0])}
        {ServiceCard(serviceList.services[1])}
        {ServiceCard(serviceList.services[2])}
      </div>
    </div>
  )
}
export default ServiceCards
