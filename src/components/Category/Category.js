import React, { Fragment, useEffect, useState } from "react";
import './category.css'
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
const Category = ({ data }) => {
    const navigate = useNavigate()
    const [datas,setData]=useState(data)
    console.log("inside a category", data)
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState([0, 200000]);
    const [ratings, setRatings] = useState(0);
    const [filterdata,setFilterdata]=useState(data)
    const filterData=()=>{
       let filterdatas = data.filter((item) => item.price >= price[0] && item.price <= price[1])
       console.log("inside the filter method",filterdatas)
       setFilterdata(filterdatas)
    }
    useEffect(()=>{
        console.log(data)
       },[])
    useEffect(()=>{
     console.log(data)
    },[datas])
    const priceHandler = (event, newPrice) => {
        console.log('Inside price Handler')
      
        setPrice(newPrice);
        filterData()
        // console.log(price[0], price[1])


    };
    const setlocalStorage=(product)=>{
        localStorage.setItem('product', JSON.stringify(product))
        navigate('/details')
       }

    useEffect(() => {
        console.log(price)
      console.log("inside the useeffect")
    }, [price,filterdata]);
    const categories = [
        "Laptop",
        "Footwear",
        "Bottom",
        "Tops",
        "Attire",
        "Camera",
        "SmartPhones",
    ];


    return (

        <div className='category-container'>

            <div className="specifications">

                <div className="filterBox">
                    {/* <Typography>Price</Typography> */}
                    <h3 style={{fontSize:"20px",color:"#C06D1F",fontWeight:"bold"}}>Price</h3>
                    <Slider
                        value={price}
                        onChange={priceHandler}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        min={0}
                        max={200000}
                    />
                    <fieldset>
                        <Typography component="legend">Ratings Above</Typography>
                        <Slider
                            value={ratings}
                            onChange={(e, newRating) => {
                                setRatings(newRating);
                            }}
                            aria-labelledby="continuous-slider"
                            valueLabelDisplay="auto"
                            min={0}
                            max={5}
                        />
                    </fieldset>

                </div>
            </div>
            <div className="products">

                {filterdata.map((item) => {
                    return (
                        <div className="productCard" onClick={()=>setlocalStorage(item)}>
                            <img src={item.img[0]} alt={item.name} />
                            <p>{item.title}</p>
                            <div>
                           
                                <span className="itemCardSpan">
                                    {" "}
                                    (297 Reviews)
                                </span>
                            </div>
                            <div className="overallrate"> <span>  4.3</span>
                            <img src="https://cdn-icons-png.flaticon.com/128/7753/7753789.png" alt="" />
                            </div>
                            <span>{`₹${item.price}`}</span>
                        </div>
                  
                    )
                })
                }
            </div>
        </div>
    )
}

export default Category