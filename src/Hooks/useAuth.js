import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import {login,logout} from '../redux/Slice/auth';
import { useLogoutUserMutation, useRefreshUserMutation } from '../redux/Api/AuthApi';

const useAuth =()=>{
 const dispatch = useDispatch()
 const isLogin = useSelector(state=>state.login.isLogin)
 const Navigate = useNavigate()
 const [refreshUser,result] = useRefreshUserMutation() 
 const [logout] = useLogoutUserMutation()
    
 const RefreshAuth=async(path)=>{
     const res = await refreshUser()
     if(res?.data?.msg =="user is authorized"){
        // console.log("there",res.data.msg)
        dispatch(login(true))
        if(!path)
        Navigate("/")
        else
        Navigate(path)
    }else{
        dispatch(login(false))
        Navigate("/login")
    }
 }
 
 const CheckUser = ()=>{
        
    if(isLogin){
        console.log("login ifIN Useauth")
        return true
    }
    else{
        console.log("logout ifIN Useauth")
        return false
    }
 };
    

const LoggedInUser=(path)=>{
    console.log("auth_Login")
    dispatch(login(true))
    Navigate(path)
};

const LogoutUser=async()=>{
    console.log("auth_Logout")
   const res= await logout()
   if(res?.data?.msg=="User Logout"){
    Navigate("/login")
    dispatch(login(false))
   }
};
 

    return {RefreshAuth,LoggedInUser,LogoutUser}
    
}

export default useAuth