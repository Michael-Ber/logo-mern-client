import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchData } from "../../service/fetchData";

const url = 'https://logo-0f9b.onrender.com/goods'

const initialState = {
    goods: null,
    cart: [],
    totalOrder: [],
    status: 'idle', 
    message: null,
    error: null
};

export const gettingGoods = createAsyncThunk(
    'goods/gettingGoods',
    async() => {
        try {
            return await fetchData(url, {});
        } catch (error) {
            console.log(error)
        }
    }
);

export const addToCart = createAsyncThunk(
    'goods/addToCart',
    async({goodId, additional = {amount: 1}}) => { 
        try {
            return await fetchData(`${url}/cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token")
                },
                body: JSON.stringify({goodId, additional})
            })
        } catch (error) {
            console.log(error)
        }
    }
);

export const removeFromCart = createAsyncThunk(
    'goods/removeFromCart',
    async({goodId}) => {
        try {
            return await fetchData(`${url}/cart`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token")
                },
                body: JSON.stringify({goodId})
            })
        } catch (error) {
            console.log(error)
        }
    }
);

export const removeAll = createAsyncThunk(
    'goods/removeAll',
    async() => {
        try {
            return fetchData(`${url}/cart/remove_all`, {
                method: 'PUT',
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

export const makeOrder = createAsyncThunk(
    'goods/makeOrder',
    async({data}) => {
        try {
            return await fetchData(`${url}/make_order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem('token')
                },
                body: JSON.stringify({data}) 
            })
        } catch (error) {
            console.log(error)
        }
    }
);

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        changeTotalOrder: (state, action) => { 
            if(state.totalOrder.filter(item => item.id === action.payload.id).length>0) {
                return {...state, totalOrder:state.totalOrder.map(item => {
                    if(item.id === action.payload.id) {
                        return {...item, total: action.payload.total}
                    }
                    return item
                })}
            }else {
                state.totalOrder.push(action.payload);
            }
        },
        clearTotalOrder: state => {
            state.totalOrder = [];
        }  
    },
    extraReducers: builder => {
        builder 
            //GETTING GOODS
            .addCase(gettingGoods.pending, state => { state.status = 'loading' })
            .addCase(gettingGoods.fulfilled, (state, action) => { 
                state.status = 'idle';  
                state.goods = action.payload.goods;
            })
            .addCase(gettingGoods.rejected, (state, action) => { state.status = 'error' })

            //ADD_TO_CART
            .addCase(addToCart.pending, state => { state.status = 'loading' })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.status = 'idle';  
                state.cart = action.payload.item;
            })
            .addCase(addToCart.rejected, (state, action) => { state.status = 'error' })

            //REMOVE_FROM_CART
            .addCase(removeFromCart.pending, state => { state.status = 'loading' })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.status = 'idle';
                state.totalOrder = state.totalOrder.filter(item=> item.id !== action.payload.item._id)  
            })
            .addCase(removeFromCart.rejected, (state, action) => { state.status = 'error' })

            //MAKE_ORDER
            .addCase(makeOrder.pending, state => { state.status = 'loading' })
            .addCase(makeOrder.fulfilled, (state, action) => {
                state.status = 'idle';  
                state.message = action.payload.message;
            })
            .addCase(makeOrder.rejected, (state, action) => { state.status = 'error' })
    }
});

const { reducer, actions } = goodsSlice;
export default reducer;

export const { 
    changeTotalOrder, 
    clearTotalOrder 
} = actions;