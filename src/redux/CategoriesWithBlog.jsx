import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = ({
    categoryBlog:[],
    status: "success"
   
})

export const fetchCategoriesWithBlog = createAsyncThunk("categoriesWithBlog",async(id)=>{

   try {
    const response = await axios.get(`https://restapinodejs.onrender.com/api/category/post/${id.id}`)
    return response?.data
   } catch (error) {
    console.log(error);  
   }
})


export const categorytWithBlogSlice = createSlice({
    name: "CategoryWithBlog",
    initialState,
    reducers:{},
    extraReducers: {
        [fetchCategoriesWithBlog.pending]: (state) => {
            state.status = "loading......";
            state.categoryBlog={} 
        },
        [fetchCategoriesWithBlog.fulfilled]: (state, { payload }) => {
            state.categoryBlog = payload
        },
        [fetchCategoriesWithBlog.rejected]: (state) => {
            state.status = "Rejected";
        },
    },
})

