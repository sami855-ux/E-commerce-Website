import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { FaStar } from "react-icons/fa6"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import { fetchData } from "../../StateMangament/Product"
import girlImage from "../../assets/gril.png"
import Loader from "../../ui/LoaderProduct/Loader"
import { urlFor } from "../../../../server/lib/client.js"
import { pageChange } from "../../StateMangament/Product"

export default function AllProduct() {
  const dispatch = useDispatch()
  const { totalPages, currentPage } = useSelector((store) => store.productSlice)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <>
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
      </div>

      <ShopMain />
      <div className="flex items-center justify-center w-full h-16 gap-3 mt-3">
        <button
          onClick={() => dispatch(pageChange(currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 mx-2 text-sm text-white bg-blue-600 rounded-md cursor-pointer w-fit"
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
          className="px-3 py-1 mx-2 text-sm text-white bg-blue-600 rounded-md cursor-pointer w-fit"
        >
          Next
        </button>
      </div>
    </>
  )
}

const ShopMain = () => {
  const { status, dataPerPage } = useSelector((store) => store.productSlice)

  return (
    <div className="grid justify-center w-full min-h-screen grid-cols-4 gap-2 min-h-fit">
      {status === "loading" && <Loader />}
      {status === "ready" &&
        dataPerPage.map((product, productIndex) => (
          <ShopList product={product} key={productIndex} />
        ))}
    </div>
  )
}

const ShopList = ({ product }) => {
  const { image, productName, price, rating, description, _id } = product

  return (
    <Link to={`/store/${_id}`}>
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
    </Link>
  )
}

ShopList.propTypes = {
  product: PropTypes.object.isRequired,
}
