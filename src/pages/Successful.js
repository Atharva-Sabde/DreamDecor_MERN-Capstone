import React from 'react'
import '../components/order/Order.css'
import { useNavigate } from 'react-router-dom'
import orderPlacedClip from '../components/order/order-placed-clip.mp4'
const Successful = () => {
  const naviagate = useNavigate()
  return (
    <div className='successfulOrderContainer' style={{ margin: "100px 200px" }}>
     
      <div className="succescontainer">
      <h1>Order Placed <span style={{color:"crimson"}}>Successfully</span></h1>
        <div className="datathank">
          <div className="thank">
            <video
                className="orderPlacedClip__clip"
                src={orderPlacedClip}
                autoPlay
                loop
              ></video>
          </div>
        </div>
      </div>

      <button style={{ backgroundColor: "#855E42", color: "white", padding: "5px",display:"block",marginLeft:"100px",borderRadius:"5px" }} onClick={() => naviagate('/order')}>Go To My Order</button>
    </div>
  )
}

export default Successful