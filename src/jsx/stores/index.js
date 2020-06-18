import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

// 各sliceをimport
import loginReducer from './login'

const reducer = combineReducers({
  login: loginReducer
})

const store = configureStore({ reducer })

export default store
