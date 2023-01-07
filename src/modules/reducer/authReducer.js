import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
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
//!Exporting ACTIONS
export const { increment, decrement } = authSlice.actions;

export default authSlice.reducer;