// const { createFilePath } = require('gatsby-source-filesystem')
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === 'PhonesJson') {
//     console.log('onCreateNode: ', node.make, node.model)
//     // const slug = createFilePath({ node, getNode, basePath: 'repairs' })
//     const slug = `/repairs/${node.make}-${node.model}/`
//       .replace(' ', '-')
//       .toLowerCase()
//     console.log('slug: ', slug)
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     })
//   }
// }

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
      // context: { slug: node.slug },
      context: { phone: node },
    })
  })
}
