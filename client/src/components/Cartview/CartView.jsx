import PropTypes from "prop-types"
import { FaXmark } from "react-icons/fa6"

export default function CartView({ items, onIsClicked }) {
  return (
    <>
      <div
        onClick={() => onIsClicked(false)}
        className={`fixed w-screen h-screen bg-gray-900/50 overflow-hidden z-40 top-0 cursor-pointer`}
      />
      <div className="fixed right-0 top-0 h-screen w-[50vw] bg-white z-50">
        <span
          onClick={() => onIsClicked(false)}
          className="w-7 h-7 rounded-full bg-black flex items-center justify-center my-5 mx-5 cursor-pointer"
        >
          <FaXmark color="white" />
        </span>{" "}
        {items.length === 0 ? (
          <p className="text-sm">There is no item here</p>
        ) : null}
      </div>
    </>
  )
}

CartView.propTypes = {
  items: PropTypes.array.isRequired,
  onIsClicked: PropTypes.func,
}
