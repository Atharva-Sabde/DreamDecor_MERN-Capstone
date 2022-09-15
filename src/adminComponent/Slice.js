import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.withCredentials=true
export const signin=createAsyncThunk('/adminComponent/signin',async (obj)=>{
    try{
        const result=await axios.post('http://localhost:3002/signin',obj)
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const getProducts=createAsyncThunk('/adminComponent/getProducts',async ()=>{
    try{
        const result=await axios.get('http://localhost:3002/getProducts')
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const createProducts=createAsyncThunk('/adminComponent/createProducts',async (data)=>{
    try{
        const result=await axios.post('http://localhost:3002/createProduct',{data:data},{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const deleteProducts=createAsyncThunk('/adminComponent/deleteProducts',async (itemid)=>{
    try{
        const result=await axios.post(`http://localhost:3002/deleteProduct/${itemid}`,{},{withCredentials:true})
        return {data:result.data,id:itemid}
    }
    catch(err){
        console.log(err)
    }
})
export const updateProducts=createAsyncThunk('/adminComponent/updateProducts',async (data)=>{
    try{
        const result=await axios.post(`http://localhost:3002/updateProduct/${data.itemid}`,data,{withCredentials:true})
        return {data:result.data,pData:data}
    }
    catch(err){
        console.log(err)
    }
})
export const getUsers=createAsyncThunk('/adminComponent/getUsers',async ()=>{
    try{
        const result=await axios.get('http://localhost:3002/getUsers')
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const deleteUsers=createAsyncThunk('/adminComponent/deleteUsers',async (itemid)=>{
    try{
        const result=await axios.post(`http://localhost:3002/deleteUser/${itemid}`)
        return {data:result.data,id:itemid}
    }
    catch(err){
        console.log(err)
    }
})
export const updateUsers=createAsyncThunk('/adminComponent/updateUsers',async (data)=>{
    try{
        const result=await axios.post(`http://localhost:3002/updateUser/${data.uid}`,data,{withCredentials:true})
        return {data:result.data,uData:data}
    }
    catch(err){
        console.log(err)
    }
})
export const createUsers=createAsyncThunk('/adminComponent/createUsers',async (data)=>{
    try{
        const result=await axios.post('http://localhost:3002/createUser',data,{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const updateCoupon=createAsyncThunk('/adminComponent/updateCoupon',async (data)=>{
    try{
        const result=await axios.post(`http://localhost:3002/updateCoupon/${data.uid}`,data,{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const getSalesReport=createAsyncThunk('/adminComponent/getSalesReport',async ()=>{
    try{
        const result=await axios.get('http://localhost:3002/getSales',{},{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const deleteSales=createAsyncThunk('/adminComponent/deleteSales',async (itemid)=>{
    try{
        const result=await axios.post(`http://localhost:3002/deleteSales/${itemid}`)
        return {data:result.data,id:itemid}
    }
    catch(err){
        console.log(err)
    }
})
export const signoutUsers=createAsyncThunk('/adminComponent/signoutUsers',async ()=>{
    try{
        const result=await axios.post('http://localhost:3002/signout',{},{withCredentials:true})
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const getOneUser=createAsyncThunk('/AssessmentFour/getOneUser',async (id)=>{
    try{
        const result=await axios.get(`http://localhost:3002/getUser/${id}`)
        return result.data
    }
    catch(err){
        console.log(err)
    }
})
export const updateProfile=createAsyncThunk('/adminComponent/updateProfile',async (data)=>{
    try{
        const result=await axios.post(`http://localhost:3002/updateProfile/${data.uid}`,data,{withCredentials:true})
        return {data:result.data,uData:data}
    }
    catch(err){
        console.log(err)
    }
})
const initialValue={
    userRole:"",
    userId:"",
    user:{},
    products:[],
    loading:true,
    users:[],
    sales:[]
}
const Slice=createSlice({
    name:"info",
    initialState:{
        data:initialValue
    },
    reducers:{
        changeRole:(state,action)=>{
            state.data.userRole=''
        }
    },
    extraReducers:{
        [signin.pending]:(state,action)=>{

        },
        [signin.fulfilled]:(state,action)=>{
            if(!action.payload.status) return alert(action.payload.msg)
            else {
                state.data.userRole=action.payload.role
                state.data.userId=action.payload.id
                // state.data.user=action.payload.user
            }
        },
        [signin.rejected]:(state,action)=>{

        },
        [getProducts.pending]:(state,action)=>{
            state.data.loading=true
        },
        [getProducts.fulfilled]:(state,action)=>{
            state.data.loading=false
            state.data.products=action.payload.data
        },
        [getProducts.rejected]:(state,action)=>{
            state.data.loading=true
        },
        [createProducts.pending]:(state,action)=>{
            
        },
        [createProducts.fulfilled]:(state,action)=>{
            if(!action.payload.status) return alert(action.payload.msg)
            else {
                state.data.products=[...state.data.products,...action.payload.data]
                return alert(action.payload.msg)
            }
        },
        [createProducts.rejected]:(state,action)=>{
            
        },
        [deleteProducts.pending]:(state,action)=>{
            
        },
        [deleteProducts.fulfilled]:(state,action)=>{
            if(!action.payload.data.status) return alert(action.payload.data.msg)
            else state.data.products=state.data.products.filter((item)=>item._id!==action.payload.id)
        },
        [deleteProducts.rejected]:(state,action)=>{
            
        },
        [updateProducts.pending]:(state,action)=>{
            
        },
        [updateProducts.fulfilled]:(state,action)=>{
            if(!action.payload.data.status) return alert(action.payload.data.msg)
            else {
                let temp=state.data.products.find((item)=>item._id===action.payload.pData.itemid)
                temp.img=action.payload.pData.img
                temp.category=action.payload.pData.category
                temp.title=action.payload.pData.title
                temp.description=action.payload.pData.description
                temp.primaryMaterial=action.payload.pData.primaryMaterial
                temp.isReturnable=action.payload.pData.isReturnable
                temp.stocks=action.payload.pData.stocks
                temp.price=action.payload.pData.price
            }
        },
        [updateProducts.rejected]:(state,action)=>{
            
        },
        [getUsers.pending]:(state,action)=>{
            state.data.loading=true
        },
        [getUsers.fulfilled]:(state,action)=>{
            state.data.loading=false
            state.data.users=action.payload.data
        },
        [getUsers.rejected]:(state,action)=>{
            state.data.loading=true
        },
        [deleteUsers.pending]:(state,action)=>{
            
        },
        [deleteUsers.fulfilled]:(state,action)=>{
            if(!action.payload.data.status) return alert(action.payload.data.msg)
            else state.data.users=state.data.users.filter((item)=>item._id!==action.payload.id)
        },
        [deleteUsers.rejected]:(state,action)=>{
            
        },
        [updateUsers.pending]:(state,action)=>{
            
        },
        [updateUsers.fulfilled]:(state,action)=>{
            if(!action.payload.data.status) return alert(action.payload.data.msg)
            else {
                let temp=state.data.users.find((item)=>item._id===action.payload.uData.uid)
                temp.name=action.payload.uData.uname
                temp.email=action.payload.uData.email
                temp.phone=action.payload.uData.phone
                temp.password=action.payload.uData.password
                temp.address=action.payload.uData.address
                temp.role=action.payload.uData.role
            }
        },
        [updateUsers.rejected]:(state,action)=>{
            
        },
        [createUsers.pending]:(state,action)=>{
            
        },
        [createUsers.fulfilled]:(state,action)=>{
            if(!action.payload.status) return alert(action.payload.msg)
            else {
                state.data.users=[...state.data.users,action.payload.data]
                return alert(action.payload.msg)
            }
        },
        [createUsers.rejected]:(state,action)=>{
            
        },
        [getSalesReport.pending]:(state,action)=>{
            state.data.loading=true
        },
        [getSalesReport.fulfilled]:(state,action)=>{
            state.data.loading=false
            state.data.sales=action.payload.data
        },
        [getSalesReport.rejected]:(state,action)=>{
            state.data.loading=true
        },
        [deleteSales.pending]:(state,action)=>{
            
        },
        [deleteSales.fulfilled]:(state,action)=>{
            if(!action.payload.data.status) return alert(action.payload.data.msg)
            else state.data.sales=state.data.sales.filter((item)=>item._id!==action.payload.id)
        },
        [deleteSales.rejected]:(state,action)=>{
            
        },
        [getOneUser.pending]:(state,action)=>{
            
        },
        [getOneUser.fulfilled]:(state,action)=>{
            state.data.user=action.payload.user
        },
        [getOneUser.rejected]:(state,action)=>{
            
        },
        [updateProfile.pending]:(state,action)=>{
            
        },
        [updateProfile.fulfilled]:(state,action)=>{
            if(!action.payload.data.status) return alert(action.payload.data.msg)
            else {
                state.data.user.img=action.payload.uData.img
                state.data.user.name=action.payload.uData.uname
                state.data.user.email=action.payload.uData.email
                state.data.user.phone=action.payload.uData.phone
                state.data.user.address=action.payload.uData.address
            }
        },
        [updateProfile.rejected]:(state,action)=>{
            
        }
    }
})
export const {changeRole}=Slice.actions
export default Slice.reducer