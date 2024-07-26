// import "./styles.css";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

// const data = [
//   {
//     date: '2024-07-01',
//     cryptoX: 4500,
//     cryptoY: 32000,
//   },
//   {
//     date: '2024-07-02',
//     cryptoX: 4600,
//     cryptoY: 3300,
//   },
//   {
//     date: '2024-07-03',
//     cryptoX: 47000,
//     cryptoY: 34000,
//   },
//   {
//     date: '2024-07-04',
//     cryptoX: 44000,
//     cryptoY: 31000,
//   },
//   {
//     date: '2024-07-05',
//     cryptoX: 43000,
//     cryptoY: 30000,
//   },
//   {
//     date: '2024-07-06',
//     cryptoX: 48000,
//     cryptoY: 35000,
//   },
//   {
//     date: '2024-07-07',
//     cryptoX: 49000,
//     cryptoY: 36000,
//   },
//   {
//     date: '2024-07-08',
//     cryptoX: 4500,
//     cryptoY: 32000,
//   },
//   {
//     date: '2024-07-09',
//     cryptoX: 4600,
//     cryptoY: 3300,
//   },
//   {
//     date: '2024-07-10',
//     cryptoX: 47000,
//     cryptoY: 34000,
//   },
//   {
//     date: '2024-07-11',
//     cryptoX: 44000,
//     cryptoY: 31000,
//   },
//   {
//     date: '2024-07-12',
//     cryptoX: 43000,
//     cryptoY: 30000,
//   },
//   {
//     date: '2024-07-13',
//     cryptoX: 48000,
//     cryptoY: 35000,
//   },
//   {
//     date: '2024-07-14',
//     cryptoX: 49000,
//     cryptoY: 36000,
//   }
// ];

function formatCurrency(value) {
  if (value >= 1e12) {
    return `$${(value / 1e12).toFixed(2)}T`;
  } else if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(2)}B`;
  } else if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)}M`;
  } else if (value >= 1e3) {
    return `$${(value / 1e3).toFixed(2)}K`;
  } else {
    return `$${value.toFixed(2)}`;
  }
}

const LineCharts=({GraphData,selected})=> {

  
  useEffect(()=>{
    console.log("---",selected,GraphData)
  })

  return (
    <ResponsiveContainer width="90%" height={"100%"} >
{/* <AreaChart
          width={1200} 
          height={400}
          data={GraphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        > */}
   
    <LineChart className="" width={1200} height={400} data={GraphData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" padding={{ left: 3, right: 3 }} />
      <YAxis dataKey={selected} tickFormatter={formatCurrency} padding={{ left: 3, right: 3 }}/>
      <Tooltip />
      <Legend />
      {/* <Line type="monotone" dataKey="x" stroke="#8884d8"  /> */}
        <Line type="monotone" dataKey={selected} stroke="#82ca9d" activeDot={{ r: 8 }} />
        {/* <Area type="monotone" dataKey={selected} stroke="#82ca9d" fill="#8884d8" activeDot={{ r: 8 }} /> */}
    </LineChart>
    {/* </AreaChart> */}
    </ResponsiveContainer>
  );
}


export default LineCharts
