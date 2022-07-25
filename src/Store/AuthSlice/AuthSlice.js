import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../Services";


const initialState = {
    errors: null,
    isAuth: null
};

const login = createAsyncThunk(
    'authSlice/login',
    async ({user}, {rejectedWithValue}) => {
        try {
            const {data} = await authService.login(user)
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const register = createAsyncThunk(
    'authSlice/register',
    async ({user}, {rejectedWithValue}) => {
        try {
            const {data} = await authService.register(user)
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (bulder) =>
        bulder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true
                authService.setTokens(action.payload)
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

const {reduser: authReducer} = authSlice;

const authActions = {
    register,
    login
}
export {
    authReducer,
    authActions
}