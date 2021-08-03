import { useStaticQuery, graphql } from 'gatsby'

function getTemplate() {
  const data = useStaticQuery(graphql`
    query getTemplate{
      site {
        siteMetadata {
          phoneTemplate {
            name
            link
            pageURL
          }
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: {
        phoneTemplate: { name, link, pageURL },
      },
    },
  } = data
  return { template: { name, link, pageURL } }
}
export default getTemplate
