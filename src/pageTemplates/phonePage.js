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
    location = 'Westminster',
  },
}) {
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
      <td>Book</td>
    </Link>
  )
  function repairTable() {
    return (
      <table className={repairPrices}>
        <thead>
          <tr>
            <th>Repair</th>
            <th>Price</th>
            <th>Book</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(repairs).map((repair, idx) => (
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
  const iPhoneScreenRepair = () => <div />
  return (
    <Layout pageTitle="FixNcell">
      <h1>{PageName}</h1>
      <div className={phoneMain}>
        <img src={imageURL} alt={name} style={{ height: '250px' }} />
        {repairTable()}
      </div>
      <section>
        <h1>{PageName}</h1>
        <p>
          For most
          {' '}
          {name}
          {' '}
          repairs at FixNcell
          {' '}
          {location}
          , we provide upfront
          pricing. If you don't see the particular
          {' '}
          {name}
          {' '}
          repair you need or are
          unsure of what is wrong with your
          {' '}
          {name}
          , please contact us and we'll
          help you figure out what kind of service you need.
        </p>
        <h2>
          {location}
          {' '}
          {name}
          {' '}
          Screen Repair
        </h2>
        <p>
          Have you got an
          {' '}
          {name}
          {' '}
          screen that isn't working properly? Maybe it's
          glass that's cutting your fingers or just driving your crazy. Or maybe
          your
          {' '}
          {name}
          {' '}
          display isn't showing the image properly or responding to
          touch. FixNcell
          {' '}
          {location}
          {' '}
          provides high-quality screen replacement
          service that will have your
          {' '}
          {name}
          {' '}
          functioning and looking the way it
          should.
          {' '}
        </p>
      </section>
    </Layout>
  )
}

export default PhonePage
