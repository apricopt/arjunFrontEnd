import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const CheckIsAuth = ({children}) => {

  const {RefreshAuth} = useAuth()

  useEffect(()=>{
     RefreshAuth()
  },[])
  
  return (
    <Outlet>
        {children}
    </Outlet>
  )
}

export default CheckIsAuth