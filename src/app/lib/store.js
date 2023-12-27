import { configureStore } from '@reduxjs/toolkit'
import createData from '../redax/redaxSlise'

export default configureStore({
  reducer: {
    data: createData,
  }
})