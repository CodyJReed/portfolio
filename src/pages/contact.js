import React from "react"

import Layout from "../components/Layout"

export default function contact() {
  return (
    <Layout>
      <div className="py-36 dark:bg-gray-900" />
      <h1
        style={{ fontFamily: "Abril Fatface" }}
        className="animate-fadeIn text-center text-5xl underline mb-28 dark:text-white"
      >
        Contact
      </h1>
      <section className=" h-screen">
        <article className="bg-gray-200 rounded lg:w-1/2 md:w-8/12 w-11/12 mx-auto text-center shadow-xl border-2 border-solid border-gray-800">
          <h3
            className="capitalize text-xl rounded rounded-b-none mb-2"
            style={{ fontFamily: "Abril Fatface" }}
          >
            get in touch
          </h3>
          <form action="https://formspree.io/f/mvovnkqv" method="POST">
            <div>
              <input
                className="w-10/12 rounded pl-2"
                type="text"
                name="name"
                placeholder="name"
              />
            </div>
            <div className="mt-2">
              <input
                className="w-10/12 rounded pl-2"
                type="email"
                name="email"
                placeholder="email"
              />
            </div>
            <div className="my-2">
              <textarea
                className="w-10/12 rounded pl-2"
                name="message"
                rows="5"
                placeholder="message"
              />
            </div>
            <button
              className="uppercase text-white bg-indigo-400 w-full py-2 hover:bg-indigo-500 cursor-pointer"
              type="submit"
            >
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}
