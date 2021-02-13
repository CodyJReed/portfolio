import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="lg:max-w-7xl mx-auto">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
