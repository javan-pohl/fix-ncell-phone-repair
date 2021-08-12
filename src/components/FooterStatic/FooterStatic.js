import * as React from 'react'
import './FooterStatic.css'
import { Link } from 'gatsby'
import getPhones from '../../queries/getPhones/getPhones'

const FooterStatic = () => {
  const { nodes } = getPhones()
  const phoneLinks = (
    <div className="footerListItems">
      <ul className="footerListUL" title="iPhone Models We Fix">
        {nodes.map((phone) => {
          const phoneName = `${phone.make} ${phone.model}`
          return (
            <Link to={phone.slug} key={phoneName}>
              <li className="footerListLI">{phoneName}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
  return (
    <div className="footerContainer">
      <div className="footerLogoContainer">
        <div className="footerLogo">
          <img src="https://www.fixncell.com/img/logo.webp" />
          <a href="tel:3034216499" className="footerContactButton">
            &#9742; Call (303)421-6499
          </a>
          <a
            href="mailto:fixncellllc@gmail.com"
            className="footerContactButton"
          >
            &#9993; Email
          </a>
        </div>
      </div>
      <div className="footerListContainer">
        <div className="footerListBox">
          <div className="footerListTitleBox">
            <a href="https://www.fixncell.com/iphone-repair.html">
              iPhone Models We Fix
            </a>
          </div>

          {phoneLinks}
        </div>
        <div className="footerListBox">
          <div className="footerListTitleBox">Areas We Service</div>
          <div className="footerListItems">
            <ul className="footerListUL2" title="Areas we service">
              <li className="footerListLI">Denver</li>
              <li className="footerListLI">Westminster</li>
              <li className="footerListLI">Boulder</li>
              <li className="footerListLI">Thornton</li>
              <li className="footerListLI">Golden</li>
              <li className="footerListLI">Lafayette</li>
            </ul>
          </div>
        </div>
        <div className="footerListBox">
          <div className="footerListTitleBox">Repairs We Offer</div>
          <div className="footerListItems">
            <ul className="footerListUL2" title="Repairs We Offer">
              <li className="footerListLI">Cracked Screen Repair</li>
              <li className="footerListLI">Charging Port Repair</li>
              <li className="footerListLI">Camera Repair</li>
              <li className="footerListLI">Rear Glass Replacment</li>
              <li className="footerListLI">Battery Replacement</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerRightSide">
        <div className="footerSocialContainer">
          <a
            href="https://www.facebook.com/fixncell"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://www.fixncell.com/img/facebook.webp" />
          </a>
          <a
            href="https://twitter.com/FixNcell"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://www.fixncell.com/img/twitter.webp" />
          </a>
          <a
            href="https://www.yelp.com/biz/fixncell-broomfield-9"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://www.fixncell.com/img/yelpTrans2.webp" />
          </a>
          <a
            href="https://foursquare.com/fixncell"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://www.fixncell.com/img/foursquare.webp" />
          </a>
        </div>
        <div className="footerStoreHoursContainer">
          <table className="footerStoreHoursTable">
            <thead>
              <tr>
                <th className="footerTableDayOfWeek">Day</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tr>
              <td className="footerTableDayOfWeek">Monday</td>
              <td>8:00am - 8:00pm</td>
            </tr>
            <tr>
              <td className="footerTableDayOfWeek">Tuesday</td>
              <td>8:00am - 8:00pm</td>
            </tr>
            <tr>
              <td className="footerTableDayOfWeek">Wednesday</td>
              <td>8:00am - 8:00pm</td>
            </tr>
            <tr>
              <td className="footerTableDayOfWeek">Thursday</td>
              <td>8:00am - 8:00pm</td>
            </tr>
            <tr>
              <td className="footerTableDayOfWeek">Friday</td>
              <td>8:00am - 6:00pm</td>
            </tr>
            <tr>
              <td className="footerTableDayOfWeek">Saturday</td>
              <td>10:00am - 4:00pm</td>
            </tr>
            <tr>
              <td className="footerTableDayOfWeek">Sunday</td>
              <td>Closed</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default FooterStatic
