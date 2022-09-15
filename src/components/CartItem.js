import React from 'react'
import { useState } from 'react';
import '../components/cartItem.css'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/CartItems';
import { UpdateQuantity } from '../actions/CartItems';


export const CartItem = ({ item }) => {
    console.log(item)

    const [input, setInput] = useState(item.qty);
    const dispatch = useDispatch()
    const onChangeHandler = (e) => {
        if (e.target.value > 0) {
            let data = +(e.target.value) + 1
            setInput(data);
            let qnty = e.target.value
            dispatch(UpdateQuantity({ _id: item._id, qty: input }));
        }

    };
    return (
        <>
            <hr />
            <div className='itemContainer'>
                <div className='imgc'>
               
                    <img style={{marginTop:"10px" }} src={item.img[0]} alt={item.name} />
                </div>
                <div className='desc'>
                    <div className='itemName'>
                        <h3 style={{color:"#825B1F" }} >{item.title}</h3>
                        <h3 >{item.qty}</h3>
                       
                    </div>
                    <div className='itemQuantity'>
                        <label htmlFor="qty">Qty</label>
                        <input
                           className='qtycount'
                            min="1"
                            type="number"
                            _id="qty"
                            name="qty"
                            value={input}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className='itemdesc'>
                        <p style={{ color: '#222f3e', fontFamily: 'cursive', textAlign: 'justify' }} >{item.desc}</p>
                    </div>
                    <div className='pc'>
                        <button 
                        className='removefromcart' style={{borderRadius:"5px",color:"white",padding:"5px",marginRight:"15px" }}
                            onClick={() => dispatch(removeFromCart(item._id))}
                        >
                            Delete
                        </button>
                        <h3 style={{ fontSize:"20px",color:"#825B1F",fontWeight:"bold" }}>₹ {item.price}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

