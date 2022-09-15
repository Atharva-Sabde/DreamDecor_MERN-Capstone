import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeItemFromWishlist } from "../LocalStorage/UseLocalStorage";
import axios from 'axios'

export const SendUserData = createAsyncThunk('/actions/SendUserData', async (Data) => {
    try {
        const Result = await axios.post("http://localhost:3002/signup", Data)
        console.log("inside a fetch method", Result.data)
        
        return Result.data
    }
    catch (err) {
        console.log(err)
    }
})

export const LoginUser = createAsyncThunk('/actions/LoginUser', async (Data) => {
    try {
        const Result = await axios.post("http://localhost:3002/signin", Data)
      
       
      
        const userData=Result.data
        localStorage.setItem('userData', JSON.stringify(userData))
        localStorage.setItem('userid',userData.id)
        localStorage.setItem('role',userData.role)
        
        return Result.data
    }
    catch (err) {
        console.log(err)
    }
})
export const getOneUser=createAsyncThunk('/actions/getOneUser',async (id)=>{
    try{
        const result=await axios.get(`http://localhost:3002/getUser/${id}`)
        return result.data
    }
    catch(err){
        console.log(err)
    }
})


///........update useprofile Request ....../////

export const UpdateUserProfile = createAsyncThunk('/actions/UpdateUserProfile', async (Data) => {
    try {
        const Result = await axios.post("http://localhost:3002/updateProfile", Data)
        const userData=Result.data
        console.log("inside the Update profile method",userData)
        localStorage.setItem('userData', JSON.stringify(userData))
        return Result.data
    }
    catch (err) {
        console.log(err)
    }
})

const WishState = {
    WishListItems: [],
    users: {
        role: '',
        email: "",
        id: "",
        name:"",
        status:null,
        createAt:null,
        profilepic:"",
        msg:""

    },
    user:{},

    flag: null
}

const WishListSlice = createSlice({
    name: "wishlist",
    initialState: {
        Wish_Data: WishState
    },
    reducers: {
        addToWishList: (state, action) => {
            if (state.Wish_Data.WishListItems.length > 0) {
                console.log(action.payload)
                console.log(state.Wish_Data.WishListItems.length)
                const inCart = state.Wish_Data.WishListItems.find((product) => (product.id == action.payload.id))
                if (inCart === undefined) {

                    state.Wish_Data.WishListItems = [...state.Wish_Data.WishListItems, action.payload]
                }

            }
            else {
                console.log("inside the first Course")
                state.Wish_Data.WishListItems = [...state.Wish_Data.WishListItems, action.payload]
            }


        },
        removeFromWishList: (state, action) => {
            const id=action.payload
         removeItemFromWishlist(id)
            state.Wish_Data.WishListItems = state.Wish_Data.WishListItems.filter((item) => item.id !== action.payload)
           
        },
        itemPresentInWishlist: (state, action) => {
            const flagStatus = state.Wish_Data.WishListItems.find((product) => (product.id == action.payload.id))
            if (flagStatus === undefined) {
                state.Wish_Data.flag = false
            }
            else {
                state.Wish_Data.flag = true
            }
        },
        addUserDetails:(state,action)=>{
            state.Wish_Data.user = action.payload
        }

    },
    extraReducers: {
        [LoginUser.pending]: (state, action) => {

        }
        ,
        [LoginUser.fulfilled]: (state, action) => {
            if (!action.payload.status) return alert(action.payload.msg)

            const id = action.payload.id
            // const email = action.payload.email
            // const role = action.payload.role
            // const name=action.payload.name
            // const status=action.payload.status
            // const createdAt=action.payload.createAt
            // state.Wish_Data.users = { ...state.Wish_Data.user, id: id, role: role, email: email,name:name,status:status,createAt:createdAt }

        },
        [LoginUser.rejected]: (state, action) => {


        },
        [getOneUser.pending]:(state,action)=>{
            
        },
        [getOneUser.fulfilled]:(state,action)=>{
         
            state.Wish_Data.user = action.payload.user
            console.log( state.Wish_Data.user)
        },
        [getOneUser.rejected]:(state,action)=>{
            
        },

    }
})
export const { addToWishList, removeFromWishList, itemPresentInWishlist,addUserDetails } = WishListSlice.actions
export default WishListSlice.reducer