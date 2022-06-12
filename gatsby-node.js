const loc = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const tpl_page = loc.resolve(`src/pages/articlePage.js`)
  const result = await graphql(`
  {
    allNodeArticle {
      nodes {
        path {
          alias
        }
        id
      }
    }
  }`)
  
   // Handle errors
   if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allNodeArticle.nodes.forEach(( node ) => {
    createPage({
      path: node.path.alias,
      component: tpl_page,
      context: {
        articleId: node.id,
      },
    })
  })
}