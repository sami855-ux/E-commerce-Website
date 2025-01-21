import { useEffect, useRef } from "react"
import { FaAngleLeft, FaStar } from "react-icons/fa6"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useNavigate, useLocation, useParams } from "react-router-dom"
import { motion } from "framer-motion"

import { addToCart } from "../../StateMangament/Product.jsx"
import { urlFor } from "../../../../server/lib/client.js"

export default function Product() {
  const { productData } = useSelector((state) => state.productSlice)
  const { productId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const btnRef = useRef(null)
  const spanRef = useRef(null)
  const dispatch = useDispatch()

  const {
    image,
    productName,
    price,
    rating,
    description,
    type,
    categories,
    _id,
  } = productData.find((data) => data._id === productId)

  let relatedItems = productData?.filter(
    (data) =>
      data.categories === categories && data.type === type && data._id !== _id
  )
  relatedItems = relatedItems.slice(0, 6)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect()
      const offset = e.offsetX
      const left = `${(offset / width) * 100}%`

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" })
    }

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      )
    }

    btnRef.current.addEventListener("mousemove", handleMouseMove)
    btnRef.current.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      btnRef.current?.removeEventListener("mousemove", handleMouseMove)
      btnRef.current?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="w-full min-h-[150vh]  p-2">
      <section className="w-full h-10 p-2 ">
        <span
          onClick={() => navigate("/store")}
          className="flex items-center justify-center bg-black rounded-full cursor-pointer w-7 h-7"
        >
          <FaAngleLeft size={15} color="white" />
        </span>
      </section>

      <section className="w-full h-[68vh]  flex gap-2 ">
        <section className="flex items-center justify-center w-1/2 h-full">
          <img
            src={urlFor(image)}
            alt=""
            className="object-contain w-1/2 h-1/2"
          />
        </section>
        <section className="w-1/2 h-full p-4">
          <h2 className="pb-2 text-4xl font-bold text-gray-700 capitalize">
            {productName}
          </h2>
          <p className="text-lg font-light capitalize mb-14">{description}</p>

          <span className="text-lg font-semibold text-gray-900 ">{`$${price}`}</span>

          <section className="flex items-center h-5 w-52 mt-7">
            <span className="mr-2 text-sm">({rating} out of 5)</span>
            {Array.from({ length: rating }).map((_, index) => (
              <FaStar stroke="orange" fill="orange" size={15} key={index} />
            ))}
          </section>

          <motion.button
            whileTap={{ scale: 0.985 }}
            ref={btnRef}
            onClick={() => dispatch(addToCart(_id))}
            className="relative w-56 h-10 max-w-xs px-4 py-1 overflow-hidden text-lg font-medium text-white rounded-lg bg-slate-950 mt-7"
          >
            <span className="relative z-10 text-sm pointer-events-none mix-blend-difference">
              Add to cart
            </span>
            <span
              ref={spanRef}
              className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-300"
            />
          </motion.button>
        </section>
      </section>
      <section className="w-full h-fit">
        <h2 className="py-5 text-2xl font-semibold ">Other Related Items</h2>
        <div className="grid justify-center w-full grid-cols-4 gap-2 min-h-fit">
          {relatedItems.map((item, itemIndex) => (
            <Link to={`/store/${item._id}`} key={itemIndex}>
              <section className="w-[250px] h-[240px] bg-slate-200 mb-2 p-2 rounded-md shadow-md cursor-pointer">
                <img
                  src={urlFor(item.image)}
                  alt="product image"
                  className="w-full h-[130px] object-contain"
                />
                <h2 className="px-1 pt-3 pb-1 font-semibold text-gray-700 capitalize">
                  {item.productName}
                </h2>
                <p className="px-1 text-xs font-light capitalize">
                  {item.description}
                </p>

                <section className="flex items-center justify-between w-full px-1 pt-2 h-fit">
                  <span className="text-xs text-blue-600">{`$${item.price}`}</span>
                  <section className="flex items-center w-32 h-5">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <FaStar
                        stroke="orange"
                        fill="orange"
                        size={15}
                        key={index}
                      />
                    ))}
                  </section>
                </section>
              </section>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
