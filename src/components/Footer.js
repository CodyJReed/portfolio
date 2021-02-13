import { clearConfigCache } from "prettier"
import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import Something from "../assets/wave.svg"

function Footer() {
  return (
    <section className="relative w-screen truncate">
      <p className="absolute z-20 text-white bottom-3 right-1/2 flex justify-center items-center">
        &copy; 2021 Creed
        <a
          className="mx-2 cursor-pointer"
          href="https://www.linkedin.com/in/cody-reed-287511108/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a
          className="cursor-pointer"
          href="https://github.com/CodyJReed"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-3xl" />
        </a>
      </p>
      <Something />
    </section>
  )
}

export default Footer
