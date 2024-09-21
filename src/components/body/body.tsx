import React, { useEffect, useMemo, useState } from "react";
import { REAL_FOOD_API } from "../utils/common";
import RestCard,{higherOrderComponent} from "./restrauntCard";
import RestShimmer from "./restrauntShimmer";
import { Link } from "react-router-dom";

const Body=()=>{
    const [resData, setResData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const BestRatedRest=higherOrderComponent(RestCard);
 


  useEffect(() => {
    memo;
  },[]);

  const memo= useMemo(async () => {
    const apiData = await fetch(REAL_FOOD_API);
    
    const dataJson = await apiData.json();
    const pureData =
      dataJson?.data?.cards[4]?.card.card.gridElements.infoWithStyle
        .restaurants;

    setResData(pureData);
  },[])
  

  const handleSort = () => {
    const filteredData = resData.filter((res) => res?.info?.avgRating > 4);
    setResData(filteredData);
  };

  const handleSearch = () => {
    const val = resData.map((res) => {
      return res?.info?.name.includes(searchData);
    });
    
  };

    return(
        
        <>
        { resData.length<=1 ? (
            <RestShimmer/>
        ):
        <>
          <div className="flex">
          
            <button className="px-4 bg-gray-500 rounded-lg m-4 text-white" onClick={handleSort}>Sort By ↑↓ </button>
            <div className="ml-24 items-center mt-6"><input className="px-4 border-solid border-black border-[1px] rounded-md "
              type="search"
              onChange={(e) => setSearchData(e.target.value)}
            ></input></div>
            <button onClick={handleSearch} className="rounded-3xl bg-blue-300 m-4 p-2">Search</button>
          </div>
          <div>
            
          </div>
          <div className="restCard">
            {resData.map((item) => {
                //@ts-ignore
              return <Link to ={"restraunt/"+item?.info?.id}>
                {item?.info?.avgRating>=4.4 ? 
                 <BestRatedRest  resData={item}/>
                 :
                 item?.info?.avgRating<4?
                 <>
                 <label className="absolute m-2 p-2 bg-red-700 text-white rounded-md">Below Average restraunt</label>
                 <RestCard resData={item} />
                 </>
                 :
                 <RestCard  resData={item} />
                }
                 
                </Link>;
            })}
          </div>
          </>
}

       </>
    )
}
export default Body;