import * as React from 'react'
import { reviewBadges, reviewBadgesOuter } from './ReviewBadges.module.css'
import YelpBadge from '../../images/yelp_badge.png'
import YelpReviews from '../../images/yelp_reviews_transp_small.png'
import GoogleReviews from '../../images/google_reviews_transp_small.png'

const ReviewBadges = () => (
  <div className={reviewBadgesOuter}>
    <div className={reviewBadges}>
      {/* <img src="https://embedsocial.com/api/source_image_badges/badge-3-g/en/google/32472" />
      <img src={YelpBadge} />
      <img src="https://embedsocial.com/api/source_image_badges/badge-3-f/en/facebook/90654" /> */}
      <a href="https://g.page/fixncell?share">
        <img src={GoogleReviews} alt="google logo with 4.8 stars highlighted underneath" />
      </a>
      <a href="https://www.yelp.com/biz/fixncell-phone-repair-westminster?osq=fixncell">
        <img src={YelpReviews} alt="yelp logo with 4.5 stars highlighted underneath" />
      </a>
    </div>
  </div>
)

export default ReviewBadges
