import { useState } from "react"
import PropTypes from "prop-types"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { NavLink } from "react-router-dom"

import logo from "../../assets/logo.png"

export default function Header() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()

    if (latest > previous && latest > 50) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-120%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="w-full h-[75px] bg-[#f1f1f1] md:w-[78vw] lg:w-[85vw] sticky z-50 md:top-4 md:mx-auto md:left-40 md:rounded-3xl flex px-12 md:px-4 items-center justify-between"
    >
      <section className="h-full w-32">
        <img src={logo} alt="image for e-commerce" className="w-28 h-full" />
      </section>

      {/* larger screen menu */}
      <ul className="hidden w-fit h-full md:flex items-center gap-7">
        <Link text="Home" to="/" />
        <Link text="Store" to="store" />
        <Link text="Blog" to="blog" />
        <Link text="About" to="about" />
        <Link text="Contact" to="contact" />
      </ul>

      <button className="hidden md:block w-40 h-12 rounded-3xl text-sm bg-green-500">
        Free consultation
      </button>
    </motion.div>
  )
}

const Link = ({ text, to }) => {
  return (
    <NavLink to={to} className="text-sm list-none cursor-pointer">
      {text}
    </NavLink>
  )
}

Link.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
}
