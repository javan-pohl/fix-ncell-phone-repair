import { useStaticQuery, graphql } from 'gatsby'

function getImages(image) {
  const data = useStaticQuery(graphql`
    query getSmallImages {
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
    allFile: { edges },
  } = data

  const phoneImages = {}
  edges.forEach(({ node }) => {
    phoneImages[node.name] = node.publicURL
  })
  if (image !== undefined) {
    console.log(image)
    const name = image.replace('.jpg', '')
    console.log('name: ', name)
    console.log('resulst: ', phoneImages[name])
    return phoneImages[name]
  }
  return phoneImages
}

export default getImages
