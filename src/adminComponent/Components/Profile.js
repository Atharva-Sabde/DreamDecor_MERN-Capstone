import { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOneUser, getUsers, updateProfile } from "../Slice"
import Navbar from "./Navbar"
import styled from 'styled-components';
const Profile=()=>{
    const dispatch=useDispatch()
    const ref=useRef()
    const {user}=useSelector((state)=>state.info.data)
    // const user=JSON.parse(localStorage.getItem("userData"))
    console.log("userprofile",user)
    const [flag,setFlag]=useState(false)
    const [finalImg,setFinalImg]=useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png')
    // const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')))
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState(null)
    const [country,setCountry]=useState('')
    useEffect(()=>{
        dispatch(getOneUser(localStorage.getItem('userid')))
    },[])
    const handleFlag=()=>{
        setFlag(!flag)
        setFinalImg(user.img)
        setUname(user.name)
        setEmail(user.email)
        setPhone(user.phone)
        setCountry(user.address)
    }
    const handleR=()=>{
        setFinalImg(user.img)
    }
    const handleT=()=>{
        setFinalImg('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png')
    }
    const handleClick=()=>{
        ref.current.click()
    }
    const handleChange=(e)=>{
        setFinalImg(URL.createObjectURL(e.target.files[0]))
    }
    const handleInput=(e,val)=>{
        if(val==='uname') setUname(e.target.value)
        if(val==='email') setEmail(e.target.value)
        if(val==='phone') setPhone(e.target.value)
        if(val==='country') setCountry(e.target.value)
    }
    const handleSave=(e)=>{
        e.preventDefault()
        dispatch(updateProfile({uid:localStorage.getItem('userid'),img:finalImg,uname:uname,email:email,phone:phone,address:country}))
        setFlag(!flag)
        setFinalImg('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png')
        setUname('')
        setEmail('')
        setPhone(null)
        setCountry('')
    }
    const handleBack=()=>{
        setFlag(!flag)
    }
    return(
        <div>
            {console.log(finalImg)}
            <Navbar/>
            <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',height: '300px',width: '300px',marginTop: '220px',marginLeft: '510px',position: 'relative',borderRadius: '5px',backgroundColor: '#dcdde1'}}>
                {flag?<img src={`${finalImg}`} alt="img" style={{borderRadius: '50%',height: '60px',width: '60px',marginLeft: '120px',position: 'absolute',marginTop: '20px',border: '1px solid grey'}}></img>:<img src={`${user.img}`} alt="img" style={{position: 'absolute',borderRadius: '50%',height: '90px',width: '90px',marginLeft: '110px',marginTop: '10px',border: '1px solid grey'}}></img>}
                {flag&&<><i className="fa fa-light fa-camera" style={{fontSize: '130%',position: 'absolute',marginTop: '60px',marginLeft: '160px',cursor: 'pointer'}} onClick={handleClick}></i><i style={{cursor: 'pointer',marginTop: '63px',marginLeft: '180px',position: 'absolute'}} className="fa-solid fa-arrow-rotate-right" onClick={handleR}></i><i style={{cursor: 'pointer',marginTop: '63px',marginLeft: '200px',position: 'absolute'}} className="fa-regular fa-trash-can" onClick={handleT}></i></>}
                <input type='file' ref={ref} onChange={(e)=>handleChange(e)} style={{display: 'none'}}></input>
                {flag?<input className="hello" style={{fontFamily: 'serif',marginLeft: '62px',position: 'absolute',marginTop: '100px'}} type='text' placeholder="Name" onChange={(e)=>handleInput(e,'uname')} value={uname}></input>:<h5 style={{fontFamily: 'serif',marginLeft: '108px',position: 'absolute',marginTop: '120px',color: '#EA9130'}}>{user.name} </h5>}
                {flag?<input className="hello" style={{fontFamily: 'serif',marginLeft: '62px',position: 'absolute',marginTop: '140px'}} type='text' placeholder="Email" onChange={(e)=>handleInput(e,'email')} value={email}></input>:<h5 style={{fontFamily: 'serif',position: 'absolute',marginLeft: '85px',marginTop: '150px',color: '#EA9130'}}><h8 style={{fontSize: '90%',color: '#814827'}}>Email: </h8>{user.email}</h5>}
                {flag?<input className="hello" style={{fontFamily: 'serif',marginLeft: '62px',position: 'absolute',marginTop: '180px'}} type='number' placeholder="Phone No." onChange={(e)=>handleInput(e,'phone')} value={phone}></input>:<h5 style={{fontFamily: 'serif',position: 'absolute',marginLeft: '95px',marginTop: '185px',color: '#EA9130'}}><h8 style={{fontSize: '90%',color: '#814827'}}>Phone No: </h8>{user.phone}</h5>}
                {flag?<input className="hello" style={{fontFamily: 'serif',marginLeft: '62px',position: 'absolute',marginTop: '220px'}} type='text' placeholder="Country" onChange={(e)=>handleInput(e,'country')} value={country}></input>:<h5 style={{fontFamily: 'serif',position: 'absolute',marginLeft: '120px',marginTop: '220px',color: '#EA9130'}}><h8 style={{fontSize: '90%',color: '#814827'}}>Country: </h8>{user.address}</h5>}
                {flag?<h8 style={{position: 'absolute',marginTop: '260px',marginLeft: '230px',cursor: 'pointer',color: '#EA9130'}} onClick={(e)=>handleSave(e)}>Save</h8>:<i style={{fontSize: '130%',position: 'absolute',marginTop: '260px',marginLeft: '255px',cursor: 'pointer'}} className="fa-solid fa-pen-to-square" onClick={handleFlag}></i>}
                {flag&&<i style={{fontSize: '150%',position: 'absolute',marginLeft: '30px',marginTop: '20px',cursor: 'pointer'}} className="fa-solid fa-arrow-left-long" onClick={handleBack}></i>}
            </div>
        </div>
    )
}
export default Profile