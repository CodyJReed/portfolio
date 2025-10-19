import React from "react"
import SEO from "../components/SEO"
import Projects from "../components/Projects"
import Layout from "../components/Layout"

export default function projects() {
  return (
    <Layout>
      <SEO title="Projects" descritpion="creed projects" />
      <div className="py-36 dark:bg-gray-900" />
      <Projects />
    </Layout>
  )
}
