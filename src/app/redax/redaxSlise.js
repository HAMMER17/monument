import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}
export const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { createData } = counterSlice.actions

export default counterSlice.reducer