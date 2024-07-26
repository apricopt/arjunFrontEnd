import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CheckIsAuth from './Middleware/CheckIsAuth'
import Login from './pages/Login'
import Register from './pages/Register'
import PreventAfterLogin from './Middleware/PreventAfterLogin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PreventAfterLogin/>}>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Route>
        <Route element={<CheckIsAuth/>}>
          <Route path='/' element={<Home/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App