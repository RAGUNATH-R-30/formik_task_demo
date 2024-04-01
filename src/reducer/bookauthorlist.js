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
        },
        addauthor:(state,action)=>{
            state.authorslist = [...state.authorslist,action.payload]
            return state;
        }
    }
})

export const{setbooks,setauthors,addauthor} = bookauthorslice.actions;