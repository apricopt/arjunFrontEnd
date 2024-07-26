import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false,
}

export const authSlice = createSlice({
  name: 'userauth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true
    },
    logout: (state) => {
      state.isLogin = false
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer