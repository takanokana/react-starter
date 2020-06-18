import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signIn, sigunOut } from '../stores/login'

export default function Top () {
  const dispatch = useDispatch()
  const isLogin = useSelector(
    state => state.login.isLogin
  )
  const signInHandler = () => {
    dispatch(signIn())
  }
  return (
    <div>
      TOPだよ~
      {isLogin &&
        <p>loginされてる</p>
      }
      <button
        onClick={signInHandler}
      > ログイン</button>
    </div>
  )
}
