import { useState } from "react"
import { motion } from "framer-motion"

import heroImage from "../../assets/slider-layer-1.png"
import { HiArrowRight } from "react-icons/hi"

export default function Hero() {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="w-full min-h-[83vh] flex items-center justify-center md:px-36 lg:px-48 px-5 relative">
      <section className="w-2/3 md:w-1/3 h-full flex justify-end flex-col lg:pb-16 absolute z-20 left-44">
        <p className="font-Poppins capitalize tracking-wider text-lightGreen">
          We are expert team
        </p>

        <h2 className="font-bold text-lg md:text-3xl mt-3 py-2">
          We sell products that makes people&apos;s{" "}
          <span className="text-lightGreen">lives</span> easier & better.
        </h2>
        <p className="font-light text-xs md:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          accusamus reiciendis doloremque dolor eligendi inventore?
        </p>

        <div
          className="w-44 md:w-56 flex justify-center items-center bg-gray-400  py-3 px-9 relative overflow-clip rounded-3xl cursor-pointer mt-5"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <motion.div
            animate={{
              scale: isHover ? 75 : 1,
              backgroundColor: isHover ? "#22c55e" : "white",
            }}
            transition={{
              duration: 0.2,
              ease: "easeIn",
            }}
            className="w-[6px] h-[6px] rounded-full bg-black absolute left-8"
          ></motion.div>
          <motion.div
            animate={{
              x: isHover ? -8 : 8,
              color: isHover ? "white" : "black",
            }}
            className="relative z-10"
          >
            <p className="font-Poppins text-xs md:text-sm font-semibold">
              Explore More
            </p>
          </motion.div>
          <motion.div className="flex  items-center absolute right-2">
            <HiArrowRight color="white" />
          </motion.div>
        </div>
        {/* <button className="w-40 h-10 bg-[#654321] text-white my-5 text-sm font-semibold font-Poppins">
          Explore More
        </button> */}
      </section>
      <div className="w-2/3 h-full absolute overflow-hidden z-0 right-36 ">
        <img
          src={heroImage}
          alt="peoples gathering in shopping"
          className="w-full h-full object-cover transform  relative left-36"
        />
      </div>
    </div>
  )
}
