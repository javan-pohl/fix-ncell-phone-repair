import * as React from 'react'
import Layout from '../components/Layout/Layout'
import getImages from '../queries/getSmallPhoneImgs/getSmallPhoneImgs'
import errImg from '../images/no_image.jpg'
import { phoneMain, repairPrices } from './phonePage.module.css'

// pageContext comes from gatsby.node.js
function PhonePage({
  pageContext: {
    phone: {
      make, model, image, repairs,
    },
    location,
  },
}) {
  const imageURL = getImages(image) || errImg
  const name = `${make} ${model}`
  function repairTable() {
    return (
      <table className={repairPrices}>
        <tr>
          <th>Repair</th>
          <th>Price</th>
        </tr>
        {Object.keys(repairs).map((repair, idx) => (
          <tr key={idx}>
            <td>
              {`${make} ${model} ${
                typeof repair === 'string' ? repair.replace(/\_/g, ' ') : repair
              }`}
            </td>
            {/* <td>{`${make} ${model} ${repair.replaceAll('_', ' ')}`}</td> */}
            <td>{repairs[repair]}</td>
          </tr>
        ))}
      </table>
    )
  }
  return (
    <Layout pageTitle="Phone Page">
      <h1>
        {location}
        {' '}
        {name}
        {' '}
        Repair
      </h1>
      <div className={phoneMain}>
        <img src={imageURL} alt={name} />
        {repairTable()}
      </div>
    </Layout>
  )
}

export default PhonePage
