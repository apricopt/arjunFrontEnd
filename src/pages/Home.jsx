import React, { useEffect, useState } from 'react'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import SearchFilter from '../components/SearchFilter'
import LineCharts from '../components/LineCharts'
import MarketTable from '../components/MarketTable'
import { useGetCoinHistoryByRangeMutation } from '../redux/Api/Crypto'
import moment from "moment";
import NoResult from '../components/NoResult'
import FirstSearch from '../components/FirstSearch'

const Home = () => {
  const [getChartData] = useGetCoinHistoryByRangeMutation()
  const [GraphData,setGraphData] = useState([])
  const [CoinDetail,setCoinDetail] = useState({})
  const [selected, setSelected] = useState('price');
  const [loading, setLoading] = useState(false);
  const [coinInfo, setCoinInfo] = useState("");
  const [searchDetail,setSearchDetail] = useState({
    id:"",
    currency:"",
    from:"",
    to:""
  })


  const handleCheckboxChange = (e) => {
    setSelected(e.target.id);
  };

 const search = async(e)=>{
      if(e)
      e.preventDefault()
      setLoading(true)
      const res = await getChartData({
        id:searchDetail.id,
        currency:searchDetail.currency,
        from:moment(searchDetail.from).unix(),
        to:moment(searchDetail.to).unix()
      })
      if(res.data){
      FetchCoinData()
      FetchCoinInfo()
      let coinChartData
      if(selected=="price")
      coinChartData = res.data.prices.map(value => ({ x: value[0], price: value[1].toFixed(2),date:moment(value[0]).format('MMMM Do, YYYY')}));
      else if(selected=="market_cap")
      coinChartData = res.data.market_caps.map(value => ({ x: value[0], market_cap: value[1].toFixed(2),date:moment(value[0]).format('MMMM Do, YYYY')}));
      else{
        coinChartData = res.data.prices.map(value => ({ x: value[0], fdv: (value[1] * CoinDetail.total_supply).toFixed(0),date:moment(value[0]).format('MMMM Do, YYYY')}));        
      }

      setGraphData(coinChartData)
      setLoading(false)
      
    }
      else{
        setLoading(true)
      }
    }

    const FetchCoinData=async()=>{
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${searchDetail.currency}&ids=${searchDetail.id}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-5jHBqEZPddjRm4k34yJnWBCq'
        }
      };
      
      const res = await fetch(url, options)
      const coinInfo = await res.json()
      setCoinDetail(coinInfo[0])
      // console.log("Hello there",coinInfo[0])
  
    }

    const FetchCoinInfo=async()=>{
      const url = `https://api.coingecko.com/api/v3/coins/${searchDetail.id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-5jHBqEZPddjRm4k34yJnWBCq'
        }
      };
      
      const res = await fetch(url, options)
      const coinInfos = await res.json()
      // setCoinDetail(coinInfo[0])
      setCoinInfo(coinInfos)
      console.log("Hello there",coinInfos)
  
    }

    useEffect(()=>{
      if(searchDetail.id && searchDetail.currency && searchDetail.from && searchDetail.to){
        search()
      }
    },[selected])
    
    

  return (
    <>
     <Navbar/>
     <div className=' flex justify-center items-center pt-5 pb-10'>
        <SearchFilter changeGraphData={setGraphData} getChartData={getChartData} searchDetail={searchDetail} setSearchDetail={setSearchDetail} search={search}/>
     </div>
     {GraphData.length>0 ? ( 
          <>
     <div className='continer px-10 pb-8 flex flex-col justify-center '>
     <div className="mb-3 flex gap-2 items-center">
        <img src={coinInfo?.image?.thumb} alt=''/>
     <h2 className=' text-4xl leading-loose font-extrabold'>{coinInfo.name} {selected} Graph</h2>
      </div>
     <h2 className=''>{moment(searchDetail.from).format('MMM DD')} -
     {moment(searchDetail.to).format('MMM DD')}</h2>
     </div>
     <div className=' container px-10'>
     <div className="flex items-center gap-3 pb-6 col-span-2">
      <div className="flex items-center">
        <input
          id="price"
          type="checkbox"
          name="type[price]"
          className="h-5 w-5 rounded border-gray-300"
          checked={selected === 'price'}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="price" className="ml-3 text-sm font-medium">Price Graph</label>
      </div>
      <div className="flex items-center">
        <input
          id="market_cap"
          type="checkbox"
          name="type[market_cap]"
          className="h-5 w-5 rounded border-gray-300"
          checked={selected === 'market_cap'}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="cap" className="ml-3 text-sm font-medium">Market Cap Graph</label>
      </div>
      <div className="flex items-center justify-center">
        <input
          id="fdv"
          type="checkbox"
          name="type[fdv]"
          className="h-5 w-5 rounded border-gray-300"
          checked={selected === 'fdv'}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="fdv" className="ml-3 text-sm font-medium">FDV Graph</label>
      </div>
    </div>
     </div>
     <div className=' flex justify-center items-center pb-10 h-[600px] px-4'>
     <LineCharts GraphData={GraphData} selected={selected} />
     </div>

     <div className='continer px-10 pb-10 flex flex-col justify-center '>
      
      <p className=' [&>a]:text-blue-600 [&>a]:underline ' dangerouslySetInnerHTML={{__html:coinInfo?.description?.en}}></p>
     </div>
     <MarketTable CoinDetail={CoinDetail}/>
     </>): (
      <>
     <div className=' flex justify-center items-center pt-5 pb-10'>
        <FirstSearch loading={loading}/>
        </div>
      </>
     )
     
     }
     
     
     <Footer/>
    </>
  )
}

export default Home