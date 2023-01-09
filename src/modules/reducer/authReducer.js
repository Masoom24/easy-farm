import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isAuth : true ,
    userData : {
        "profile": "",
        "isEmailVerified": false,
        "name": "Ritik 1",
        "email": "ritik1@gmail.com",
        "role": "seller",
        "id": "63afe5d556a4050008e89f33"
    },
    value: 0
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //! ACTIONS
       increment : (state ,payload) => {
            state.value = state.value + 1;
            return state ;
       },
       decrement : (state ,payload) => {
            state.value = state.value - 1;
            return state ;
       },
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