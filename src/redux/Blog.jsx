import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchBlog= createAsyncThunk("allBlog",async()=>
{
    try {
        const response = await axios.get("https://restapinodejs.onrender.com/api/allBlog")
        return response.data
    } catch (error) {
        console.log(error);
    }
})

const initialState ={
    blogData:[],
    status:"success"

}

export const blogSlice = createSlice({
    name:"blog",
    initialState,
    reducer:{

    },extraReducers:{
        [fetchBlog.pending]:(state)=>{
            state.status="Loading......"
            state.blogData= null
        },
        [fetchBlog.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.blogData = payload;
        },
        [fetchBlog.rejected]: (state) => {
            state.status = "Loading... ";
        }

    }
})
