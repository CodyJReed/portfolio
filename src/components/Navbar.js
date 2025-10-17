import React from "react"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
import { FaCuttlefish, FaSun, FaMoon } from "react-icons/fa"
import { GiHamburger } from "react-icons/gi"
import { useTheme } from "../contexts/ThemeContext"

export default function Navbar() {
  const [menuToggled, setMenuToggled] = React.useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return null
  }

  return (
    <nav
      className={`lg:px-16 px-6 bg-white dark:bg-gray-900 flex flex-wrap items-center lg:py-0 py-2 mt-2 fixed -top-2 w-full z-30 shadow-sm dark:shadow-gray-800 transition-colors duration-300`}
    >
      <div className="flex-1 flex justify-between items-center">
        <Link to="/" className="flex items-center text-gray-900 dark:text-white">
          <FaCuttlefish className="text-2xl" />
          <span className="font-semibold text-xl">Reed</span>
        </Link>
        
        {/* Desktop Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="hidden lg:flex p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 mr-4"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <FaMoon className="text-gray-700 dark:text-gray-300" />
          ) : (
            <FaSun className="text-white" />
          )}
        </button>
      </div>
      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block text-gray-900 dark:text-white">
        <GiHamburger className="text-4xl animate-wiggle" />
      </label>
      <input
        type="checkbox"
        className="hidden"
        id="menu-toggle"
        onClick={() => setMenuToggled(!menuToggled)}
      />

      <div
        className={`${
          menuToggled ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto w-full`}
        id="menu"
      >
        <nav>
          <PageLinks />
        </nav>
      </div>
      
      {/* Mobile Floating Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="lg:hidden fixed bottom-6 right-6 p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 shadow-2xl z-50"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <FaMoon className="text-gray-700 dark:text-gray-300 text-xl" />
        ) : (
          <FaSun className="text-white text-xl" />
        )}
      </button>
    </nav>
  )
}
