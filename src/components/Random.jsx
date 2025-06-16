import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "./Spinner";
const API_KEY='tXUdh1Grj3CGbsTH7lCMJ8B3b0AdLKfP';
export default function Random() {
  
  const [gif,setGif] = useState('');
  const [loading,setLoading] =useState(false);
  
  function clickHandler(){
      fetchData();
  }

  useEffect(()=>{
    fetchData();
  },[])

  async function fetchData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data}= await axios.get(url);
    const imgUrl= data.data.images.downsized_large.url;
    setGif(imgUrl);
    console.log(imgUrl);
    setLoading(false);
  }
  return <div className="bg-green-500 w-1/2 mb-[10px] rounded-lg border border-black flex flex-col items-center
  gap-y-5 mt-[15px]">
    <h1 className="font-bold underline text-3xl">A RANDOM GIF</h1>
    {
      loading? <Spinner/>:<img
     src={gif} width="450"></img>
    }
     <button className="w-10/12 bg-white opacity-80 text-lg rounded-lg font-bold mb-[10px]" onClick={clickHandler}>Generate</button>
  </div>;
}
