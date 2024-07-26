import { MainApi } from "./MainApi";


const AuthApi= MainApi.injectEndpoints({
    endpoints:(build)=>({
        getCoinHistoryByRange: build.mutation({
            query:(data)=>({
                url:`/coins/${data.id}/market_chart/range?currency=${data.currency}&from=${data.from}&to=${data.to}`,
                method:'POST'
            })
        }),
        getCoinDetail: build.mutation({
            query:(data)=>({
                url:'/user/register',
                method:'POST',
                body:data
            })
        }),
        
    })
})

export const { useGetCoinDetailMutation, useGetCoinHistoryByRangeMutation} = AuthApi