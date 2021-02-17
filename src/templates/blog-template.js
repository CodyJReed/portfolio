import React from "react"
import ReactMarkdown from "react-markdown"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import SEO from "../components/SEO"

function blogTemplate(props) {
  const {
    pathContext: {
      data: {
        title,
        description,
        content,
        image: { fluid },
      },
    },
  } = props
  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="min-h-screen p-7 mt-32 ">
        <div className="md:w5/12 mx-auto lg:max-w-7xl p-4 bg-gray-200 rounded border-4 border-solid border-gray-800">
          <article className="blog-content ">
            <Image fluid={fluid} alt="ingredients" className=" rounded h-80 " />
            <ReactMarkdown source={content} />
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default blogTemplate
