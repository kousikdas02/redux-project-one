import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchCourse = createAsyncThunk("course",async()=>
{
    try {
        const response = await axios.get("https://restapinodejs.onrender.com/api/course")
        return response.data
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    courseData:[],
    status:"success"

}


export const courseSlice = createSlice({
    name:"course",
    initialState,
    reducer:{

    },
    extraReducers:{
        [fetchCourse.pending]:(state)=>{
            state.status="Loading......"
            state.courseData= null
        },
        [fetchCourse.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.courseData = payload;
        },
        [fetchCourse.rejected]: (state) => {
            state.status = "Loading... ";
        }
    }
})