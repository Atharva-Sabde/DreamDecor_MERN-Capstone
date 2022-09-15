import React from "react";
import "./Subnav.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
function Subnavbar() {
  const {data}=useSelector((state)=>state.productlist.Product_Data)
  console.log(data)
  const navigate = useNavigate()
  const setCategory=(e)=>{
    console.log(e.target.name)

    const filterData=data.filter((item)=>item.category===e.target.name)
    console.log(filterData)
    navigate('/catdispage',{state:{value:filterData}})

  }
  return (
    <>
      <div className="subnav-parent bg-white sticky-top">
        <div className="text-uppercase text-primary">
          <input  style={{color:"#966F33"}} type="button" className='btn1' name="Office" value='OFFICE'  onClick={(e)=>setCategory(e)}/>
        </div>
        <div className="text-uppercase text-primary">
        <input style={{color:"#966F33"}} type="button" className='btn1' name="Living Room" value='LIVING ROOM' onClick={(e)=>setCategory(e)} />
        </div>
        <div className="text-uppercase text-primary">
        <input style={{color:"#966F33"}} type="button"  className='btn1' name="Bed Room" value='BED ROOM' onClick={(e)=>setCategory(e)} />
        </div>
        <div className="text-uppercase text-primary">
        <input style={{color:"#966F33"}} type="button" className='btn1' name="Dining" value='DINNING' onClick={(e)=>setCategory(e)} />
        </div>
        <div className="text-uppercase text-primary">
        <input style={{color:"#966F33"}} type="button"  className='btn1'name="Kids" value='KIDS' onClick={(e)=>setCategory(e)} />
        </div>

      </div>
    </>
  );
}

export default Subnavbar;