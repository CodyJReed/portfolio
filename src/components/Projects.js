import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { BsFillCollectionPlayFill, BsLockFill } from "react-icons/bs"

const query = graphql`
  {
    allDatoCmsProject {
      nodes {
        description
        title
        url
        image {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        id
        viewable
      }
    }
  }
`

function Projects({ data }) {
  const {
    allDatoCmsProject: { nodes },
  } = useStaticQuery(query)
  return (
    <>
      <h1
        style={{ fontFamily: "Abril Fatface" }}
        className="animate-fadeIn text-center text-5xl underline"
      >
        Projects
      </h1>
      <section className="my-40 mx-2 flex md:flex-row-reverse flex-col-reverse items-center">
        {nodes.map(node => (
          <Project
            title={node.title}
            url={node.url}
            description={node.description}
            key={node.id}
            viewable={node.viewable}
            fluid={node.image.fluid}
          />
        ))}
      </section>
    </>
  )
}

function Project(props) {
  const { title, fluid, description, url, viewable } = props
  return (
    <div className="relative p-6 my-2 mx-auto border-2 border-solid border-gray-800 md:w-5/12 w-full rounded-xl shadow-2xl">
      {!viewable && (
        <div
          title="Coming soon..."
          className="absolute top-0 right-0 left-0 bottom-0 h-full z-20 bg-gray-800 bg-opacity-80 rounded"
        >
          <h2 className="text-4xl text-white font-bold absolute top-1/2 left-1/3">
            LOCKED
          </h2>
        </div>
      )}
      <h2
        style={{ fontFamily: "Abril Fatface" }}
        className={`text-xl ${title.includes("Trellis") && "flex"}`}
      >
        {title} {title.includes("Trellis") && <BsLockFill />}
      </h2>
      <Image fluid={fluid} alt="PAGR Prescritpions" className="my-4 rounded" />

      <p className="my-4">{description}</p>
      {url !== "" && (
        <button
          title="Play Demo"
          type="button"
          className="px-4 py-2 bg-blue-300 border-2 border-solid border-gray-800 rounded cursor-pointer hover:bg-blue-400"
          style={{ transition: "background-color .5s linear" }}
        >
          <a href={url} target="_blank" rel="noreferrer">
            <BsFillCollectionPlayFill />
          </a>
        </button>
      )}
    </div>
  )
}

export default Projects
