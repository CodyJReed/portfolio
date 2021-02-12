import React from "react"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
import { FaCuttlefish } from "react-icons/fa"
import { GiHamburger } from "react-icons/gi"

export default function Navbar() {
  const [menuToggled, setMenuToggled] = React.useState(false)
  return (
    <nav className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <FaCuttlefish className="text-2xl" />
          <span className="font-semibold text-xl">Reed</span>
        </Link>
      </div>
      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
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
    </nav>
  )
}
