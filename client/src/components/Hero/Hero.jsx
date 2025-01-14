export default function Hero() {
  return (
    <div className="w-full h-screen flex items-center justify-center px-48">
      <section className="w-1/3 h-full flex justify-end flex-col pb-10">
        <p className="font-Poppins capitalize tracking-wider text-lightGreen">
          We are expert team
        </p>

        <h2 className="font-bold text-2xl mt-3 py-2">
          We Sell products that makes people&apos;s{" "}
          <span className="text-lightGreen">lives</span> easier & better.
        </h2>
        <p className="font-light text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          accusamus reiciendis doloremque dolor eligendi inventore?
        </p>

        <button className="w-40 h-10 bg-[#654321] text-white my-5 text-sm font-semibold font-Poppins">
          Explore More
        </button>
      </section>
      <div className="w-2/3"></div>
    </div>
  )
}
