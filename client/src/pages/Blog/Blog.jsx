import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import PropTypes from "prop-types"
import { Footer, Header } from "../../components"

export default function Blog() {
  return (
    <>
      <Header />

      <div className="bg-white">
        <TextParallaxContent
          imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          subheading="Collaborate"
          heading="Built for all of us."
        >
          <ExampleContent />
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          subheading="Quality"
          heading="Never compromise."
        >
          <ExampleContent />
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          subheading="Modern"
          heading="Dress for the best."
        >
          <ExampleContent />
        </TextParallaxContent>
      </div>

      <Footer />
    </>
  )
}

const IMG_PADDING = 12

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[110vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  )
}

TextParallaxContent.propTypes = {
  imgUrl: PropTypes.string,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  children: PropTypes.func,
}

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  )
}

StickyImage.propTypes = {
  imgUrl: PropTypes.string,
}

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-white"
    >
      <p className="mb-2 text-sm text-center md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-xl font-bold text-center md:text-5xl">{heading}</p>
    </motion.div>
  )
}

OverlayCopy.propTypes = {
  subheading: PropTypes.string,
  heading: PropTypes.string,
}

const ExampleContent = () => (
  <div className="grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 pb-24 mx-auto md:grid-cols-12">
    <h2 className="col-span-1 text-xl font-bold text-gray-800 md:col-span-4 font-Poppins">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className="w-full py-2 text-sm text-white transition-colors rounded bg-neutral-900 px-9 hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
)
