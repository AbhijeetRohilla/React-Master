import React, { useEffect, useState } from "react";
import { REAL_FOOD_API } from "../utils/common";
import RestCard from "./restrauntCard";
import RestShimmer from "./restrauntShimmer";
import { Link } from "react-router-dom";

const Body=()=>{
    const [resData, setResData] = useState([]);
  const [searchData, setSearchData] = useState("");
 


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(REAL_FOOD_API);
    const dataJson = await apiData.json();
    const pureData =
      dataJson?.data?.cards[4]?.card.card.gridElements.infoWithStyle
        .restaurants;
    setResData(pureData);
  };

  const handleSort = () => {
    const filteredData = resData.filter((res) => res?.info?.avgRating > 4);
    setResData(filteredData);
  };

  const handleSearch = () => {
    const val = resData.map((res) => {
      return res?.info?.name.includes(searchData);
    });
    console.log(val);
  };

    return(
        
        <>
        { resData.length<=1 ? (
            <RestShimmer/>
        ):
        <>
          <div className="sort-by-button">
            <button onClick={handleSort}>Sort By</button>
          </div>
          <br></br>
          <div>
            <input
              type="search"
              onChange={(e) => setSearchData(e.target.value)}
            ></input>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="restCard">
            {resData.map((item) => {
                //@ts-ignore
              return <Link to ={"restraunt/"+item?.info?.id}><RestCard key={item?.info?.id} resData={item} /> </Link>;
            })}
          </div>
          </>
}

       </>
    )
}
export default Body;