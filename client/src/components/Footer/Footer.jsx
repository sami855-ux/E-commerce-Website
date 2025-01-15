import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaAngleRight,
} from "react-icons/fa"
import { useState } from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import logo from "../../assets/logo.png"

export default function Footer() {
  return (
    <div className="w-full h-[58vh] flex justify-center items-center flex-col gap-3 mt-16">
      <section className="w-full md:w-[87%] min-h-96 flex flex-col md:flex-row gap-7 justify-center items-center mt-32 md:mt-0 ">
        <div className="w-[420px] h-full">
          <img src={logo} alt="Logo image" className="w-32 h-20" />
          <p className="text-xs text-gray-700 pt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            autem a recusandae reprehenderit quo quisquam id, perspiciatis
            similique quibusdam explicabo? Totam hic dolore adipisci voluptatem?
          </p>

          <section className="w-full h-28 flex items-center gap-3">
            <Icon icon={<FaFacebookF color="white" />} href="#" />
            <Icon icon={<FaTwitter color="white" />} href="#" />
            <Icon icon={<FaInstagram color="white" />} href="#" />
            <Icon icon={<FaLinkedinIn color="white" />} href="#" />
          </section>
        </div>
        <div className="min-h-full w-full md:w-fit pl-12 md:pl-0 flex flex-col md:flex-row gap-3">
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
      <div className="w-full min-h-16 bg-gradient-to-r from-blue-500 to-green-400 px-40 flex items-center justify-between">
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
      className="w-9 h-9 flex justify-center items-center rounded-full bg-lightGreen cursor-pointer"
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
      <h2 className="text-xs font-semibold text-gray-700 py-3 uppercase">
        {header}
      </h2>
      <div className="relative w-[90%] h-5 flex justify-center items-center">
        <span className="w-2 h-2 rounded-full bg-brown/50"></span>
        <span className="w-full h-[1px] bg-brown/50"></span>
      </div>
      <div className="flex justify-center gap-1 flex-col w-full">
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
      className="w-full h-5 flex gap-2 items-center cursor-pointer"
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
