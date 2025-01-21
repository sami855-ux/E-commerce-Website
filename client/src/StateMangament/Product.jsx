import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { client } from "../../../server/lib/client"

const ITEMS_PER_PAGE = 15

const initialState = {
  productData: [],
  status: "loading",
  error: null,
  totalPages: 0,
  currentPage: 1,
  dataPerPage: [],
  cartData: [],
  totalPrice: 0,
}

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const query = '*[_type == "product"]'
  const result = await client.fetch(query)
  return result
})

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    pageChange(state, action) {
      if (action.payload > 0 && action.payload <= state.totalPages) {
        state.currentPage = action.payload
      }
      const lastPostIndex = state.currentPage * ITEMS_PER_PAGE
      const firstPostIndex = lastPostIndex - ITEMS_PER_PAGE

      state.dataPerPage = state.productData.slice(firstPostIndex, lastPostIndex)
    },

    addToCart(state, action) {
      const id = action.payload
      let product = state.productData.find((product) => product._id === id)
      const isAdded = state.cartData.find((item) => item?._id === product._id)

      if (isAdded) return

      product.count = 1
      state.cartData = [...state.cartData, product]

      state.totalPrice = state.cartData.reduce(
        (acc, current) => acc + current.count * current.price,
        0
      )
    },

    removeFromCart(state, action) {
      const id = action.payload

      state.cartData = state.cartData.filter((data) => data._id !== id)
      state.totalPrice = state.cartData.reduce(
        (acc, current) => acc + current.count * current.price,
        0
      )
    },

    increaseCount(state, action) {
      const id = action.payload

      let product = state.cartData.find((product) => product._id === id)
      product.count = product.count + 1

      state.cartData = state.cartData.filter((data) => data._id !== id)

      state.cartData = [...state.cartData, product]
      state.totalPrice = state.cartData.reduce(
        (acc, current) => acc + current.count * current.price,
        0
      )
    },
    decreaseCount(state, action) {
      const id = action.payload

      let product = state.cartData.find((product) => product._id === id)
      product.count = product.count === 1 ? 1 : product.count - 1

      state.cartData = state.cartData.filter((data) => data._id !== id)

      state.cartData = [...state.cartData, product]

      state.totalPrice = state.cartData.reduce(
        (acc, current) => acc + current.count * current.price,
        0
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading" // While request is pending
        state.error = null // Reset any previous errors
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.productData = action.payload // Update state with fetched data
        state.status = "ready" // Request completed
        state.totalPages = Math.ceil(action.payload.length / ITEMS_PER_PAGE)

        state.dataPerPage = state.productData.slice(0, ITEMS_PER_PAGE)
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "ready" // Request failed
        state.error = action.error.message // Capture the error
      })
  },
})

export const {
  pageChange,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
} = productSlice.actions

export default productSlice.reducer
