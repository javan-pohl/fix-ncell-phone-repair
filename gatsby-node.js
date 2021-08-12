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
    }
  `)
  data.allPhonesJson.nodes.forEach((node) => {
    node.image = `${node.make}-${node.model}-small.jpg`
      .replace(' ', '-')
      .toLowerCase()
    actions.createPage({
      id: node.id,
      path: node.slug,
      component: require.resolve('./src/pages/templates/phones.js'),
      context: { phone: node },
    })
  })
}
