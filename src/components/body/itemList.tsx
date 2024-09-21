import {useEffect,useState , useCallback,memo,useContext} from 'react';
import { IMG_URL } from '../utils/common';
import Context1 from '../utils/context';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ItemList=(props)=>{
    const dispatch=useDispatch();    
 
 const context=useContext(Context1);     
      const handleAdd=(item:any)=>{
        dispatch(addItem(item?.card?.info?.name))
      }
      
    return(
        <>
        {props?.category?.itemCards.map((item)=>{
            return(
                <>
                <div key={item?.card?.info?.id} className="flex justify-between">
                <div className="text-left shadow-md m-2 p-2 bg-gray-200 w-9/12">
                    {item?.card?.info?.name}
                    <span className="mx-2"> -₹{item?.card?.info?.price/100?item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100}</span>
                    <div className="text-xs font-thin text-gray-500">
                        {item?.card?.info?.description}
                    </div>
                    </div>
                    <div className="w-2/12 my-2 shadow-lg ">
                    <button className="absolute m-2 p-2 rounded-md bg-black text-white" onClick={()=>handleAdd(item)}>Add +</button>
                        <img src={IMG_URL + item?.card?.info?.imageId}/>
                    </div>
                    </div>
                    <div>{context.name}</div>
                </>
                
            )
        })}
        </>

    )

}
export default memo(ItemList);