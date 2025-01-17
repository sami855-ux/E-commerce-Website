export default function Main() {
  return (
    <div className="w-full min-h-[200vh] pt-5 flex gap-4">
      <section className="w-72 h-[80vh] rounded-md py-3 flex items-center flex-col px-2">
        <form className="w-full mb-7">
          <input
            type="text "
            placeholder="Search for item..."
            className="w-full h-10 text-sm px-1 outline-none"
          />
        </form>

        <div className="w-full ">
          <h2 className="text-sm font-semibold text-gray-800 pb-5">Items</h2>
          <p className="text-sm text-gray-700 mb-3 cursor-pointer pl-3">
            Cloths
          </p>
          <p className="text-sm text-gray-700 mb-3 cursor-pointer pl-3">
            Cosmetics
          </p>
          <p className="text-sm text-gray-700 mb-3 cursor-pointer pl-3">
            Shoes
          </p>
          <p className="text-sm text-gray-700 mb-3 cursor-pointer pl-3">
            Electronics
          </p>
          <p className="text-sm text-gray-700 mb-3 cursor-pointer pl-3">
            Others
          </p>
        </div>
      </section>
      <section className="w-[80vw] min-h-screen py-10">Sami</section>
    </div>
  )
}
