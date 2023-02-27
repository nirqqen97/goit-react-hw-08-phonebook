import { createSlice } from '@reduxjs/toolkit';
import { login, register,logOut, refreshUser} from './auth.operaiton';

const initialState = {
    user: {name:null,email:null},
    token: null,
    isLoggedIn : false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers : builder =>
    builder.addCase(register.fulfilled,(state,action) =>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;})
            .addCase(login.fulfilled,(state,action) =>{
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled,(state)=>{
                state.user = {name: null,email: null}
                state.token = null;
                state.isLoggedIn = false;
            }).addCase(refreshUser.pending, (state, _) => {
                state.isRefreshing = true;
                console.log('state.isRefreshing: ', state.isRefreshing);
              })
            .addCase(refreshUser.fulfilled,(state,action)=>{
                state = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
                console.log(' state.isRefreshing: ',  state.isRefreshing);
                console.log('refreshUser success');
                
            }).addCase(refreshUser.rejected,(state,_) =>{
                state.user = {name: null, email : null}
                state.isLoggedIn = false
                console.log('refreshUser reject');
            })
           
        },)


export const authReducer = authSlice.reducer;
