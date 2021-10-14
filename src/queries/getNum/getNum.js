import { useStaticQuery, graphql } from 'gatsby'

function getNum() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          phone
        }
      }
    }
  `)
  const {
    site: {
      siteMetadata: { phone },
    },
  } = data
  return phone
}

export default getNum
