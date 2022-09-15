import { configureStore } from "@reduxjs/toolkit";
import CartItems from "../actions/CartItems";
import WishList from "../actions/WishList";
import Slice from "../adminComponent/Slice";
import Products from "../actions/Products";

const store=configureStore({
    reducer:{
        cart:CartItems,
        wishlist:WishList,
        info:Slice,
        productlist:Products
    }
   
})
export default store