import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchTesimonial = createAsyncThunk("testimonilal",async()=>
{
    try {
        const response = await axios.get('https://restapinodejs.onrender.com/api/testimonial')
        return response.data
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    testimonialData:[],
    status:"success"

}


export const testimonialSlice = createSlice({
    name:"testimonial",
    initialState,
    reducer:{

    },
    extraReducers:{
        [fetchTesimonial.pending]:(state)=>{
            state.status="Loading......"
            state.testimonialData= null
        },
        [fetchTesimonial.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.testimonialData = payload;
        },
        [fetchTesimonial.rejected]: (state) => {
            state.status = "Loading... ";
        }
    }
})