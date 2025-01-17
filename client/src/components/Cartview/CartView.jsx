import PropTypes from "prop-types"
import { FaXmark } from "react-icons/fa6"

export default function CartView({ items, onIsClicked, isClicked }) {
  return (
    <>
      <div
        onClick={() => onIsClicked(false)}
        className={`fixed w-screen h-screen bg-gray-900/50 overflow-hidden z-40 top-0 cursor-pointer`}
      />
      <div
        className={
          isClicked
            ? "fixed right-0 top-0 h-screen w-[50vw] bg-white z-50 transition duration-300 "
            : "fixed right-[-100%] top-0 h-screen w-[50vw] bg-white z-50 transition duration-300 "
        }
      >
        <span
          onClick={() => onIsClicked(false)}
          className="flex items-center justify-center mx-5 my-5 bg-black rounded-full cursor-pointer w-7 h-7"
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
  isClicked: PropTypes.bool,
}
