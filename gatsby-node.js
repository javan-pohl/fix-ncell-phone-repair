exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
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
      allLocationsJson {
        nodes {
          name
        }
      }
      allSitePage {
        nodes {
          path
        }
      }
      allFile(
        filter: { absolutePath: { regex: "/pages/" }, name: { ne: "404" } }
      ) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  // console.log('pages: ', data.allFile.edges)
  // console.log('phones: ', data.allPhonesJson.nodes)
  data.allPhonesJson.nodes.forEach((node) => {
    node.image = `${node.make}-${node.model}-small.jpg`
      .replace(' ', '-')
      .toLowerCase()

    actions.createPage({
      id: node.id,
      path: node.slug,
      component: require.resolve('./src/pageTemplates/phonePage.js'),
      context: { phone: node },
    })
    data.allLocationsJson.nodes.forEach((locNode) => {
      const locName = locNode.name
      const urlPath = `/${locName.toLowerCase()}${node.slug}`
      actions.createPage({
        id: node.id + locNode.id,
        path: urlPath,
        component: require.resolve('./src/pageTemplates/phonePage.js'),
        context: { phone: node, location: locName },
      })
    })
  })
  data.allLocationsJson.nodes.forEach((locNode) => {
    const locName = locNode.name
    const urlPath = `/${locName.toLowerCase()}/repairs/`
    actions.createPage({
      id: `${locNode.id}/${locName}`,
      path: urlPath,
      component: require.resolve('./src/pages/repairs.js'),
      context: { location: locName },
    })
  })
}
