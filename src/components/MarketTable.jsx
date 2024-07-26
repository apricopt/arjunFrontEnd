import React from 'react'

const MarketTable = ({CoinDetail}) => {

  return (
    <>
    {CoinDetail?.name ? (  
<div className="text-slate-600 mx-auto container px-10 grid grid-cols-2 gap-y-4 py-1 sm:my-10">
  <div className="col-span-2 col-start-1 flex flex-col justify-between border-b py-3 sm:flex-row">
    <p className="font-medium">Overview</p>
    {/* <select className="text-slate-500 hover:bg-slate-200 rounded-lg border-2 px-4 py-2 font-medium focus:outline-none focus:ring">
      <option value="last-month">Last Month</option>
      <option value="last-month">Last 2 Months</option>
      <option value="last-month">This Year</option>
    </select> */}
  </div>
  <div className="col-span-2 -mx-4 bg-gradient-to-t from-indigo-500 to-blue-500 px-4 py-8 sm:col-span-1 sm:mx-0 sm:rounded-xl sm:py-4">
    <p className="mb-4 font-medium text-indigo-100">{CoinDetail?.name}</p>
    <div className="mb-6 flex max-w-xs">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl sm:mr-3 sm:mb-0">
        <img src={CoinDetail?.image} alt=''/>
      </div>
      <div className="px-4">
        <p className="mb-1 text-2xl font-black text-white">{CoinDetail?.current_price}</p>
        <p className="font-medium text-indigo-100">{CoinDetail?.market_cap}</p>
      </div>
    </div>
    <div className="flex flex-wrap justify-between bg-[#00000036] rounded pb-2">
      <div className="flex flex-col items-center px-4 py-1">
        <p className="text-lg font-medium text-white">{CoinDetail.high_24h}</p>
        <p className="text-xs font-medium text-indigo-100">high_24h</p>
      </div>
      <div className="mb-1 flex flex-col items-center px-4 py-1 sm:mr-1 sm:mb-0">
        <p className="text-lg font-medium text-white">{CoinDetail.low_24h}</p>
        <p className="text-xs font-medium text-indigo-100">low_24h</p>
      </div>
      <div className="flex flex-col items-center px-4 py-1 ">
        <p className={`text-lg font-medium ${CoinDetail.price_change_24h>0?"text-green-400":"text-red-600"}`}>{CoinDetail.price_change_24h.toFixed(4)}$</p>
        <p className="text-xs font-medium text-indigo-100">price_change_24h</p>
      </div>
      <div className="flex flex-col items-center px-4 py-1">
        <p className="text-lg font-medium text-white">{CoinDetail.market_cap_rank}</p>
        <p className="text-xs font-medium text-indigo-100">market_cap_rank</p>
      </div>
    </div>
  </div>
  <div className="col-span-2 grid grid-cols-2 gap-4 py-4 sm:col-span-1 sm:gap-8 sm:px-4">
    <div className>
      <p className="text-lg font-bold">Total Supply</p>
      <p className="text-slate-400 mb-2 font-medium">${CoinDetail.total_supply}</p>
      {/* <span className="bg-slate-200 text-slate-600 rounded-full px-2 py-0.5 text-xs font-medium">Drafts</span> */}
    </div>
    <div className>
      <p className="text-lg font-bold">Max Supply</p>
      <p className="text-slate-400 mb-2 font-medium">${CoinDetail.max_supply}</p>
      {/* <span className="rounded-full bg-indigo-200 px-2 py-0.5 text-xs font-medium text-indigo-600">Prending Approval</span> */}
    </div>
    <div className>
      <p className="text-lg font-bold">Market Cap</p>
      <p className="text-slate-400 mb-2 font-medium">${CoinDetail.market_cap}</p>
      {/* <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700">Sent to Clients</span> */}
    </div>
    <div className>
      <p className="text-lg font-bold">Fully Diluted Valuation</p>
      <p className="text-slate-400 mb-2 font-medium">${CoinDetail.fully_diluted_valuation}</p>
      {/* <span className="rounded-full bg-green-200 px-2 py-0.5 text-xs font-medium text-green-600">Signing</span> */}
    </div>
  </div>
 
</div>
 ):(
  <div>
    Loading...
  </div>
 ) }
</>
  )
}

export default MarketTable