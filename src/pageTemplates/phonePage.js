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
      make, model, image, repairs,
    },
    location = 'Denver/Boulder Metro',
  },
}) {
  const imageURL = getImages(image) || errImg
  const name = `${make} ${model}`
  const ButtonFunction = (repair) => (
    <Link
      to={
          repair.includes('screen')
            ? 'schedule-screen-repair'
            : '/schedule-your-repair'
        }
    >
      <td>Book</td>
    </Link>
  )
  function repairTable() {
    return (
      <table className={repairPrices}>
        <tr>
          <th>Repair</th>
          <th>Price</th>
          <th>Book</th>
        </tr>
        {Object.keys(repairs).map((repair, idx) => (
          <tr key={idx}>
            <td>
              {`${make} ${model} ${
                typeof repair === 'string' ? repair.replace(/\_/g, ' ') : repair
              }`}
            </td>
            <td>{repairs[repair]}</td>
            {ButtonFunction(repair)}
          </tr>
        ))}
      </table>
    )
  }
  return (
    <Layout pageTitle="Phone Page">
      <h1>
        FixNcell
        {' '}
        {name}
        {' '}
        Repair -
        {' '}
        {location}
        {' '}
      </h1>
      <div className={phoneMain}>
        <img src={imageURL} alt={name} style={{ height: '250px' }} />
        {repairTable()}
      </div>
    </Layout>
  )
}

export default PhonePage
