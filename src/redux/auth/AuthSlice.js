import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchData } from "../../service/fetchData";

const initialState = {
    user: null,
    token: null,
    message: null,
    status: 'idle'
};

const url = 'https://logo-0f9b.onrender.com/api/auth'

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    async(data) => {
        try {
            const resp = await fetchData(`${url}/register`, {
                method: 'POST',
                body: JSON.stringify(data)
            });
            if(resp.token) window.localStorage.setItem('token', resp.token);
            return resp;
        } catch (error) {
            console.log(error)
        }
    }
);

export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async(data) => {
        try {
            const resp = await fetchData(`${url}/login`, {
                method: 'POST',
                body: JSON.stringify(data)
            });
            window.localStorage.setItem('token', resp.token);
            return resp;
        } catch (error) {
            console.log(error)
        }
    }
);

export const fetchMe = createAsyncThunk(
    'auth/fetchMe',
    async() => {
        try {
            return await fetchData(`${url}/me`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem('token')
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
);



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.user = null;
            state.token = null;
            state.message = null;
            window.localStorage.removeItem('token');
        }
    },
    extraReducers: builder => {
        builder
        
            //REGISTER
            .addCase(fetchRegister.pending, state => {state.status = 'loading'})
            .addCase(fetchRegister.fulfilled, (state, action) => { 
                state.status = 'fulfilled'; 
                state.user = action.payload.user; 
                state.token = action.payload.token; 
                state.message = action.payload.message; 
            })
            .addCase(fetchRegister.rejected, state => state.status = 'error')

            //LOGIN
            .addCase(fetchLogin.pending, state => {state.status = 'loading'})
            .addCase(fetchLogin.fulfilled, (state, action) => { 
                state.status = 'fulfilled'; 
                state.user = action.payload.user; 
                state.token = action.payload.token; 
                state.message = action.payload.message; 
            })
            .addCase(fetchLogin.rejected, state => state.status = 'error')

            //GETME
            .addCase(fetchMe.pending, state => {state.status = 'loading'})
            .addCase(fetchMe.fulfilled, (state, action) => { 
                state.status = 'fulfilled'; 
                state.user = action.payload.user; 
                state.token = action.payload.token; 
            })
            .addCase(fetchMe.rejected, state => state.status = 'error')
    }
});

const { reducer, actions } = authSlice;
export default reducer;

export const { logout } = actions;
