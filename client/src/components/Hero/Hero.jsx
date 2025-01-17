import { useState } from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { client, urlFor } from "../../../../server/lib/client"

import { HiArrowRight } from "react-icons/hi"
import Loader from "../../ui/LoaderImg/loader"

export default function Hero() {
  const [isHover, setIsHover] = useState(false)
  const [data, setData] = useState([])

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
    <div className="w-full min-h-[83vh] flex items-center justify-center md:px-36 lg:px-48 px-5 relative">
      <section className="absolute z-20 flex flex-col justify-end w-2/3 h-full md:w-1/3 lg:pb-16 left-44">
        <p className="tracking-wider capitalize font-Poppins text-lightGreen">
          We are expert team
        </p>

        <h2 className="py-2 mt-3 text-lg font-bold md:text-3xl">
          We sell products that makes people&apos;s{" "}
          <span className="text-lightGreen">lives</span> easier & better.
        </h2>
        <p className="text-xs font-light md:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          accusamus reiciendis doloremque dolor eligendi inventore?
        </p>

        <div
          className="relative flex items-center justify-center py-3 mt-5 bg-gray-400 cursor-pointer w-44 md:w-56 px-9 overflow-clip rounded-3xl"
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
            <p className="text-xs font-semibold font-Poppins md:text-sm">
              Explore More
            </p>
          </motion.div>
          <motion.div className="absolute flex items-center right-2">
            <HiArrowRight color="white" />
          </motion.div>
        </div>
        {/* <button className="w-40 h-10 bg-[#654321] text-white my-5 text-sm font-semibold font-Poppins">
          Explore More
        </button> */}
      </section>
      <div className="absolute z-0 w-2/3 h-full overflow-hidden right-36 ">
        {data && data.length > 0 ? (
          <img
            src={urlFor(data[1]?.image)}
            alt="peoples gathering in shopping"
            className="relative object-cover w-full h-full transform left-36"
          />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}
