import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import MenuBar from '../MenuBar';
const UserMenuBar = ({cartCount,user}) => {
    const navigate = useNavigate();
  return (
    <div className="buttonsnavbar">
        <Link to="/cart">
        <img  style={{height:"30px",width:"40px"}} src="https://cdn-icons-png.flaticon.com/512/1170/1170627.png"></img>
        {cartCount>0 &&  <span className='count'>{cartCount}</span>}
        </Link>
      <div className="loginbtn">
        <button className="btn2" onClick={() => navigate("/wishlist")}>
          wishlist
        </button>
      </div>
      <div className="signupbtn">
       <MenuBar user={user}></MenuBar>
        
      </div>
      </div>
  )
}

export default UserMenuBar