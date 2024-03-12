import {combineReducers} from "@reduxjs/toolkit"

import authReducers from '../slices/authSlice';
import profileReducers from '../slices/profileSlice';

const rootReducers =combineReducers({
    auth:authReducers,
    profile:profileReducers,
    
})

export default rootReducers;