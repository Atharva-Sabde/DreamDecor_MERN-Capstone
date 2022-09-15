import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
function Buttons({cartCount,user}) {
  const navigate = useNavigate();
  console.log("inside a button",user)
  return (
    <div className="buttonsnavbar">
        <Link to="/cart">
        <img className="additem" src="https://cdn-icons-png.flaticon.com/512/1170/1170627.png"></img>
        {cartCount>0 &&  <span className='count'>{cartCount}</span>}
        </Link>
      <div className="loginbtn">
        <button style={{backgroundColor:"#ed7745",border:"none",outline:"none"}} className="btn btn-primary" onClick={() => navigate("/wishlist")}>
          wishlist
        </button>
      </div>
      <div className="signupbtn">
        <button style={{backgroundColor:"#ed7745",border:"none",outline:"none"}} className="btn btn-primary" onClick={() => navigate("/loginsignup",{state:{value:user}})}>
          Signup
        </button>
      </div>
      </div>
  );
}

export default Buttons;