import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    isAuth : false ,
    userData : {
        
    },
    value: 0
}
// const data = {
//     name:'anshul',
//     email: 'anshul@gmail.com',
//     password : '123456',

// }

export const register = createAsyncThunk('auth/register', async({data},rejectWithValue) => {
    
    try{
        const res = await axios.post('https://major-backend.vercel.app/v1/auth/register',data);
        console.log(res.data);
        localStorage.setItem('userData',JSON.stringify(res.data));
        return res.data ;
    }catch(err){
        return rejectWithValue(err) ;
    }
});

export const login = createAsyncThunk('auth/login', async({data},rejectWithValue) =>{
    try{
        const res = await axios.post('https://major-backend.vercel.app/v1/auth/login',data);
        console.log(res.data);
        localStorage.setItem('userData', JSON.stringify(res.data));
        return res.data;
    }catch(err){
        return rejectWithValue(err);
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending , (state) => {
            state.isLoading = true ;
        })
        .addCase(register.fulfilled, (state , {payload}) => {
            state.isLoading = false;
            state.isAuth = true;
            state.userData = payload.user;
        })
        .addCase(register.rejected, (state, {payload})=>{
            state.isLoading = false;
            state.isAuth = false;
            state.userData = initialState.userData;
        })
        .addCase(login.pending, (state, {payload}) =>{
            state.isAuth = false;
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, {payload})=>{
            state.isAuth = true;
            state.isLoading = false;
            state.userData = payload.user;
        })
        .addCase(login.rejected, (state, {payload})=>{
            state.isAuth = false;
            state.isLoading = false;
            state.userData = initialState.userData;
        })
    }
});

// {
//     reducer : afeg,
//     actions: {
//         increment : ksuuhfh
//     }
// }
//!  Exporting ACTIONS
export const { increment, decrement } = authSlice.actions;

export default authSlice.reducer;