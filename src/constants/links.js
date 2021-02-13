import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map((link, index) => (
  <li key={index} className="text-center">
    <Link
      to={link.url}
      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent lg:hover:text-base lg:hover:border-indigo-400  hover:text-3xl"
    >
      {link.text}
    </Link>
  </li>
))

export default () => {
  return (
    <ul className="lg:flex items-center justify-content text-base pt-4 lg:pt-0">
      {tempLinks}
    </ul>
  )
}
