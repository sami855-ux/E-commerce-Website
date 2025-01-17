import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaAngleRight,
} from "react-icons/fa"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

import { client, urlFor } from "../../../../server/lib/client"

export default function Footer() {
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
  return (
    <div className="w-full h-[58vh] flex justify-center items-center flex-col gap-3 mt-16">
      <section className="w-full md:w-[87%] min-h-96 flex flex-col md:flex-row gap-7 justify-center items-center mt-32 md:mt-0 ">
        <div className="w-[420px] h-full">
          {data && data.length > 0 ? (
            <img
              src={urlFor(data[0].image)}
              alt="Logo image"
              className="w-32 h-20"
            />
          ) : null}
          <p className="pt-5 text-xs text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            autem a recusandae reprehenderit quo quisquam id, perspiciatis
            similique quibusdam explicabo? Totam hic dolore adipisci voluptatem?
          </p>

          <section className="flex items-center w-full gap-3 h-28">
            <Icon icon={<FaFacebookF color="white" />} href="#" />
            <Icon icon={<FaTwitter color="white" />} href="#" />
            <Icon icon={<FaInstagram color="white" />} href="#" />
            <Icon icon={<FaLinkedinIn color="white" />} href="#" />
          </section>
        </div>
        <div className="flex flex-col w-full min-h-full gap-3 pl-12 md:w-fit md:pl-0 md:flex-row">
          <FooterSection
            header=" Useful links"
            textList={[
              "Privacy Policy",
              "Our Service",
              "About Website",
              "Forums",
              "Categories",
              "Latest Products",
              "Testimonials",
            ]}
          />
          <FooterSection
            header="Quick access"
            textList={[
              "MarketPlaces",
              "Licensees",
              "Review",
              "Refund",
              "Contact us",
              "Support Policy",
            ]}
          />
          <FooterSection
            header="More links"
            textList={[
              "About us",
              "Our projects",
              "Our office",
              "Our location",
              "Who we are?",
            ]}
          />
        </div>
      </section>
      <div className="flex items-center justify-between w-full px-40 min-h-16 bg-gradient-to-r from-blue-500 to-green-400">
        <p className="text-xs text-white"> &copy; All right are reserved</p>

        <section className="flex gap-4 ">
          <a href="#" className="text-xs text-white">
            Privacy policy
          </a>
          <a href="#" className="text-xs text-white">
            About us
          </a>
          <a href="#" className="text-xs text-white">
            Contact
          </a>
        </section>
      </div>
    </div>
  )
}

const Icon = ({ icon, href }) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center rounded-full cursor-pointer w-9 h-9 bg-lightGreen"
    >
      {icon}
    </a>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

const FooterSection = ({ header, textList }) => {
  return (
    <section className="w-[200px]">
      <h2 className="py-3 text-xs font-semibold text-gray-700 uppercase">
        {header}
      </h2>
      <div className="relative w-[90%] h-5 flex justify-center items-center">
        <span className="w-2 h-2 rounded-full bg-brown/50"></span>
        <span className="w-full h-[1px] bg-brown/50"></span>
      </div>
      <div className="flex flex-col justify-center w-full gap-1">
        {textList.map((list, listIndex) => (
          <FooterList text={list} key={listIndex} />
        ))}
      </div>
    </section>
  )
}

FooterSection.propTypes = {
  header: PropTypes.string.isRequired,
  textList: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const FooterList = ({ text }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <motion.section
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      animate={{
        x: isHover ? 5 : 0,
      }}
      className="flex items-center w-full h-5 gap-2 cursor-pointer"
    >
      <FaAngleRight color="#22c55e" size={15} />
      <motion.span
        animate={{
          fontWeight: isHover ? "bold" : "",
          color: isHover ? "#22c55e" : "",
        }}
        className="text-xs text-gray-700"
      >
        {text}
      </motion.span>
    </motion.section>
  )
}

FooterList.propTypes = {
  text: PropTypes.string.isRequired,
}
