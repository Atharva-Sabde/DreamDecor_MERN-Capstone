
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const ADD_tO_CART=createAsyncThunk('/actions/ADD_tO_CART',async (obj)=>{
    try{
        const result=await axios.post(`http://localhost:3002/updateCartList/${obj.userid}`,obj.product)
        return result.data
        console.log(result.data)
        
    }
    catch(err){
        console.log(err)
    }
})
export const GET_CART_ITEMS=createAsyncThunk('/actions/GET_CART_ITEMS',async (obj)=>{
    try{
        const result=await axios.get(`http://localhost:3002/getCartList/${obj.id}`)
        return result.data
         
    }
    catch(err){
        console.log(err)
    }
})
export const POST_ORDER_ITEM_TO_SALES=createAsyncThunk('/actions/POST_ORDER_ITEM_TO_SALES',async (obj)=>{
    try{
        const result=await axios.post(`http://localhost:3002/createSales`,obj)
        return result.data
         console.log(result.data)
    }
    catch(err){
        console.log(err)
    }
})


const CartState = {
    cartItems: [],
    flag: false,
    OrderList:[]
}

const ProductSlice = createSlice({
    name: "cart",
    initialState: {
        cart_Data: CartState
    },
    reducers: {
        addToCart: (state, action) => {
            if (state.cart_Data.cartItems.length > 0) {
                console.log(action.payload)
                console.log(state.cart_Data.cartItems.length)
                const inCart = state.cart_Data.cartItems.find((product) => (product._id == action.payload._id))
                if (inCart === undefined) {

                    state.cart_Data.cartItems = [...state.cart_Data.cartItems, { ...action.payload, qty: 1 }]
                }
                else {
                    const items = state.cart_Data.cartItems.find((item) => item._id == action.payload._id)
                    items.qty = items.qty + 1

                }
            }
            else {
                console.log("inside the first Course")
                state.cart_Data.cartItems = [...state.cart_Data.cartItems, { ...action.payload, qty: 1 }]
            }


        },
        removeFromCart: (state, action) => {
            state.cart_Data.cartItems = state.cart_Data.cartItems.filter((item) => item._id !== action.payload)
        },
        UpdateQuantity: (state, action) => {
            console.log(action.payload.qty)
            const items = state.cart_Data.cartItems.find((item) => item._id == action.payload._id)

            items.qty = action.payload.qty
        },
        AddToOrderList:(state,action)=>{
            console.log(action.payload)
            if (state.cart_Data.OrderList.length > 0) {
                console.log(action.payload)
                console.log(state.cart_Data.OrderList.length)
                const inCart = state.cart_Data.OrderList.find((product) => (product._id == action.payload._id))
                if (inCart === undefined) {

                    state.cart_Data.OrderList = [...state.cart_Data.OrderList, action.payload]
                }
        
            }
            else {
                console.log("inside the first Course")
                state.cart_Data.OrderList = [...state.cart_Data.OrderList, action.payload]
            }

        }
    },
    extraReducers: {
        [GET_CART_ITEMS.pending]:(state,action)=>{
          
        },
        [GET_CART_ITEMS.fulfilled]:(state,action)=>{
            // state.cart_Data.flag=false
            // console.log(action.payload.cartList)
             state.cart_Data.cartItems=action.payload.cartList
        },
        [GET_CART_ITEMS.rejected]:(state,action)=>{
           
        },
        [POST_ORDER_ITEM_TO_SALES.pending]:(state,action)=>{
          
        },
        [POST_ORDER_ITEM_TO_SALES.fulfilled]:(state,action)=>{
            // state.cart_Data.flag=false
            console.log("sales Report ",action.payload.msg)
            //  state.cart_Data.cartItems=action.payload.cartList
        },
        [POST_ORDER_ITEM_TO_SALES.rejected]:(state,action)=>{
           
        },
    }
})
export const { addToCart, removeFromCart, UpdateQuantity,AddToOrderList } = ProductSlice.actions
export default ProductSlice.reducer