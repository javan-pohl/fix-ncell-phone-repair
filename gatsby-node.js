exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allPhonesJson {
        nodes {
          id
          make
          model
          slug
        }
      }
      allLocationsJson {
        nodes {
          name
        }
      }
    }
  `)
  console.log('locations: ', data.allLocationsJson)
  data.allPhonesJson.nodes.forEach((node) => {
    node.image = `${node.make}-${node.model}-small.jpg`
      .replace(' ', '-')
      .toLowerCase()
    // actions.createPage({
    //   id: node.id,
    //   path: node.slug,
    //   component: require.resolve('./src/pages/templates/phones.js'),
    //   context: { phone: node },
    // })
    data.allLocationsJson.nodes.forEach((locNode) => {
      const locName = locNode.name
      const urlPath = `/${locName.toLowerCase()}${node.slug}`
      console.log('url slug: ', urlPath)
      actions.createPage({
        id: node.id + locNode.id,
        path: urlPath,
        component: require.resolve('./src/pages/templates/phones.js'),
        context: { phone: node, location: locName },
      })
    })
  })
}
