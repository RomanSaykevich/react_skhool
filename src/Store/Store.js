import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./Slices/CarSlice/CarSlice";

const rootReducer = combineReducers({
    cars: carReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}