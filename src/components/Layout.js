import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeProvider } from "../contexts/ThemeContext"

function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="lg:max-w-7xl mx-auto">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
