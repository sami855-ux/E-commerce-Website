import PropTypes from "prop-types"

import logo from "../../assets/logo.png"

export default function Header() {
  return (
    <div className="w-full h-[75px] bg-gray-100 md:w-[70vw] md:absolute md:top-4 md:mx-auto md:left-48 md:rounded-3xl flex px-12 items-center justify-between">
      <section className="h-full w-32">
        <img src={logo} alt="image for e-commerce" className="w-28 h-full" />
      </section>

      {/* larger screen menu */}
      <ul className="w-fit h-full flex items-center gap-5">
        <Link text="Home" />
        <Link text="Store" />
        <Link text="Blog" />
        <Link text="About" />
        <Link text="Contact" />
      </ul>

      <button className="w-40 h-12 rounded-3xl text-sm bg-green-500">
        Free consultation
      </button>
    </div>
  )
}

const Link = ({ text }) => {
  return <li className="text-sm list-none cursor-pointer">{text}</li>
}

Link.propTypes = {
  text: PropTypes.string,
}
