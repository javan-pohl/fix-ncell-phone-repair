import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

function getImages() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/-small/" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  const {
    allFile: {
      edges,
    },
  } = data
  // const {
  //   edges: { node },
  // } = data
  const phoneIMGs = {}
  edges.forEach(({ node }) => {
    // console.log('node: ', node.name)
    phoneIMGs[node.name] = node.publicURL
  })
  // console.log('edges: ', edges)
  console.log('phoneIMGs: ', phoneIMGs)
  return edges
}

export default getImages
