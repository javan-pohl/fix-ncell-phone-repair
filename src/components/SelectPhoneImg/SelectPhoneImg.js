import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
// function getImg() {
//   const data = useStaticQuery(graphql`
// 	query {

// 	}
// 	`)
// }

// function SelectPhoneImg({ model }) {
//   console.log('model: ', model)
//   const model1 = '6'
//   console.log(model === model1)
//   const url = `../../images/phones/iphone-${model}-small.jpg`
//   console.log('url: ', url)
//   return <StaticImage src={url} />
// }
const SelectPhoneImg = ({ model }) => {
  const model1 = '6'
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "phones/iphone-6-small.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allFile(filter: { relativePath: { regex: "/small/" } }) {
  //       edges {
  //         node {
  //           id
  //           publicURL
  //         }
  //       }
  //     }
  //   }
  // `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    console.log('img not found')
    return <div>Picture not found</div>
  }
  console.log('data: ', data)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
export default SelectPhoneImg
