import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import './Navbartest.css'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Buttons from '../LandingPage/Buttons';
import UserMenuBar from '../LandingPage/UserMenuBar';
import { blue } from '@mui/material/colors';
const Navbartest = ({user}) => {
    const {data}=useSelector((state)=>state.productlist.Product_Data)
   
   
    const [cartCount, setCartCount] = useState(0);
    const navigate=useNavigate()
    const { cartItems } = useSelector((state) => state.cart.cart_Data)
    console.log(data)
 
    console.log(" Type of isSignedIn", typeof isSignedIn);
    const navigateButtonToUser=()=>{
        console.log("go to user page")
        navigate('/user')
    }
    useEffect(() => {
      let count = 0;
      cartItems.forEach((item) => {
        count += item.qty;
      });
  
      setCartCount(count);
    }, [cartItems, cartCount]);
    const handleOnSearch = (string, results) => {
        console.log(string, results);
    };

    const handleOnHover = (result) => {
        console.log(result);
    };

    const handleOnSelect = (item) => {
        
        localStorage.setItem('product', JSON.stringify(item))
        console.log(item)
        navigate('/details')
    };

    const handleOnFocus = () => {
        console.log("Focused");
    };

    const handleOnClear = () => {
        console.log("Cleared");
    };

    return (
        <div>
            {/* <div className="md:block desktop-nav"> */}
                <div className="Navbar w-full p-4 mr-0">
                    <div className="Navbar__left">
                        <div className="brand-name">
                            <div className="parent-brand-name" onClick={() => navigate("/user")}>
                                <div className="brandLogo">
                                    <img className='btanimg' onClick={navigateButtonToUser} src="./images/logo3.png" alt="" />
                                </div>
                                <div className="brandname text-primary">
                                    <h4  style={{color:"#825B1F",marginTop: '10px',fontSize: '160%',fontFamily: 'serif'}} >DreamDecor</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Navbar__right">
                        <div className="search-bar">
                            <ReactSearchAutocomplete
                                items={data}
                                maxResults={15}
                                onSearch={handleOnSearch}
                                onHover={handleOnHover}
                                onSelect={handleOnSelect}
                                onFocus={handleOnFocus}
                                placeholder="Search for product, brands and more"
                                onClear={handleOnClear}
                                fuseOptions={{ keys: ["title", "description"] }} // Search in the description text as well
                                styling={{
                                    zIndex: 100,
                                    borderRadius: "5px",
                                    boxShadow: "none",
                                    border: "2px solid  #C06D1F",
                                    height: "5vh",
                                    placeholderFontSize: "2.5vh",
                                    placeholderColor:blue,
                                    fontSize: "2.2vh",
                                }}
                                className="search" // To display it on top of the search box below
                            />
                        </div>
                        <div className="Navbar__right__right">
                            <div className="navbar-buttons">
                                <UserMenuBar cartCount={cartCount} user={user}/>
                            </div >
                        </div>
                    </div>
                </div>

            </div>
        // </div>
    )
}

export default Navbartest