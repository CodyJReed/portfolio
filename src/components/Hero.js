import React from "react"
import "@fontsource/abril-fatface"
import Image from "gatsby-image"
// import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    datoCmsHero {
      image {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      title
      id
    }
  }
`

function Hero({ data }) {
  const {
    datoCmsHero: {
      image: { fluid },
    },
    title,
  } = useStaticQuery(query)
  return (
    <header
      style={{ height: "90vh" }}
      className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2"
    >
      <div className="flex-1 flex justify-around items-center sm:flex-row flex-col-reverse">
        <article className="max-w-lg">
          <h1 style={{ fontFamily: "Abril Fatface" }} className="text-5xl">
            Hi, I'm Cody,{" "}
            <span
              role="img"
              aria-label="angel"
              className="relative text-sm right-7 bottom-6"
            >
              🍄
            </span>
          </h1>
          <h2 className="my-2">
            a <span className="font-semibold">Web Developer</span> and{" "}
            <span className="font-semibold">Digital Nomad</span> currently
            located in RNO
          </h2>
          <p>
            I specialize in Javascript, Responsive UI/UX Development, and APIs.
          </p>

          <p className="my-4">
            I believe that <span className="font-semibold">Javascript</span>{" "}
            solutions are the future of work, allowing teams to work faster, and
            place their focus on design, accessibility, and execution of
            products.
          </p>
        </article>
        <section className="rounded-full lg:w-80 md:w-40  lg:h-80 md:h-40 shadow-4xl">
          <Image
            fluid={fluid}
            alt={title}
            className="rounded-full lg:w-80 md:w-40 lg:h-80 md:h-40"
          />
        </section>
      </div>
    </header>
  )
}

export default Hero
