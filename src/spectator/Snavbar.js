import React from 'react'
import './Snavbar.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Snavbar = () => {
    const navigate=useNavigate()
    const LoginSignup=()=>{
        navigate('/loginsignup')
    }
  return (
    <div className='SpectatorContainer'>
          <div className="spectatorbrand">
            <div className="spectatorimg">
            <img onClick={()=>navigate('/')} src="./images/logo3.png" alt="brand" />
            </div>
           <div className="specttaortitlebrand">
            <h3 style={{color:"#825B1F",fontSize:'20px',fontWeight:"bold"}}>DreamDecor</h3>
           </div>
         
          </div>

          <div className="spectatorsignup">
            <button  className='mainloginSignup' onClick={LoginSignup}>Login<span>/</span>Signup</button>
          </div>
    </div>
  )
}

export default Snavbar