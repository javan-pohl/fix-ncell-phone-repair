import * as React from 'react'
import Layout from '../components/Layout/Layout'

const Thanks = {
  background: 'white',
  color: 'black',
  margin: 'auto',
  position: 'absolute',
  top: '40%',
  left: '23%',
  transform: 'translateY(-50%)',
  textAlign: 'center',
  padding: '25px',
  width: '50%',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
}
const backImg = (img, opac = 0.9) => ({
  color: 'white',
  height: '400px',
  backgroundImage: `linear-gradient(rgb(0,152,255,${opac}),
	rgb(0,152,255,${opac - 0.05})), url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  padding: '1px',
})

const westyImg = 'https://www.fixncell.com/img/westy.webp'

const ThankYou = () => (
  <Layout>
    <div style={backImg(westyImg, 0.7)}>
      <div style={Thanks} data-sal="fade-in" data-sal-easing="ease" data-sal-duration="1000">
        <h1>Thank You For Contacting Us</h1>
        <p>We will get back to you as soon as possible</p>
      </div>
    </div>
  </Layout>
)

export default ThankYou
