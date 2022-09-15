import React from 'react'
import { useSelector, useDispatch } from "react-redux";
// import data from '../components/ViewData';
import ProductCard from '../components/Home/ProductCard';
import '../components/Home/Home.css'

const Home = () => {
  const {data}=useSelector((state)=>state.productlist.Product_Data)
  return (
    <div className="container" id="container">
            {data &&
              data.map((product) => (
                <ProductCard key={data._id} product={product} />
              ))}
          </div>
  )
}

export default Home