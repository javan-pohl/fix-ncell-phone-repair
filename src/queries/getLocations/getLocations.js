// setting this up pretty statically for now to test the url slug functionality

// const Locations = [
//   'Denver',
//   'Westminster',
//   'Boulder',
//   'Thornton',
//   'Golden',
//   'Lafayette',
//   'Louisville',
// ]

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
      nodes: names,
    },
  } = data
  return { names }
}
export default getLocations
