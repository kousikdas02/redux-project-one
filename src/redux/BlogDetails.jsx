import{createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = ({
    status: "idel",
    blogdetails:{ }
})

export const fetchBlogDetails = createAsyncThunk(`blogdetails`, async (id) => {
    try {
        let res = await axios.get(`https://restapinodejs.onrender.com/api/blogdetails/${id.id}`);
        return res?.data;
    } catch (error) {
        console.log(error);
    }
})

export const BlogDeatilsSlice = createSlice({
    name: "BlogDetails",
    initialState,
   reducer:{

   },
    extraReducers: {
        [fetchBlogDetails.pending]: (state) => {
            state.status = "loading......";
            state.blogdetails={} 
        },
        [fetchBlogDetails.fulfilled]: (state, { payload }) => {
            state.status = "idle";
            state.blogdetails = payload
        },
        [fetchBlogDetails.rejected]: (state) => {
            state.status = "Rejected";
        },
    },
})


