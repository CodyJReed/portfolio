import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteTitle: title
      }
    }
  }
`

function SEO({ description, title }) {
  const { site } = useStaticQuery(query)
  const { siteDesc, siteTitle } = site.siteMetadata
  return (
    <Helmet 
    htmlAttributes={{ lang: "en" }} 
    title={`${title} | ${siteTitle}`}
    meta={[
      { name: "description", content: description || siteDesc },
    ]}
    link={[
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ]}
    >
      <meta name="description" content={description || siteDesc} />
    </Helmet>
  )
}

export default SEO
