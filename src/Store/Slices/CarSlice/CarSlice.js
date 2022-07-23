import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carsService} from "../../../Services";

const initialState = {
    cars: [],
    errors: null,
    createCar: null,
    deleteCars: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await carsService.getAll()
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {rejectedWithValue}) => {

        try {
            const {data} = await carsService.createCars(car);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)
const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {rejectedWithValue}) => {
        try {
            await carsService.deleteCarId(id)
            return id
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder

            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.errors = null
            })
            .addCase(deleteCar.fulfilled, (state, action)=>{
                const index = state.cars.findIndex(car=>car.id === action.payload);
                state.cars.splice(index, 1)
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload
                }else {
                    state.errors = null
                }
            })
});

const {reducer: carReducer} = carSlice;

const carActions = {
    getAll,
    createCar,
    deleteCar
}

export {carActions, carReducer}

