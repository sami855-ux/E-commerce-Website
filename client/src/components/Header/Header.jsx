import PropTypes from "prop-types"

import logo from "../../assets/logo.png"

export default function Header() {
  return (
    <div className="w-full h-[75px] bg-white md:w-[78vw] lg:w-[85vw] absolute md:top-4 md:mx-auto md:left-40 md:rounded-3xl flex px-12 md:px-4 items-center justify-between">
      <section className="h-full w-32">
        <img src={logo} alt="image for e-commerce" className="w-28 h-full" />
      </section>

      {/* larger screen menu */}
      <ul className="hidden w-fit h-full md:flex items-center gap-7">
        <Link text="Home" />
        <Link text="Store" />
        <Link text="Blog" />
        <Link text="About" />
        <Link text="Contact" />
      </ul>

      <button className="hidden md:block w-40 h-12 rounded-3xl text-sm bg-green-500">
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
