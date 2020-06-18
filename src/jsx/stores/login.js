import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false
}

// redux toolkitはimmerが内包されているのでimmutableに勝手になる。すご。
const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      return {
        ...state,
        isLogin: true
      }
    },
    signOut: (state, action) => {
      return {
        ...state,
        isLogin: false
      }
    }
  }
})

export default slice.reducer

export const { signIn, signOut } = slice.actions
