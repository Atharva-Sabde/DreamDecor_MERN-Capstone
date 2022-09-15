import React from 'react'
import { useNavigate } from 'react-router-dom'
const SPsingleProduct = ({product}) => {
    const navigate=useNavigate()
    const setlocalStorage=(product)=>{
        localStorage.setItem('product', JSON.stringify(product))
        navigate('/details')
       }
  return (
    <div className="productCard"   >
    <img src={product.img[0]} alt={product.name} />
    <p>{product.title}</p>
    <div>

      <span className="productCardSpan">
        {" "}
        ({product.stocks} Reviews)
      </span>
    </div>
   
    <span>{`₹${product.price}`}</span>
    </div>
  )
}

export default SPsingleProduct