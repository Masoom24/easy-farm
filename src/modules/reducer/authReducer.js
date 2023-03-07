import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    isAuth: false,
    userData: {

    },
    value: 0
}

export const register = createAsyncThunk('auth/register', async ({ data }, rejectWithValue) => {

    try {
        const res = await axios.post('https://major-backend.vercel.app/v1/auth/register', data);
        console.log(res.data);
        localStorage.setItem('userData', JSON.stringify(res.data));
        return res.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const login = createAsyncThunk('auth/login', async ({ data }, rejectWithValue) => {
    try {
        const res = await axios.post('https://major-backend.vercel.app/v1/auth/login', data);
        console.log(res.data);
        localStorage.setItem('userData', JSON.stringify(res.data));
        return res.data;
    } catch (err) {
        return rejectWithValue(err);
    }
})

export const logout = createAsyncThunk('auth/logout', async ({ data }, rejectWithValue) => {
    try{
        const res = await axios.post('https://major-backend.vercel.app/v1/auth/logout', data);
        localStorage.clear();
    }catch(err){
        return rejectWithValue(err);
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authSuccess: (state, { payload }) => ({
            ...state,
            isLoading: false,
            isAuth: true,
            user: payload.user
        })
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isAuth = true;
                state.userData = payload;
            })
            .addCase(register.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isAuth = false;
                state.userData = initialState.userData;
            })
            .addCase(login.pending, (state, { payload }) => {
                state.isAuth = false;
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.isAuth = true;
                state.isLoading = false;
                state.userData = payload;
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.isAuth = false;
                state.isLoading = false;
                state.userData = initialState.userData;
            })
    }
});

//!  Exporting ACTIONS
export const { authSuccess } = authSlice.actions;

export default authSlice.reducer;