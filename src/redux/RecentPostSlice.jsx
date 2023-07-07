import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchRecentPost= createAsyncThunk("recentPost",async()=>
{
    try {
        const response = await axios.get("https://restapinodejs.onrender.com/api/letest-post")
        return response.data
    } catch (error) {
        console.log(error);
    }
})

const initialState ={
    recentPostData:[],
    status:"success"

}

export const recentPostSlice = createSlice({
    name:"recentPost",
    initialState,
    reducer:{

    },extraReducers:{
        [fetchRecentPost.pending]:(state)=>{
            state.status="Loading......"
            state.recentPostData= null
        },
        [fetchRecentPost.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.recentPostData = payload;
        },
        [fetchRecentPost.rejected]: (state) => {
            state.status = "Loading... ";
        }

    }
})
