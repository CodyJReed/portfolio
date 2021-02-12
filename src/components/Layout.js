import React from "react"
import Navbar from "./Navbar"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-2 mb-48" />
      {children}
    </>
  )
}

export default Layout
