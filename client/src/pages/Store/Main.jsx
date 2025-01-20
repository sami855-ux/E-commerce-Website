import { useSelector, useDispatch } from "react-redux"
import { CiSearch } from "react-icons/ci"
import { FaStar } from "react-icons/fa6"
import PropTypes from "prop-types"
import { useEffect } from "react"

import { fetchData } from "../../StateMangament/Product"
import girlImage from "../../assets/gril.png"
import Loader from "../../ui/LoaderProduct/Loader"
import { urlFor } from "../../../../server/lib/client.js"
import { pageChange } from "../../StateMangament/Product"

export default function Main() {
  const dispatch = useDispatch()
  const { totalPages, currentPage } = useSelector((store) => store.productSlice)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className="w-full min-h-[200vh] pt-5 flex gap-4">
      <section className="w-72 h-[80vh] rounded-md py-3 flex items-center flex-col px-2">
        <form className="flex items-center justify-between w-full gap-2 px-5 mb-7 bg-slate-50">
          <input
            type="text "
            placeholder="Search for categories..."
            className="w-[70%] h-10 px-1 text-sm text-gray-600 outline-none bg-slate-50"
          />
          <CiSearch className="w-5 h-5 cursor-pointer" />
        </form>

        <div className="w-full ">
          <h2 className="pb-5 text-sm font-semibold text-gray-800">
            Categories
          </h2>
          <p className="pl-3 mb-3 text-sm text-gray-700 cursor-pointer">
            Cloths
          </p>
          <p className="pl-3 mb-3 text-sm text-gray-700 cursor-pointer">
            Cosmetics
          </p>
          <p className="pl-3 mb-3 text-sm text-gray-700 cursor-pointer">
            Shoes
          </p>
          <p className="pl-3 mb-3 text-sm text-gray-700 cursor-pointer">
            Electronics
          </p>
          <p className="pl-3 mb-3 text-sm text-gray-700 cursor-pointer">
            Others
          </p>
        </div>
      </section>
      <section className="w-[80vw] min-h-screen py-5">
        <div className="flex items-center justify-center w-full h-64 rounded-md bg-gradient-to-t from-blue-500 to-green-500">
          <section className="">
            <h2 className="pb-4 text-4xl font-semibold text-white capitalize">
              Feel free to wonder!
            </h2>
            <p className="text-sm font-light text-white font-Poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum
              saepe accusamus!
            </p>
          </section>
          <img src={girlImage} alt="Logo" className="w-64 h-full" />
        </div>
        <div className="w-full h-24 py-2 mt-2 ">
          <h2 className="pb-3 text-xl font-semibold text-gray-700">Items</h2>
          <section className="flex items-center h-10 gap-4">
            <span className="px-4 text-sm ease-in border rounded-lg cursor-pointer border-lightGreen hover:bg-lightGreen hover:text-white">
              $
            </span>
            <span className="px-4 text-sm ease-in border rounded-lg cursor-pointer border-lightGreen hover:bg-lightGreen hover:text-white">
              $$
            </span>
            <span className="px-4 text-sm ease-in border rounded-lg cursor-pointer border-lightGreen hover:bg-lightGreen hover:text-white">
              $$$
            </span>
            <span className="px-2 text-sm ease-in border rounded-lg cursor-pointer border-lightGreen hover:bg-lightGreen hover:text-white">
              $$$$
            </span>
          </section>
        </div>

        <ShopMain />
        <div className="flex items-center justify-center w-full h-16 mt-3">
          <button
            onClick={() => dispatch(pageChange(currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 mx-2 text-sm text-white bg-blue-600 cursor-pointer w-fit"
          >
            Previous
          </button>
          <span className="text-sm">
            {" "}
            Page {currentPage} of {totalPages}{" "}
          </span>
          <button
            onClick={() => dispatch(pageChange(currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 mx-2 text-sm text-white bg-blue-600 cursor-pointer w-fit"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  )
}

const ShopMain = () => {
  const { status, dataPerPage } = useSelector((store) => store.productSlice)

  return (
    <div className="grid justify-center w-full grid-cols-4 gap-2 min-h-fit">
      {status === "loading" && <Loader />}
      {status === "ready" &&
        dataPerPage.map((product, productIndex) => (
          <ShopList product={product} key={productIndex} />
        ))}
    </div>
  )
}

const ShopList = ({ product }) => {
  const { image, productName, price, rating, description } = product

  return (
    <section className="w-[250px] h-[240px] bg-slate-200 mb-2 p-2 rounded-md shadow-md cursor-pointer">
      <img
        src={urlFor(image)}
        alt="product image"
        className="w-full h-[130px] object-contain"
      />
      <h2 className="px-1 pt-3 pb-1 font-semibold text-gray-700 capitalize">
        {productName}
      </h2>
      <p className="px-1 text-xs font-light capitalize">{description}</p>

      <section className="flex items-center justify-between w-full px-1 pt-2 h-fit">
        <span className="text-xs text-blue-600">{`$${price}`}</span>
        <section className="flex items-center w-32 h-5">
          {Array.from({ length: rating }).map((_, index) => (
            <FaStar stroke="orange" fill="orange" size={15} key={index} />
          ))}
        </section>
      </section>
    </section>
  )
}

ShopList.propTypes = {
  product: PropTypes.object.isRequired,
}
