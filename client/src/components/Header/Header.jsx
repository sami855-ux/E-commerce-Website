import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import { FaCartShopping } from "react-icons/fa6"

import logo from "../../assets/logo.png"
import CartView from "../Cartview/CartView"

export default function Header({ items = [] }) {
  const [isClicked, setIsClicked] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()

    if (latest > previous && latest > 50) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <>
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
        className="w-full h-[75px] bg-[#f1f1f1] md:w-[78vw] lg:w-[85vw] sticky z-30 md:top-4 md:mx-auto md:left-40 md:rounded-3xl flex px-12 md:px-4 items-center justify-between"
      >
        <section className="w-32 h-full">
          <img src={logo} alt="image for e-commerce" className="h-full w-28" />
        </section>

        {/* larger screen menu */}
        <ul className="items-center hidden h-full w-fit md:flex gap-7">
          <Link text="Home" to="/" />
          <Link text="Store" to="/store" />
          <Link text="Blog" to="/blog" />
          <Link text="About" to="/about" />
          <Link text="Contact" to="/contact" />
        </ul>

        <span
          className="w-10 h-10 rounded-full flex items-center justify-center bg-lightGreen cursor-pointer"
          onClick={() => setIsClicked(true)}
        >
          <FaCartShopping color="white" />
        </span>
      </motion.div>
      {isClicked ? (
        <>
          <CartView onIsClicked={setIsClicked} items={items} />
        </>
      ) : null}
    </>
  )
}

Header.propTypes = {
  items: PropTypes.array,
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
