import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import Something from "../assets/wave.svg"

function Footer() {
  return (
    <section className="relative w-screen truncate">
      <p className="absolute z-20 text-white dark:text-gray-200 bottom-3 right-1/2 flex justify-center items-center transition-colors duration-300">
        &copy; 2025 Creed
        <a
          className="mx-2 cursor-pointer hover:text-gray-300 dark:hover:text-gray-100 transition-colors duration-200"
          href="https://www.linkedin.com/in/cody-reed-287511108/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            className="text-3xl"
            role="img"
            aria-label="LinkedIn Icon"
          />
        </a>
        <a
          className="cursor-pointer hover:text-gray-300 dark:hover:text-gray-100 transition-colors duration-200"
          href="https://github.com/CodyJReed"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-3xl" role="img" aria-label="Github Icon" />
        </a>
      </p>
      <Something />
    </section>
  )
}

export default Footer
