import { createSlice } from "@reduxjs/toolkit";

export const bookauthorslice = createSlice({
    name:"bookauthorslice",
    initialState:{
        booklist:[],
        authorslist:[]
    },
    reducers:{
        setbooks:(state,action)=>{
            state.booklist = action.payload
            return state;
        },
        setauthors:(state,action)=>{
            state.authorslist = action.payload
            return state;
        }
    }
})

export const{setbooks,setauthors} = bookauthorslice.actions;