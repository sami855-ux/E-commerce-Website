import { CiSearch } from "react-icons/ci"

import { Outlet } from "react-router-dom"

export default function Main() {
  return (
    <div className="flex w-full min-h-[150vh] gap-4 pt-5">
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
        <div className="w-full mt-3">
          <h2 className="pb-5 text-sm font-semibold text-gray-800">
            Price Tags
          </h2>
          <p className="pl-3 mb-3 text-sm text-gray-700 cursor-pointer">$</p>
          <p className="pl-3 mb-3 text-sm text-gray-700 cursor-pointer">$$</p>
          <p className="pl-3 mb-3 text-sm text-gray-700 cursor-pointer">$$$</p>
          <p className="pl-3 mb-3 text-sm text-gray-700 cursor-pointer">$$$$</p>
        </div>
      </section>
      <section className="w-[80vw] min-h-screen py-5">
        <Outlet />
      </section>
    </div>
  )
}
