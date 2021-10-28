import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import useWindowSize from '../../hooks/useWindowSize'
import phoneRepairSm from '../../images/iphone_screen_repair_439.webp'
import { fadeText } from './iphone-screen-repair.module.css'

const mainBackImg = (
  img,

  opac = 0.9,
  col = '0, 152, 255',
) => ({
  display: 'relative',
  height: '400px',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `linear-gradient(rgb(${col},${opac}),
	rgb(${col},${opac - 0.05})), url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  backgroundPosition: 'center',
  padding: '1px',
  marginBottom: '0px',
})
const backImg = (
  img,
  mobileHeight = true,
  isFlex = true,
  opac = 0.9,
  col = '0, 152, 255',
) => {
  const { height, width } = useWindowSize()
  const myHeight = width < 961 && mobileHeight ? '700px' : '400px'
  const myDisplay = isFlex && mobileHeight ? 'flex' : ''
  return {
    display: 'relative',
    height: myHeight,
    color: 'white',
    display: myDisplay,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(rgb(${col},${opac}),
	rgb(${col},${opac - 0.05})), url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    padding: '1px',
    marginBottom: '0px',
  }
}
const aboutHeading = {
  maxHeight: '350px',
  margin: '5vw 0',
  padding: '1vw 2vw',
  lineHeight: '10vw',
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: '6vw',
  backgroundColor: 'rgba(0,0,0,.5)',
  border: '2px solid white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'nowrap',
}
const iPhoneScreenRepair = ({ location: { pathname } }) => {
  const title = 'FixNcell iPhone Screen Repairs'

  return (
    <Layout pageTitle={title} currentUrl={pathname}>
      <Helmet>
        <meta
          name="description"
          content="Information on the different types of broken iPhone screen issues that the process for getting an iPhone screen fixed through FixNcell."
        />
        <title>{title}</title>
      </Helmet>
      <div style={mainBackImg(phoneRepairSm, 0.95, '0,0,0')}>
        <span
          role="img"
          aria-label="An iPhone X that is in the process of having its screen replaced. The phone is open and the various tools used in the repair are located on the table next to it."
        />
        <div style={aboutHeading} className={fadeText}>
          <h3>
            iPhone Screen Repairs
            <br />
            At FixNcell
          </h3>
        </div>
      </div>
      <div style={{ margin: '0' }}>
        <h1>iPhone Screen Repair</h1>
      </div>
    </Layout>
  )
}

export default iPhoneScreenRepair
