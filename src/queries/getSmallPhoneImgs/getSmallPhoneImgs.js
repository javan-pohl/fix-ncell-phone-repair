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

  const phoneImages = {}
  const {
    allFile: { edges },
  } = data

  edges.forEach(({ node }) => {
    phoneImages[node.name] = node.publicURL
  })
  if (image !== undefined) {
    const name = image.replace('.jpg', '')
    return phoneImages[name]
  }
  console.log('getSmallPhoneImgs: ', phoneImages)
  return phoneImages
}

export default getImages
