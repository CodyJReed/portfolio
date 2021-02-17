/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "creed Portfolio",
    description: "A portfolio site built with Gatsby, DatoCMS, and Netlify",
    author: "@creed",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // Where the animated svgs are.
        },
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
}
