import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

const initialState = {
  loading: false,
  user: {}, 
  redirectTo: null,
  Logouttoggle: false,
  userName: false,
  redirectReg: null
}

export const fetchregisterUser = createAsyncThunk("signup", async (user) => {
  try {
    const response = await axios.post("https://restapinodejs.onrender.com/api/register", user);
    return response?.data;

  } catch (error) {
    toast(error?.response?.data?.msg);
    console.log(error);
  }
});

export const fetchloginRequest = createAsyncThunk("login", async (data) => {
  try {
    const response = await axios.post("https://restapinodejs.onrender.com/api/login", data);
    return response?.data;
  } catch (error) {
    toast(error?.response?.data?.message);
    console.log(error);
  }
});



export const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { 
    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.Logouttoggle = true;
      }
    },

    logout: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      toast("logout successfully")
      state.Logouttoggle = false

    },

    
    RegLog: (state, { payload }) => {
      localStorage.removeItem("name");
      state.Logouttoggle = false

    },

    redirectToo: (state, { payload }) => {
      state.redirectTo = payload
    },

    redirectTo_Register: (state, { payload }) => {
      state.redirectReg = payload
    },
    


  },

  extraReducers: {

    // for register
    [fetchregisterUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [fetchregisterUser.fulfilled]: (state, { payload }) => {

      if (payload.success === true) {
        localStorage.setItem("name", payload.data.name)
        state.redirectReg = "/login"
        toast(`${payload?.data?.name} Register successfully`)
      }

    },
    [fetchregisterUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    //for login
    [fetchloginRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchloginRequest.fulfilled]: (state, { payload }) => {

      if (payload?.status === 200) {
        localStorage.setItem("token", payload?.token);
        localStorage.setItem("name", payload?.user.name);
        state.Logouttoggle = true
        state.redirectTo = "/"
        toast(`${payload?.user.name} ${payload?.message}`)
      }

    },
    [fetchloginRequest.rejected]: (state, action) => {
      state.loading = false;

    },
  },
})

export const {
  check_token, redirectToo, logout, redirectTo_Register,RegLog } = AuthSlice.actions
