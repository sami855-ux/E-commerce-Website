import { useState } from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

import imgOne from "../../assets/like.png"
import imgTwo from "../../assets/smartphone.png"
import imgThree from "../../assets/user.png"

export default function Service() {
  return (
    <div className="w-full min-h-[65vh] flex justify-center items-center pb-10">
      <section className="md:w-[70%] lg:w-[75%] min-h-96 grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-3 justify-center items-center lg:space-x-3 lg:gap-0">
        <div className="w-[300px] md:h-[240px] lg:w-[240px] lg:h-[70%] bg-gradient-to-b from-blue-500 to-green-400 p-4 pt-10 rounded-md mr-3">
          <h2 className="text-lg text-white font-light">Our services</h2>
          <p className="text-xl text-white pt-5 font-semibold">
            We will help you to get best out of any products & fashions
          </p>
        </div>
        <Card
          img={imgOne}
          header="Faster Delivery"
          subheader=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nam omnis "
        />
        <Card
          img={imgTwo}
          header="Online Purchase"
          subheader=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nam omnis "
        />
        <Card
          img={imgThree}
          header="Enormous Products"
          subheader=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nam omnis "
        />
      </section>
    </div>
  )
}

const Card = ({ img, header, subheader }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <motion.div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      animate={{
        y: isHover ? -15 : 0,
      }}
      transition={{
        ease: "easeIn",
        duration: 0.2,
      }}
      className="md:h-ful w-[300px] md:w-[260px] lg:w-[230px] lg:h-[70%] bg-white shadow-md rounded-md px-7 py-5 border border-slate-200 cursor-pointer"
    >
      <motion.img
        animate={{
          rotateY: isHover ? 360 : 0,
        }}
        transition={{ duration: 0.5 }}
        src={img}
        alt="image of the card"
        className="w-14 h-14"
      />
      <motion.h2
        animate={{
          fontWeight: isHover ? "bold" : "",
          color: isHover ? "#01849f" : "",
        }}
        className="text-gray-800 text-lg font-semibold pt-5"
      >
        {header}
      </motion.h2>
      <p className="font-light text-gray-700 text-sm pt-5"> {subheader}</p>
    </motion.div>
  )
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
}
