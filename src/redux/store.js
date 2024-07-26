import { configureStore } from '@reduxjs/toolkit'
import Login from './Slice/auth'
import { MainApi } from './Api/MainApi'

export const store = configureStore({
  reducer: {
    login:Login,
    [MainApi.reducerPath]:MainApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MainApi.middleware),
})