import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories= createAsyncThunk("categories",async()=>
{
    try {
        const response = await axios.get("https://restapinodejs.onrender.com/api/showallcategory")
        return response.data
    } catch (error) {
        console.log(error);
    }
})

const initialState ={
    categoriesData:[],
    status:"success",
}

export const categoriesSlice = createSlice({
    name:"blog",
    initialState,
    reducers:{
    
    },extraReducers:{
        [fetchCategories.pending]:(state)=>{
            state.status="Loading......"
            state.categoriesData= null
        },
        [fetchCategories.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.categoriesData = payload;
        },
        [fetchCategories.rejected]: (state) => {
            state.status = "Loading... ";
        }

    }
})


