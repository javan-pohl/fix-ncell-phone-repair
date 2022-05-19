import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import getImages from '../queries/getSmallPhoneImgs/getSmallPhoneImgs'
import errImg from '../images/no_image.jpg'
import { phoneMain, repairPrices } from './phonePage.module.css'

// pageContext comes from gatsby.node.js
function PhonePage({
  pageContext: {
    phone: {
      make, model, image, repairs, phoneInfo,
    },
    location = 'Westminster',
  },
}) {
  console.log('phoneInfo: ', phoneInfo)
  const imageURL = getImages(image) || errImg
  const name = `${make} ${model}`
  const PageName = `FixNcell ${name} Repair - ${location}`

  const ButtonFunction = (repair) => (
    <Link
      to={
        repair.includes('screen')
          ? 'schedule-screen-repair'
          : '/schedule-your-repair'
      }
    >
      <td>Schedule</td>
    </Link>
  )
  function repairTable() {
    return (
      <table className={repairPrices}>
        <thead>
          <tr>
            <th>Repair</th>
            <th>Price</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(repairs).reverse().map((repair, idx) => (
            <tr key={idx}>
              <td>
                {`${make} ${model} ${
                  typeof repair === 'string'
                    ? repair.replace(/\_/g, ' ').replace('price', '')
                    : repair
                }`}
              </td>
              <td>{repairs[repair]}</td>
              {ButtonFunction(repair)}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  const infoSection = (info) => info && (
  <div>
    <h2>
      {name}
      {' '}
      Info
    </h2>
    <p>{phoneInfo}</p>
  </div>
  )
  return (
    <Layout pageTitle="FixNcell">
      <h1>{PageName}</h1>
      <div className={phoneMain}>
        <img src={imageURL} alt={name} style={{ height: '250px' }} />
        {repairTable()}
      </div>
      {infoSection(phoneInfo)}
    </Layout>
  )
}

export default PhonePage
