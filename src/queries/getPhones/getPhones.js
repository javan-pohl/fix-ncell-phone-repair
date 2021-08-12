import { useStaticQuery, graphql } from 'gatsby'
// data comes from /src/data/phones.json

function getPhones() {
  const data = useStaticQuery(graphql`
    query {
      allPhonesJson {
        nodes {
          id
          make
          model
          slug
        }
      }
    }
  `)

  const {
    allPhonesJson: { nodes },
  } = data
  // console.log('getPhones Nodes: ', nodes)
  return { nodes }
}

export default getPhones
