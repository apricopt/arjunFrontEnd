import moment from 'moment'
import React, { useEffect, useState } from 'react'

const SearchFilter = ({changeGraphData, getChartData, searchDetail, setSearchDetail,search}) => {

  const HandleData = (e)=>{
    setSearchDetail({...searchDetail,[e.target.name]:e.target.value})
  }


 

  useEffect(()=>{
    // FetchCoinData()
  })
  return (
   <div className="m-10 w-screen max-w-screen-lg">
  <div className="flex flex-col">
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
      <form >
        <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
          <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={11} cy={11} r={8} className />
            <line x1={21} y1={21} x2="16.65" y2="16.65" className />
          </svg>
          <input type="name" name="id" className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Search Crypto Coin eg. bitcoin " value={searchDetail.id} onChange={HandleData} />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       

          <div className="flex flex-col">
            <label htmlFor="manufacturer" className="text-sm font-medium text-stone-600">Currency</label>
            <select value={searchDetail.currency} onChange={HandleData} id="manufacturer" name='currency' className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option value={"null"}>--select--</option>
              <option value={"usd"}>USD</option>
              <option value={"euro"}>Euro</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-sm font-medium text-stone-600">From</label>
            <input type="date" id="date" name='from' value={searchDetail.from} onChange={HandleData} className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-sm font-medium text-stone-600">To</label>
            <input type="date" id="date" name='to' value={searchDetail.to} onChange={HandleData} className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
        </div>
        <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
          <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">Reset</button>
          <button className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring" onClick={search}>Search</button>
        </div>
      </form>
    </div>
  </div>
</div>

  
  )
}

export default SearchFilter