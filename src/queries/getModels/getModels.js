import { useStaticQuery, graphql } from 'gatsby'

function getModels() {
  const data = useStaticQuery(graphql`
    query getModels {
      site {
        siteMetadata {
          phones {
            model
          }
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { phones: models },
    },
  } = data

  return { models }
}

export default getModels
