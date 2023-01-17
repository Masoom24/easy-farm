import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './authReducer';
import productReducer from './productReducer'

const reducer = combineReducers({
    auth: authReducer,
    product : productReducer
})

export default reducer;