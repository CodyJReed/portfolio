import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  {
    info: allDatoCmsBlog(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        date(formatString: "MMMM of, YYYY")
        description
        slug
        title
        image {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        content
        id
        category
      }
    }
  }
`

// function useOnScreen(options) {
//   const [ref, setRef] = React.useState(null)
//   const [visible, setVisible] = React.useState(false)

//   React.useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setVisible(entry.isIntersecting)
//     }, options)

//     if (ref) {
//       observer.observe(ref)
//     }

//     return () => {
//       if (ref) {
//         observer.unobserve(ref)
//       }
//     }
//   }, [ref, options])
//   return [setRef, visible]
// }

export default function Home({ data }) {
  const {
    info: { nodes: blogs },
  } = useStaticQuery(query)
  // const [setRef, visible] = useOnScreen({
  //   threshold: "1",
  // })

  return (
    <div>
      <Layout>
        <Hero />
        <Projects />
        <Blogs blogs={blogs} title="Blogs" />
      </Layout>
    </div>
  )
}
