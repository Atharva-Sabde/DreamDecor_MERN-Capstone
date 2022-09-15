import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import './Users.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import validator from "validator"
import emailjs from "emailjs-com"
import { createUsers, deleteUsers, getUsers, updateCoupon, updateUsers } from "../Slice"
const Users=()=>{
    const dispatch=useDispatch()
    const {loading,users}=useSelector((state)=>state.info.data)
    const [itemid,setItemid]=useState(-1)
    // const [item,setItem]=useState({})
    const [updateStatus,setUpdateStatus]=useState(false)
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState(0)
    const [address,setAddress]=useState('')
    const [password,setPassword]=useState('')
    const [role,setRole]=useState('')
    const [isAdd,setIsAdd]=useState(false)
    const [unameF,setUnameF]=useState('')
    const [emailF,setEmailF]=useState('')
    const [phoneF,setPhoneF]=useState(null)
    const [cityF,setCityF]=useState('')
    const [passwordF,setPasswordF]=useState('')
    const [roleF,setRoleF]=useState('')
    const [isEmail,setIsEmail]=useState(false)
    const [toName,setToName]=useState('')
    const [toEmail,setToEmail]=useState('')
    // const [code,setCode]=useState('')
    const [sendCodeId,setSendCodeId]=useState('')
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    const handleDelete=(itemid)=>{
        dispatch(deleteUsers(itemid))
    }
    const handleUpdate=(item,itemid)=>{
        setItemid(itemid)
        // setItem(item)
        setUpdateStatus(true)
        setUname(item.name)
        setEmail(item.email)
        setPhone(item.phone)
        setAddress(item.address)
        setPassword(item.password)
        setRole(item.role)
    }
    const handleChange=(e,val)=>{
        if(val==='uname') setUname(e.target.value)
        if(val==='email') setEmail(e.target.value)
        if(val==='phone') setPhone(e.target.value)
        if(val==='address') setAddress(e.target.value)
        if(val==='password') setPassword(e.target.value)
        if(val==='role') setRole(e.target.value)
    }
    const handleCheck=(e)=>{
        e.preventDefault()
        if(!uname||!email||!phone||!address||!password||!role) return alert("Field empty!")
        // dispatch(updateUsers({uid:itemid,uname:uname,email:email,phone:phone,address:address,password:password,role:role}))
        // setItemid(-1)
        // setUpdateStatus(false)
        else if(!validator.isEmail(email)) return alert("Please, enter valid Email!")
        else if(phone.toString().length<10) return alert("Please, enter valid Phone Number!")
        else if(validator.isStrongPassword(password, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})===false) return alert("Password should be of minimum lowercase : 1, minimum uppecase : 1, minimum numbers : 1, minimum symbols : 1 & minimum length : 8 !")
        else if(role!=='admin') {
            if(role!=='user') return alert("admin/user roles are allowed only!")
            else {
                dispatch(updateUsers({uid:itemid,uname:uname,email:email,phone:phone,address:address,password:password,role:role}))
                setItemid(-1)
                setUpdateStatus(false)
            }
        }
        else {
            dispatch(updateUsers({uid:itemid,uname:uname,email:email,phone:phone,address:address,password:password,role:role}))
            setItemid(-1)
            setUpdateStatus(false)
        }
    }
    const handlePlus=()=>{
        setIsAdd(!isAdd)
        setUnameF('')
        setEmailF('')
        setPhoneF(null)
        setCityF('')
        setPasswordF('')
        setRoleF('')
    }
    const handleForm=(e,val)=>{
        if(val==='unameF') setUnameF(e.target.value)
        if(val==='emailF') setEmailF(e.target.value)
        if(val==='phoneF') setPhoneF(e.target.value)
        if(val==='cityF') setCityF(e.target.value)
        if(val==='passwordF') setPasswordF(e.target.value)
        if(val==='roleF') setRoleF(e.target.value)
    }
    const handleCreate=(e)=>{
        e.preventDefault()
        if(!unameF||!emailF||!phoneF||!cityF||!passwordF||!roleF) return alert("Field empty!")
        else if(!validator.isEmail(emailF)) return alert("Please, enter valid Email!")
        else if(phoneF.toString().length<10) return alert("Please, enter valid Phone Number!")
        else if(validator.isStrongPassword(passwordF, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})===false) return alert("Password should be of minimum lowercase : 1, minimum uppecase : 1, minimum numbers : 1, minimum symbols : 1 & minimum length : 8 !")
        else if(roleF!=='admin') {
            if(roleF!=='user') return alert("admin/user roles are allowed only!")
            else {
                dispatch(createUsers({uname:unameF,email:emailF,phone:phoneF,address:cityF,password:passwordF,role:roleF}))
                handlePlus()
            }
        }
        else {
            dispatch(createUsers({uname:unameF,email:emailF,phone:phoneF,address:cityF,password:passwordF,role:roleF}))
            handlePlus()
        }
    }
    const handleEmail=(e,item)=>{
        setIsEmail(true)
        setToName(item.name)
        setToEmail(item.email)
        setSendCodeId(item._id)
    }
    const handleX=()=>{
        setIsEmail(false)
    }
    const handleSend=(e)=>{
        e.preventDefault()
        if(!e.target.from_name.value||!e.target.to_name.value||!e.target.user_email.value||!e.target.message.value) return alert("Field empty!")
        emailjs.sendForm('service_7l97l1o','template_mughuc8',e.target,'qbCHopkDwPISNkd_h').then((res)=>{
            setIsEmail(false)
            setToName('')
            setToEmail('')
            // setCode(e.target.message.value)
            dispatch(updateCoupon({uid:sendCodeId,coupon:e.target.message.value,couponCreatedAt:Date.now(),couponExpiryTime:86400000}))
            console.log(res)
            console.log(e.target.message.value)
            return alert("Email sent to user successfully!")
        }).catch((err)=>{
            console.log(err)
            return alert("Error occured while sending email!")
        })
    }
    return(
        <div>
            <Navbar></Navbar>
            {isEmail&&<div style={{position: 'fixed',backgroundColor: 'white',boxShadow: '0px 0px 5px 0px #888888',marginTop: '12px',marginLeft: '33%',width: '450px',height: '350px',zIndex: '99',borderRadius: '5px',backgroundImage: `url("https://augustafreepress.com/wp-content/uploads/2022/03/email-marketing-business-laptop.jpg")`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center'}}>
                <i style={{position: 'absolute',margin: '9px',marginLeft: '410px',color: 'white',fontSize: '25px',cursor: 'pointer'}} className="fa-solid fa-xmark" onClick={handleX}></i>
                <form style={{margin: '20px'}} onSubmit={handleSend}>
                    <input type='text' style={{fontFamily: 'serif',width: '100%',marginBottom: '10px',marginTop: '20px',height: '35px'}} className="hello" placeholder="From (your name)..." name="from_name"></input>
                    <input type='text' style={{fontFamily: 'serif',width: '100%',marginBottom: '10px',height: '35px',backgroundColor: 'white'}} className="hello" placeholder="To (receiver's name)..." name="to_name" value={toName}></input>
                    <input type='email' style={{fontFamily: 'serif',width: '100%',marginBottom: '10px',height: '35px',backgroundColor: 'white'}} className="hello" placeholder="To Email ID (receiver's email id)..." name="user_email" value={toEmail}></input>
                    <textarea name="message" rows='4' style={{fontFamily: 'serif',width: '100%',marginBottom: '10px'}} className="hello" placeholder="Message to User (send coupon code to validate offer)..."></textarea>
                    {/* <button className="btn chng" style={{marginLeft: '37%',cursor: 'pointer'}} onClick={(e)=>handleSend(e)}>Send Email</button> */}
                    <input type='submit' value='Send Email' className="btn chng" style={{marginLeft: '37%',cursor: 'pointer',fontFamily: 'serif'}}></input>
                </form>
            </div>}
            <div>
            <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '100px',marginRight: '100px',padding: '30px',marginTop: '180px',marginBottom: '140px'}}>
                <a style={{position: 'absolute',marginLeft: '900px'}}><Link className="back" to='/admin_dashboard'><i className="fa-solid fa-arrow-left-long"></i><h8> Back</h8></Link></a>
                <h4 style={{fontSize: '18px',color: '#5a5a5a',alignSelf: 'flex-start',marginBottom: '40px',marginLeft: '10px'}}>Update User Details</h4>
                <hr
                    style={{
                        color: 'grey',
                        backgroundColor: 'grey',
                        height: 1
                    }}
                />
                <div style={{margin: '10px',position: 'absolute'}}>
                    <div style={{display: 'flex',marginLeft: '45px',color: '#EA9130',fontFamily: 'sans-serif'}}>
                        <h8 style={{marginRight: '105px'}}>User name</h8>
                        <h8 style={{marginRight: '135px'}}>User email</h8>
                        <h8 style={{marginRight: '50px'}}>User phone</h8>
                        <h8 style={{marginRight: '45px'}}>User country</h8>
                        <h8 style={{marginRight: '52px'}}>User password</h8>
                        <h8>User role</h8>
                    </div>
                </div>
                <div style={{margin: '20px',height: '500px',width: '100%',marginTop: '60px',overflowY: 'auto',overflowX: 'hidden'}}>
                    <div style={{width: '100%',height: '100px'}}>
                            {
                                users.map((item)=>(
                                    <div style={{width: '942px',height: '50px',margin: '10px',boxShadow: '0px 0px 5px 0px #888888',padding: '13px',borderRadius: '5px'}}>
                                        <div style={{display: 'flex',position: 'relative'}}>
                                            {updateStatus&&itemid===item._id?<input type='text' style={{width: '150px',marginTop: '-3px',marginRight:'10px',fontFamily: 'serif'}} onChange={(e)=>handleChange(e,"uname")} value={uname} className="hello"></input>:<h8 style={{position: 'absolute',fontFamily: 'serif'}}>{item.name}</h8>}

                                            {updateStatus&&itemid===item._id?<input type='text' style={{width: '180px',marginTop: '-3px',marginRight:'10px',fontFamily: 'serif'}} onChange={(e)=>handleChange(e,"email")} value={email} className="hello"></input>:<><i style={{marginLeft: '150px',marginTop: '5px',position: 'absolute',cursor: 'pointer'}} className="fa-solid fa-envelope" onClick={(e)=>handleEmail(e,item)}></i><h8 style={{marginLeft: '180px',position: 'absolute',fontFamily: 'serif'}}>{item.email}</h8></>}

                                            {updateStatus&&itemid===item._id?<input type='number' style={{width: '145px',marginTop: '-3px',marginRight:'10px',fontFamily: 'serif'}} onChange={(e)=>handleChange(e,"phone")} value={phone} className="hello"></input>:<h8 style={{marginLeft: '390px',position: 'absolute',fontFamily: 'serif'}}>{item.phone}</h8>}

                                            {updateStatus&&itemid===item._id?<input type='text' style={{width: '110px',marginTop: '-3px',marginRight:'10px',fontFamily: 'serif'}} onChange={(e)=>handleChange(e,"address")} value={address} className="hello"></input>:<h8 style={{marginLeft: '540px',position: 'absolute',fontFamily: 'serif'}}>{item.address}</h8>}

                                            {updateStatus&&itemid===item._id?<input type='text' style={{width: '130px',marginTop: '-3px',marginRight:'10px',fontFamily: 'serif'}} onChange={(e)=>handleChange(e,"password")} value={password} className="hello"></input>:<h8 style={{marginLeft: '650px',position: 'absolute',fontFamily: 'serif'}}>{item.password}</h8>}

                                            {updateStatus&&itemid===item._id?<input type='text' style={{width: '100px',marginTop: '-3px',marginRight:'10px',fontFamily: 'serif'}} onChange={(e)=>handleChange(e,"role")} value={role} className="hello"></input>:<h8 style={{marginLeft: '790px',position: 'absolute',fontFamily: 'serif'}}>{item.role}</h8>}

                                            {updateStatus&&itemid===item._id?<i style={{marginLeft: '870px',marginTop: '4px',position: 'absolute',cursor: 'pointer'}} onClick={(e)=>handleCheck(e)} className="fa-solid fa-check"></i>:<i style={{marginLeft: '870px',marginTop: '4px',position: 'absolute',cursor: 'pointer'}} className="fa-solid fa-pen-to-square" onClick={()=>handleUpdate(item,item._id)}></i>}

                                            <i style={{marginLeft: '900px',marginTop: '4px',position: 'absolute',cursor: 'pointer'}} className="fa-solid fa-trash" onClick={()=>handleDelete(item._id)}></i>
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                </div>
                <div style={{margin: '10px',marginLeft: '-8px'}}>
                    <div style={{borderRadius: '50%',height: '50px',width: '50px',backgroundColor: '#FFBF00',position: 'relative'}}>
                        {isAdd?<i style={{fontSize: '30px',position: 'absolute',marginLeft: '12px',marginTop: '10px',cursor: 'pointer'}} className="fa-solid fa-minus" onClick={handlePlus}></i>:<i style={{fontSize: '30px',position: 'absolute',marginLeft: '12px',marginTop: '10px',cursor: 'pointer'}} className="fa-solid fa-plus" onClick={handlePlus}></i>}
                    </div>
                    {isAdd&&<div style={{position: 'absolute',marginTop: '-38px',marginLeft: '60px'}}>
                        <form>
                            <input type='text' style={{width: '150px',marginTop: '-3px',marginRight:'10px',fontFamily: 'serif'}} className="hello" placeholder="User name..." onChange={(e)=>handleForm(e,'unameF')} value={unameF}></input>

                            <input type='text' style={{width: '180px',marginTop: '-3px',marginRight:'10px',fontFamily: 'serif'}} className="hello" placeholder="User email..." onChange={(e)=>handleForm(e,'emailF')} value={emailF}></input>

                            <input type='number' style={{width: '145px',marginTop: '-3px',marginRight:'10px',fontFamily: 'serif'}} className="hello" placeholder="User phone no..." onChange={(e)=>handleForm(e,'phoneF')} value={phoneF}></input>

                            <input type='text' style={{width: '110px',marginTop: '-3px',marginRight:'10px',fontFamily: 'serif'}} className="hello" placeholder="User country..." onChange={(e)=>handleForm(e,'cityF')} value={cityF}></input>

                            <input type='text' style={{width: '130px',marginTop: '-3px',marginRight:'10px',fontFamily: 'serif'}} className="hello" placeholder="User password..." onChange={(e)=>handleForm(e,'passwordF')} value={passwordF}></input>

                            <input type='text' style={{width: '100px',marginTop: '-3px',marginRight:'10px',fontFamily: 'serif'}} className="hello" placeholder="User role..." onChange={(e)=>handleForm(e,'roleF')} value={roleF}></input>

                            <button className="btn chng" style={{cursor: 'pointer',position: 'absolute',marginLeft: '10px',marginTop: '-5px'}} onClick={(e)=>handleCreate(e)}>Create</button>
                        </form>
                    </div>}
                </div>
            </div>
            </div>
        </div>
    )
}
export default Users