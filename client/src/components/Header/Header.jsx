import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

import CartView from "../Cartview/CartView"
import { client, urlFor } from "../../../../server/lib/client"
import { useSelector } from "react-redux"

export default function Header({ items = [] }) {
  const { cartData } = useSelector((store) => store.productSlice)
  const [isClicked, setIsClicked] = useState(false)
  const [data, setData] = useState([])
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = '*[_type == "images"]'
        const result = await client.fetch(query)
        setData(result)
      } catch (err) {
        console.log(`Error: ${err}`)
      }
    }

    fetchData()
  }, [])

  console.log(data)
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
          {data && data.length > 0 ? (
            <img
              src={urlFor(data[0].image)}
              alt="image for e-commerce"
              className="h-full w-28"
            />
          ) : null}
        </section>

        {/* larger screen menu */}
        <ul className="items-center hidden h-full w-fit md:flex gap-7">
          <Link text="Home" to="/" />
          <Link text="Store" to="/store" />
          <Link text="Blog" to="/blog" />
          <Link text="About" to="/about" />
          <Link text="Contact" to="/contact" />
        </ul>

        <div className="relative w-fit h-full flex items-center justify-center">
          <span
            className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-lightGreen"
            onClick={() => setIsClicked(true)}
          >
            <FaCartShopping color="white" />
          </span>

          {cartData.length > 0 ? (
            <span className="text-xs absolute top-2 right-0 w-4 h-4 rounded-full bg-lightGreen flex items-center justify-center">
              {" "}
              {cartData.length}
            </span>
          ) : null}
        </div>
      </motion.div>
      {isClicked ? (
        <>
          <CartView
            onIsClicked={setIsClicked}
            items={items}
            isClicked={isClicked}
          />
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
