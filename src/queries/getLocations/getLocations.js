import { useStaticQuery, graphql } from 'gatsby'
// data comes from /src/data/phones.json

function getLocations() {
  const data = useStaticQuery(graphql`
    query {
      allLocationsJson {
        nodes {
          name
        }
      }
    }
  `)
  const {
    allLocationsJson: {
      nodes: locations,
    },
  } = data
  return { locations }
}
export default getLocations
