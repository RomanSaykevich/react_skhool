import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {CarsService as carsService} from "../../Services";

const initialState = {
    cars: [],
    errors: null,
    next: null,
    prev: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, {rejectedWithValue, dispatch, getState}) => {
        try {
            const {data} = await carsService.getAll(page)
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload.data
                state.prev = action.payload.prev
                state.next = action.payload.next
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null
                }
            })
});

const {reducer: carReducer} = carSlice;

const carActions = {
    getAll
}

export {
    carReducer,
    carActions
}