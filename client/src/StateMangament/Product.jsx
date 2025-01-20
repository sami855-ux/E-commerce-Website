import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { client } from "../../../server/lib/client"

const ITEMS_PER_PAGE = 5

const initialState = {
  productData: [],
  status: "loading",
  error: null,
  totalPages: 0,
  currentPage: 1,
  dataPerPage: [],
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
      console.log("hi")
      if (action.payload > 0 && action.payload <= state.totalPages) {
        state.currentPage = action.payload
      }
      const lastPostIndex = state.currentPage * ITEMS_PER_PAGE
      const firstPostIndex = lastPostIndex - ITEMS_PER_PAGE

      state.dataPerPage = state.productData.slice(firstPostIndex, lastPostIndex)
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

        state.dataPerPage = state.productData.slice(0, 5)
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "ready" // Request failed
        state.error = action.error.message // Capture the error
      })
  },
})

export const { pageChange } = productSlice.actions

export default productSlice.reducer
