import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchService = createAsyncThunk("service",async()=>
{
    try {
        const response = await axios.get("https://restapinodejs.onrender.com/api/service")
        return response.data
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    serviceData:[],
    status:"success"

}


export const serviceSlice = createSlice({
    name:"service",
    initialState,
    reducer:{

    },
    extraReducers:{
        [fetchService.pending]:(state)=>{
            state.status="Loading......"
            state.serviceData= null
        },
        [fetchService.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.serviceData = payload;
        },
        [fetchService.rejected]: (state) => {
            state.status = "Loading... ";
        }
    }
})