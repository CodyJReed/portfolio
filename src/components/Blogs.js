import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

function Blogs({ blogs, title }) {
  return (
    <section>
      <h1
        style={{ fontFamily: "Abril Fatface" }}
        className="animate-fadeIn text-center text-5xl underline"
      >
        {title}
      </h1>
      <section className="flex-col my-40 mx-2 flex md:flex-row items-center justify-center">
        {blogs.map(blog => (
          <Blog key={blog.id} {...blog} />
        ))}
      </section>
    </section>
  )
}

function Blog({ id, title, image, date, category, slug, description }) {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <article className="max-w-4xl mx-auto p-6 my-2 border-2 border-solid border-gray-800 rounded-xl shadow-2xl">
        <Image
          fluid={image.fluid}
          alt="ingredients"
          className="my-4 rounded h-40 "
        />
        <div className="grid grid-rows-1 bg-gray-100 p-4 rounded">
          <h4 style={{ fontFamily: "Abril Fatface" }} className="text-xl my-2">
            {title}
          </h4>
          <p className="pb-4">{description}</p>
          <div className="flex justify-between items-center">
            <p className="font-bold text-gray-500 inline-block bg-gray-800 p-2 rounded uppercase text-md">
              {category}
            </p>
            <p className="font-bold text-gray-500">{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Blogs
