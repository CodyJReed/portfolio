const path = require("path")

// create dynamic pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`
    query getBlogs {
      blogs: allDatoCmsBlog(filter: {}) {
        nodes {
          date(formatString: "MMMM of, YYYY")
          description
          slug
          title
          image {
            fluid {
              src
            }
          }
          content
          id
          category
        }
      }
    }
  `)
  res.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        data: { ...blog },
      },
    })
  })
}
