import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset(){
        axios.defaults.headers.common.Authorization = ''
    }
}

export const register = createAsyncThunk('auth/register', async (credentials) =>{
    try {
        const {data} = await   axios.post('users/signup',credentials);
        token.set(data.token)
        return data;
    } catch (error) {
        
    }
    
})

export const login = createAsyncThunk('auth/login', async (credentials) =>{
    try {
        const {data} = await   axios.post('users/login',credentials)
        token.set(data.token)
        return data    
    } catch (error) {
        
    }
    
})

export const logOut = createAsyncThunk('auth/logout', async () =>{
    try {
        await axios.post('users/logout')
        token.unset()
        
    } catch (error) {
        
    }
    
});
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.users.token;
      console.log('persistedToken: ', persistedToken);
      if (!persistedToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      try {
        token.set(persistedToken);
        const {data} = await axios.get('/users/current');
        console.log('data: ', data);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
   