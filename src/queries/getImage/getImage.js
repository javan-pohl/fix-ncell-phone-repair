import { useStaticQuery, graphql } from 'gatsby'

function getImage({ image }) {
  const data = useStaticQuery(graphql`
    query getImage{
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

export default getImage
