import image from "../../assets/slide11.jpg"

export default function Main() {
  return (
    <main className="w-full min-h-screen ">
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
    </main>
  )
}
