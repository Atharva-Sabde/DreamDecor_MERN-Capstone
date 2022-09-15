import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../components/Wishlist.css'
import { removeFromWishList } from '../actions/WishList';
import MetaData from '../layout/MetaData';

import ReactStars from "react-rating-stars-component";
import { useSelector } from 'react-redux';
import { getWishlist } from '../LocalStorage/UseLocalStorage';
import Navbartest from '../components/navbar/Navbartest';
import Subnavbar from '../components/LandingPage/Subnavbar';
import { removeItemFromWishlist } from '../LocalStorage/UseLocalStorage';
const WishList = ({user}) => {
  const [cartCount, setCartCount] = useState(0);
  // const { WishListItems } = useSelector((state) => state.wishlist.Wish_Data)
  const WishListItems=getWishlist()
  const dispatch = useDispatch()
  // const [isInWishlist, setIsInWishlist] = useState(
  //   itemPresentInWishlist(product._id)
  // );
  const removeFromWishList=(id)=>{
    removeItemFromWishlist(id)
    removeFromWishList(id)
  }
  useEffect(() => {
    let count = 0;
    count = WishListItems.length

    setCartCount(count);
  }, [WishListItems, cartCount]);
  return (
    <>
      <MetaData title={`${user.name}'s Wishlist`} />
      <Navbartest 
       user={user}></Navbartest>
      {/* <Subnavbar></Subnavbar> */}
    <div className='wishlist'>
      <div className="wishtitle">
        <h2> My WishList ({cartCount}) </h2>
      </div>
      <div className="wishItems">
        {
          WishListItems.map((item) => {
            return (
              <div className="wish">
                <div className="wishimage">
                  <img src={item.img} alt="" />
                </div>
                <div className="wishdesc">
                  <h1 style={{fontSize:"15px",textAlign:"center", color:"#825B1F"}}>{item.name}</h1>
                  {/* <div className="rating">
                    <ReactStars /><span className='review'>253 reviews</span>
                  </div> */}
                  <p style={{textAlign:"center",fontWeight:"boldm" }}>Rs.{item.price}/-</p>

                </div>
                <div className="action">
                  <img className='remove' onClick={() =>removeFromWishList(item.id)} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLjUuNWgxNXYxNWgtMTV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0MyQzJDMiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMSAxMy44MzNjMCAuOTE3Ljc1IDEuNjY3IDEuNjY3IDEuNjY3aDYuNjY2Yy45MTcgMCAxLjY2Ny0uNzUgMS42NjctMS42Njd2LTEwSDF2MTB6bTEwLjgzMy0xMi41SDguOTE3TDguMDgzLjVIMy45MTdsLS44MzQuODMzSC4xNjdWM2gxMS42NjZWMS4zMzN6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="" />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default WishList