import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:["pizza"]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearItem:(state)=>{
            state.items.length=0;
        }
    }
})

export const {addItem,clearItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer;