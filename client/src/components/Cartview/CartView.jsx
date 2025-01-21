import PropTypes from "prop-types"
import { FaXmark } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import styles from "./CartView.module.css"

import { urlFor } from "../../../../server/lib/client"
import {
  removeFromCart,
  decreaseCount,
  increaseCount,
} from "../../StateMangament/Product"

export default function CartView({ onIsClicked, isClicked }) {
  const { cartData, totalPrice } = useSelector((store) => store.productSlice)

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
          className="flex items-center justify-center mx-5 my-3 bg-black rounded-full cursor-pointer w-7 h-7"
        >
          <FaXmark color="white" />
        </span>{" "}
        <div className="w-full h-[73vh] flex flex-col p-4">
          {cartData.length === 0 ? (
            <p className="text-sm">There is no item here</p>
          ) : (
            <>
              <p className="text-sm text-orange-600 py-2">
                You have {cartData.length} items
              </p>
              <div className="w-full h-[73vh] overflow-scroll flex flex-col items-center justify-center gap-2">
                {cartData.map((item, index) => (
                  <CardItem key={index} item={item} />
                ))}
              </div>
            </>
          )}
        </div>
        <section className="w-full h-32  px-5 py-1">
          <div className="w-full h-7 flex items-center px-5 gap-7 mb-4">
            <span className="font-semibold text-lg text-gray-700 font-Poppins">
              SubTotal:
            </span>
            <span className="font-semibold text-lg text-gray-700 font-Poppins">
              $ {`${totalPrice.toFixed(2)}`}
            </span>
          </div>

          <button
            className={`${styles.button} text-sm font-Poppins bg-gradient-to-r from-blue-600 to-green-500 rounded-md`}
          >
            Pay with strip
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </section>
      </div>
    </>
  )
}

CartView.propTypes = {
  items: PropTypes.array.isRequired,
  onIsClicked: PropTypes.func,
  isClicked: PropTypes.bool,
}

const CardItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="w-[85%] h-32 bg-slate-200 flex items-center rounded-md">
      <section className="w-1/3 h-full flex items-center justify-center">
        <img
          src={urlFor(item.image)}
          alt=""
          className="w-full h-[90%] object-contain"
        />
      </section>

      <section className="w-1/2 h-full">
        <div className="w-full h-16 flex items-center justify-between">
          <span className="text-base font-Poppins font-semibold text-gray-700">
            {item.productName}
          </span>
          <span className="text-sm text-gray-700">$ {item.price}</span>
        </div>
        <div className="w-full h-24 flex items-center justify-between">
          <section className="w-64 flex items-center">
            <button
              onClick={() => dispatch(decreaseCount(item._id))}
              className="px-5 w-16 text-sm bg-blue-500 text-white cursor-pointer mx-2"
            >
              -
            </button>
            <span className="text-sm text-gray-700">{item.count}</span>
            <button
              onClick={() => dispatch(increaseCount(item._id))}
              className="px-5 w-16 text-sm bg-blue-500 text-white cursor-pointer mx-2"
            >
              +
            </button>
          </section>

          <span
            onClick={() => dispatch(removeFromCart(item._id))}
            className="w-5 h-5 rounded-full bg-red-500 cursor-pointer flex items-center justify-center"
          >
            <FaXmark color="white" size={12} />
          </span>
        </div>
      </section>
    </div>
  )
}

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
}
