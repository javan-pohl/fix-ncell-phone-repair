import * as React from 'react'
import { whyMain, whyCard } from './WhyFixNcell.module.css'
import background from '../../images/hexagon_rotated.webp'
import fastIcon from '../../images/fast_icon.webp'
import dataSecure from '../../images/data_secure.webp'
import noDollars from '../../images/no_dollars.webp'
import warrantyIcon from '../../images/warranty_icon.webp'

const backImg = (img, opac = 0.6, col = '0, 152, 255') => ({
  backgroundImage: `linear-gradient(rgb(${col},${opac}),
	rgb(${col},${opac - 0.05})), url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  padding: '1px',
})

const WhyFixNcell = () => (
  <div style={backImg(background)}>
    <h2 className="pseudo_border_small_center">Why Choose FixNcell?</h2>
    <div className={whyMain}>
      <div
        className={whyCard}
        data-sal="zoom-in"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <img
          src={fastIcon}
          alt="stopwatch with markings to indicate that it's fast"
        />
        <div>
          <h3 className="pseudo_border_small">Fast and Convenient</h3>
          <p>
            Our repair technician will drive to the location of you choosing to
            repair your device. Not only is this incredibly convenient but it
            also decreases the amount of time it takes for you to get your phone
            back. Instead of dropping off your phone at a repair shop and
            waiting hours for it be fixed,
            <strong>
              most of our phone repair services take under twenty minutes.
            </strong>
          </p>
        </div>
      </div>
      <div
        className={whyCard}
        data-sal="zoom-in"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <img
          src={noDollars}
          style={{ opacity: '.7' }}
          alt="a slash through a dollar sign"
        />
        <div>
          <h3 className="pseudo_border_small">
            If We Can't Fix It, We Don't Charge You
          </h3>
          <p>
            Being a mobile repair service, we have to somewhat limit the types
            of repair services we can perform. In most cases, we are highly
            confident of what type of repair your phone needs.
            <strong>
              If it turns out that the issue is something other than we
              diagnosed and we don't have the means to fix your devices, there
              is no fee for our service
            </strong>
          </p>
        </div>
      </div>
      {'\n'}
      <div
        className={whyCard}
        data-sal="zoom-in"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <img
          style={{ opacity: '.8' }}
          src={dataSecure}
          alt="lock with a checkmark next to it"
        />
        <div>
          <h3 className="pseudo_border_small">Your Data is Secure</h3>
          <p>
            Here at FixNcell, we believe that the safety of your data is
            paramount.
            <strong>
              We do not require the iPhone passcode to repair your device.
            </strong>
            This helps not only to ensure that your privacy is respected but
            also to guarantee that the technician won't drive off with your
            phone (without the passcode or your Apple username and password,
            your iPhone is basically Fort Knox). Rest assured that your data is
            safe with us.
          </p>
        </div>
      </div>
      <div
        className={whyCard}
        data-sal="zoom-in"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <img
          src={warrantyIcon}
          style={{ opacity: '.8' }}
          alt="check-mark on a shield surrounded by a circle"
        />
        <div>
          <h3 className="pseudo_border_small">Protected By Warranty</h3>
          <p>
            We stand by our service.
            <strong>
              As long as your new screen or related iPhone part isn't damaged,
              it is under warranty for 90 days
            </strong>
            (in our experience if the repair is going to exhibit unwanted
            issues, it will become noticeable within days). New screen glitching
            or not responding to touch?--it's covered under the warranty. If you
            need a warranty repair, just schedule another iPhone repair and our
            technician will be out to diagnose the issue and get your phone
            working like it should.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default WhyFixNcell
