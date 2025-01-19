import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { client } from "../../../server/lib/client"

const initialState = {
  productData: [],
  status: "loading",
  error: null,
}

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  //     const response = await fetch(endpoint)
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok")
  //     }
  //     const data = await response.json()
  //     return data // This will be the payload for fulfilled action

  const query = '*[_type == "product"]'
  const result = await client.fetch(query)
  return result
})

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading" // While request is pending
        state.error = null // Reset any previous errors
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = "ready" // Request completed
        state.productData = action.payload // Update state with fetched data
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = "ready" // Request failed
        state.error = action.error.message // Capture the error
      })
  },
})

// export const {} = productSlice.actions

export default productSlice.reducer
