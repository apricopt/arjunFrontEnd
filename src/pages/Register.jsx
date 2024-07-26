import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useRegisterUserMutation } from '../redux/Api/AuthApi'
import useAuth from '../Hooks/useAuth'

const Register = () => {
  const {LoggedInUser:LoggedIn} = useAuth()
  const [registerUserData,result] = useRegisterUserMutation()
  const [registerData,setRegisterData] = useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })

  const Navigate = useNavigate()
  const HandleData=(e)=>{
    setRegisterData({...registerData,[e.target.name]:e.target.value})
  }

  const HandleRegister=async()=>{
if(registerData.email && registerData.password){
  const data =await registerUserData(registerData)
  if(data.data && data.data.msg=="User Registered"){
    alert("You have Registered")
    LoggedIn("/login")
  }else{
    alert("Wrong Crediential")
    setRegisterData({...registerData,password:""})
  }
  }else{
    alert("Field Empty")
  }
}

  return (
    <>
    <div className="flex items-center justify-center h-screen">
      {/* Login Container */}
      <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
        <div className="mb-8 flex justify-center">
          <img className="w-32" src="/galaxy.png" alt />
        </div>
        <div className="flex flex-col text-sm rounded-md">
        <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Full Name" name='name' value={registerData.name} onChange={HandleData} />
        <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Email Address" name='email' value={registerData.email} onChange={HandleData} />
          <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Phone" name='phone' value={registerData.phone} onChange={HandleData} />
          <input name="password" className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Password" value={registerData.password} onChange={HandleData} />
        </div>
        <button className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="button" onClick={HandleRegister}>Register</button>
        <div className="mt-5 flex justify-between text-sm text-gray-600">
          {/* <a href="#">Forgot password?</a> */}
          <Link to={"/login"}>Already registered? Login</Link>
        </div>
       
        <div className="mt-5 flex text-center text-sm text-gray-400">
          <p>
            This site is protected by reCAPTCHA and the Google <br />
            <a className="underline" href>Privacy Policy</a>  and <a className="underline" href>Terms of Service</a>  apply.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register