import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

const Navbar = () => {

  const {LogoutUser} = useAuth()
  const Navigate = useNavigate()
  const HandleLogout=()=>{
    LogoutUser()
  }

  return (
    <header className="shadow mb-2">
  <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
    <a href="/" className="flex items-center whitespace-nowrap text-2xl font-black">
    <img className="w-48 rounded" src="/galaxy.png" alt />
      
    </a>
    <input type="checkbox" className="peer hidden" id="navbar-open" />
    <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
      <span className="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li className="text-gray-600 md:mr-12 hover:text-blue-600"><a href="#">Pricing</a></li>
        
        <li className="text-gray-600 md:mr-12 hover:text-blue-600">
          <button onClick={HandleLogout} className="rounded-md border-2 border-red-600 px-6 py-1 font-medium text-red-600 transition-colors hover:bg-red-600 hover:text-white">Logout</button>
        </li>
      </ul>
    </nav>
  </div>
</header>

  
  )
}

export default Navbar