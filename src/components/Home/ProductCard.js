import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addToCart } from "../../actions/CartItems";
import { useDispatch } from 'react-redux'
import { addToWishList } from "../../actions/WishList";
import { ADD_tO_CART } from "../../actions/CartItems";
import { addItemToCart } from "../../LocalStorage/UseLocalStorage";
import { addOrderItem } from "../../LocalStorage/UseLocalStorage";
import { getOrders } from "../../LocalStorage/UseLocalStorage";
import { POST_ORDER_ITEM_TO_SALES } from "../../actions/CartItems";
import {
  addItemToWishlist,
  itemPresentInWishlist,
  removeItemFromWishlist,
} from '../../LocalStorage/UseLocalStorage'

const ProductCard = ({ product }) => {
  const UserData = JSON.parse(localStorage.getItem('userData')) || ""
  // console.log(userid)
  const [isInWishlist, setIsInWishlist] = useState(
    itemPresentInWishlist(product._id)
  );
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const options = {
    value: product.rating,
    readOnly: true,
    precision: 0.5,
  };

  // .......Add To Cart Itmems.......//
  const AddTocart = (items) => {

    console.log('Add to cart')
    dispatch(addToCart(items))
    let newobj = { ...items, qty: 1 }
    dispatch(ADD_tO_CART({ product: newobj, userid: localStorage.getItem('userid') }))


  }

  const setlocalStorage = (product) => {
    localStorage.setItem('product', JSON.stringify(product))
    navigate('/details')
  }

  function GoToCheckOut(product) {
    addOrderItem(product)
    navigate('/checkout')
    let obj={
      title:product.title,
      price:product.price,
      email:UserData.email,
      stocks:product.stocks
    }
    dispatch(POST_ORDER_ITEM_TO_SALES(obj))
    
  }

  //..... Add To wishlist..../////
  const AddTowishList = (items) => {
    console.log("addToWishList")
    // 1.check User is Authenticated or not
    console.log(items)
    //if Authenticated then make a post Request to backend
    dispatch(addToWishList(items))
  }

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 20 16"
        onClick={(e) => {
          e.stopPropagation();
          setIsInWishlist(!isInWishlist);
          if (isInWishlist) {
            removeItemFromWishlist(product._id);
          } else {
            addItemToWishlist({
              id: product._id,
              name: product.title,
              price: product.price,
              img: product.img[0],
            });
          }
        }}
      >
        <path
          d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
          fill={`${isInWishlist ? "red" : "white"}`}
          className="eX72wL"
          stroke="red"
          opacity=".9"
        ></path>
      </svg>
      <div className='prod' style={{ marginBottom: '15%', marginTop: '10%' }}>
        <div className="productCard" onClick={() => setlocalStorage(product)}>
          <img src={product.img[0]} alt={product.title} />
          <p>{product.title}</p>
          <div>

            <span className="productCardSpan">
              {" "}
              <p style={{ fontSize: "12px", fontWeight: "bold" }}>Stocks:{product.stocks}</p>
            </span>
          </div>

          <span>{`₹${product.price}`}</span>
        </div>
        </div>
        <div className="actionsoption">
          <div className="addtocart">
            <button className="btn3" style={{ backgroundColor: '#814827', color: 'white', padding: '5% 5% 5% 5%', borderRadius: '5px', width: '100px' }} onClick={() => AddTocart(product)}>AddToCart</button>
          </div>
          <div className="addtocart">
            <button className="btn3" style={{ backgroundColor: '#814827', color: 'white', padding: '5% 5% 5% 5%', borderRadius: '5px', width: '100px' }} onClick={() => GoToCheckOut(product)} >BuyNow</button>
          </div>
        </div>
      </div>
      );
};

      export default ProductCard;