import { MainApi } from "./MainApi";


const AuthApi= MainApi.injectEndpoints({
    endpoints:(build)=>({
        loginUser: build.mutation({
            query:(data)=>({
                url:'/user/login',
                method:'POST',
                body:data
            })
        }),
        registerUser: build.mutation({
            query:(data)=>({
                url:'/user/register',
                method:'POST',
                body:data
            })
        }),
        refreshUser: build.mutation({
            query:()=>'/user/refresh'
        }),
        logoutUser: build.mutation({
            query:(data)=>({
            url:'/user/logout',
            method:'POST'
            })
        }),
    })
})

export const { useLoginUserMutation,useRegisterUserMutation, useRefreshUserMutation, useLogoutUserMutation } = AuthApi