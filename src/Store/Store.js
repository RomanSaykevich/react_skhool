import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./CarSlice/CarSlice";
import {authReducer} from "./AuthSlice/AuthSlice";


const reducers = combineReducers({
    cars: carReducer,
    auth: authReducer
});

const setupStore = () => configureStore({
    reducer: reducers
})
export {
    setupStore
}