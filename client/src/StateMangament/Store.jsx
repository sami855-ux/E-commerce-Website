import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./Product"

const store = configureStore({
  reducer: productSlice,
})

export { store }
