import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import SPsingleProduct from './SPsingleProduct';
const SpectatorProduct = () => {
    const {data}=useSelector((state)=>state.productlist.Product_Data)
    console.log(data)
  return (
    <div className="container" id="container">
            {data &&
              data.map((product) => (
                <SPsingleProduct key={data._id} product={product}></SPsingleProduct>
              ))}
          </div>
  )
}

export default SpectatorProduct