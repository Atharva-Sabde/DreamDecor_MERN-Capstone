import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

////....... Making a get Request to get All the product List from Backend....///

export const getProducts=createAsyncThunk('/actions/getProducts',async ()=>{
    try{
        const result=await axios.get("http://localhost:3002/getProducts")
        return result.data
    }
    catch(err){
        console.log(err)
    }
})

////...........Get a single matched product from backend.....////

export const getMatchProduct=createAsyncThunk('/actions/getMatchProduct',async (itemid)=>{
    console.log(itemid)
    try{
        const result=await axios.get(`http://localhost:3002/getMatchProduct/${itemid}`)
        return result.data
        localStorage.setItem('singleproduct', JSON.stringify(result.data.data))
        console.log(result.data.data)
    }
    catch(err){
        console.log(err)
    }
})
export const signoutUsers=createAsyncThunk('/actions/signoutUsers',async ()=>{
    try{
        const result=await axios.post('http://localhost:3002/signout',{},{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})

const ProductState={
    data:[],
    product:{},
    loading:false
}

const ProductList=createSlice({
    name: "productlist",
    initialState: {
        Product_Data: ProductState
    },
    reducers:{
     
    },
    extraReducers: {
    [getProducts.pending]:(state,action)=>{
        state.Product_Data.loading=true
    },
    [getProducts.fulfilled]:(state,action)=>{
        state.Product_Data.loading=false
        state.Product_Data.data=action.payload.data
    },
    [getProducts.rejected]:(state,action)=>{
        state.Product_Data.loading=true
    },
    [getMatchProduct.pending]:(state,action)=>{
        state.Product_Data.loading=true
    },
    [getMatchProduct.fulfilled]:(state,action)=>{
        state.Product_Data.loading=false
        state.Product_Data.product=action.payload.data
        console.log("SingleProductlist",action.payload.data)
    },
    [getMatchProduct.rejected]:(state,action)=>{
        state.Product_Data.loading=true
    },
   
  
        
}
})
export default ProductList.reducer