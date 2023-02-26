import { createSlice } from '@reduxjs/toolkit';
import { login, register,logOut} from './auth.operaiton';

const initialState = {
    user: {name:null,email:null},
    token: null,
    isLoggedIn : false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers : {
        [register.fulfilled](state,action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [login.fulfilled](state,action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state,action){
            state.user = {name: null,email: null}
            state.token = null;
            state.isLoggedIn = false;

        }
    }
})


export const authReducer = authSlice.reducer;
