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

  const phoneImages = {}
  edges.forEach(({ node }) => {
    phoneImages[node.name] = node.publicURL
  })
  return phoneImages
}

export default getImages
