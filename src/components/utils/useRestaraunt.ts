import { useEffect,useState } from "react";
import { RESTRAUNT_API } from "./common";


const useRestaraunt=(restId)=>{
    const [resData,setResData]=useState(null)
    
    useEffect(()=>{
        fetchData();
      },[])
      const fetchData=async()=>{
        const data= await fetch(RESTRAUNT_API+restId);
        const json= await (data.json());
        setResData(json);
       
      }
    return resData;
}
export default useRestaraunt;
