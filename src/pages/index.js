import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"

function useOnScreen(options) {
  const [ref, setRef] = React.useState(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, options)

    if (ref) {
      observer.observe(ref)
    }

    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [ref, options])
  return [setRef, visible]
}

export default function Home() {
  const [setRef, visible] = useOnScreen({
    threshold: "0.3",
  })

  return (
    <div>
      <Layout>
        <Hero />
        <div className="h-72" ref={setRef} />
        {visible && <About />}
      </Layout>
    </div>
  )
}
