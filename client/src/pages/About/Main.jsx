import { useState } from "react"
import { motion } from "framer-motion"
import { Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import image from "../../assets/slide11.jpg"
import imageTwo from "../../assets/chat.png"
import quote from "../../assets/quote.png"
import testimonialOne from "../../assets/testimonial-1.jpg"
import testimonialTwo from "../../assets/testimonial2.jpg"
import testimonialThree from "../../assets/testimonial3.jpg"
import presentaion from "../../assets/presentation.png"

const Testimonials = [
  {
    id: "one",
    text: "Great customer service, Social Media Marketing Company is professional and extremely serious about business. I have increased my revenue of my business.",
    imageSrc: testimonialOne,
  },
  {
    id: "two",
    text: "I have used Xtra Marketing for two of my businesses. They have helped me generate revenues of six figures from social media alone. I recommend them to all owners.",
    imageSrc: testimonialTwo,
  },
  {
    id: "three",
    text: "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    imageSrc: testimonialThree,
  },
]

export default function Main() {
  const [testimonial, setTestimonial] = useState(Testimonials)
  const [index, setIndex] = useState(0)

  const handleIndex = (index) => {
    setIndex(index)
  }

  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-[70vh] relative -top-20">
        <section
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="relative z-10 flex flex-col items-center justify-center w-full h-full"
        >
          <h2 className="text-xl font-bold text-center text-gray-800 uppercase md:text-5xl font-Gluten">
            We are Creating something big <br /> at this moment
          </h2>
        </section>
      </div>

      <div className="w-full h-[55vh] flex items-center justify-center px-36 gap-5 mt-7">
        <section className="w-1/2 h-full ">
          <img src={imageTwo} alt="Testimonials" className="w-14 h-14" />
          <p className="py-3 text-sm font-semibold tracking-wider uppercase text-lightGreen">
            Our Testimonials
          </p>
          <h2 className="py-3 text-3xl font-semibold text-gray-800 capitalize">
            Our happy customers
          </h2>
          <p className="text-sm text-gray-700">
            The testimonials feature lets you collect kudos from customers and
            clients and display them on your site in different ways to add
            credibility and a professional feel.
          </p>
        </section>
        <section className="w-1/2 h-full px-7">
          <div className="flex items-center justify-center w-full h-20">
            <img src={quote} alt="quote" className="w-20 h-20" />
          </div>
          <motion.div
            transition={{
              duration: 0.2,
              ease: "easeIn",
            }}
            className="flex flex-col items-center justify-center w-full gap-2 h-52"
          >
            <p className="px-10 text-sm text-center text-gray-700">
              {testimonial[index].text}
            </p>
            <img
              src={testimonial[index].imageSrc}
              alt="image"
              className="rounded-full w-14 h-14"
            />
          </motion.div>
          <div className="flex items-center justify-center w-full h-10 gap-2">
            <span
              onClick={() => handleIndex(0)}
              className="w-2 h-2 border rounded-full cursor-pointer border-lightGreen"
            ></span>
            <span
              onClick={() => handleIndex(1)}
              className="w-2 h-2 border rounded-full cursor-pointer border-lightGreen"
            ></span>
            <span
              onClick={() => handleIndex(2)}
              className="w-2 h-2 border rounded-full cursor-pointer border-lightGreen"
            ></span>
          </div>
        </section>
      </div>
      <div className="w-full h-[30vh] relative bg-gradient-to-r from-blue-700 to-green-600 mt-7 mb-12 px-56 flex items-center gap-7">
        <img
          src={presentaion}
          alt="Imag for presentation"
          className="w-24 h-24 mr-5"
        />
        <h2 className="text-2xl font-bold text-white">
          Create Your happiness with us, one hundred guaranteed
        </h2>
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />
          </Canvas>
        </div>
      </div>
    </div>
  )
}
