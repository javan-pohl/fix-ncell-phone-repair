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
          repairs {
            battery_repair_price
            charging_port_repair_price
            screen_repair_price
          }
        }
      }
    }
  `)

  const {
    allPhonesJson: { nodes },
  } = data
  // console.log('nodes: ', nodes)
  return { nodes }
}

export default getPhones
