import React from 'react'

class EmbedSocialWidget extends React.Component {
  render() {
    return <div className="embedsocial-reviews" data-ref={this.props.refId} />
  }

  componentDidMount() {
    (function (d, s, id) {
      let js
      // if (d.getElementById(id)) {
      //   return
      // }
      js = d.createElement(s)
      js.id = id
      js.src = 'https://embedsocial.com/embedscript/ri.js'
      d.getElementsByTagName('head')[0].appendChild(js)
    }(document, 'script', 'EmbedSocialReviewsScript'))
  }
}

export default EmbedSocialWidget
