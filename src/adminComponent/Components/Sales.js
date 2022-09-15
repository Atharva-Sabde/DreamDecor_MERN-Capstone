import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteSales, getSalesReport } from "../Slice"
// import emailjs from "emailjs-com"
import './Sales.css'
const Sales=()=>{
    const dispatch=useDispatch()
    const {sales}=useSelector((state)=>state.info.data)
    // const [isEmail,setIsEmail]=useState(false)
    // const [toName,setToName]=useState('Product Team')
    // const [toEmail,setToEmail]=useState('drivearitry08@gmail.com')
    // const [title,setTitle]=useState('')
    // const [price,setPrice]=useState(-1)
    // const [quantity,setQuantity]=useState(-1)
    useEffect(()=>{
        dispatch(getSalesReport())
    },[])
    const handleDelete=(itemid)=>{
        dispatch(deleteSales(itemid))
    }
    // const handleEmail=(item)=>{
    //     setIsEmail(true)
    //     setTitle(item.productTitle)
    //     setPrice(item.productPrice)
    //     setQuantity(item.productQuantity)
    // }
    // const handleX=()=>{
    //     setIsEmail(false)
    // }
    // const handleSend=(e)=>{
    //     e.preventDefault()
    //     if(!e.target.from_name.value||!e.target.to_name.value||!e.target.user_email.value||!e.target.message.value||!e.target.price.value||!e.target.quantity.value) return alert("Field empty!")
    //     emailjs.sendForm('service_7l97l1o','template_uokwuyu',e.target,'qbCHopkDwPISNkd_h').then((res)=>{
    //         setIsEmail(false)
    //         setTitle('')
    //         setPrice(-1)
    //         setQuantity(-1)
    //         return alert("Email sent to product team successfully!")
    //     }).catch((err)=>{
    //         console.log(err)
    //         return alert("Error occured while sending email!")
    //     })
    // }
    return(
        <div>
            <Navbar/>
            {/* {isEmail&&<div style={{position: 'fixed',backgroundColor: 'white',boxShadow: '0px 0px 5px 0px #888888',marginTop: '12px',marginLeft: '33%',width: '450px',height: '350px',zIndex: '99',borderRadius: '5px',backgroundImage: `url("https://augustafreepress.com/wp-content/uploads/2022/03/email-marketing-business-laptop.jpg")`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center'}}>
                <i style={{position: 'absolute',margin: '9px',marginLeft: '410px',color: 'white',fontSize: '25px',cursor: 'pointer'}} className="fa-solid fa-xmark" onClick={handleX}></i>
                <form style={{margin: '20px'}} onSubmit={handleSend}>
                    <input type='text' style={{fontFamily: 'serif',width: '100%',marginBottom: '10px',marginTop: '20px',height: '35px'}} className="hello" placeholder="From (your name)..." name="from_name" value="Dream Decors"></input>
                    <input type='text' style={{fontFamily: 'serif',width: '100%',marginBottom: '10px',height: '35px',backgroundColor: 'white'}} className="hello" placeholder="To (receiver's name)..." name="to_name" value={toName}></input>
                    <input type='email' style={{fontFamily: 'serif',width: '100%',marginBottom: '10px',height: '35px',backgroundColor: 'white'}} className="hello" placeholder="To Email ID (receiver's email id)..." name="user_email" value={toEmail}></input>
                    <textarea name="message" rows='2' style={{fontFamily: 'serif',width: '100%',marginBottom: '10px'}} className="hello" placeholder="Product Title..." value={title}></textarea>
                    <input type='number' style={{fontFamily: 'serif',width: '48%',marginRight: '15px',marginBottom: '10px',height: '35px',backgroundColor: 'white'}} className="hello" placeholder="Product Price..." name="price" value={price}></input>
                    <input type='number' style={{fontFamily: 'serif',width: '48%',marginBottom: '10px',height: '35px',backgroundColor: 'white'}} className="hello" placeholder="Product Quantity..." name="quantity" value={quantity}></input>
                    <input type='submit' value='Send Email' className="btn chng" style={{marginLeft: '37%',cursor: 'pointer',fontFamily: 'serif'}}></input>
                </form>
            </div>} */}
            <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '100px',marginRight: '100px',padding: '30px',marginTop: '180px',marginBottom: '140px'}}>
                <a style={{position: 'absolute',marginLeft: '900px'}}><Link className="back" to='/admin_dashboard'><i className="fa-solid fa-arrow-left-long"></i><h8> Back</h8></Link></a>
                <h4 style={{fontSize: '18px',color: '#5a5a5a',alignSelf: 'flex-start',marginBottom: '40px',marginLeft: '10px'}}>Sales Report</h4>
                <hr
                    style={{
                        color: 'grey',
                        backgroundColor: 'grey',
                        height: 1
                    }}
                />
                <div style={{margin: '12px',position: 'absolute'}}>
                    <div style={{display: 'flex',marginLeft: '50px',color: '#EA9130',fontFamily: 'sans-serif'}}>
                        <h8 style={{marginRight: '182px'}}>User Email</h8>
                        <h8 style={{marginRight: '230px'}}>Product Title</h8>
                        <h8 style={{marginRight: '45px'}}>Price</h8>
                        <h8 style={{marginRight: '38px'}}>Quantity</h8>
                        <h8>Order Date & Time</h8>
                    </div>
                </div>
                <div style={{margin: '20px',height: '500px',width: '100%',marginTop: '60px',overflowY: 'auto',overflowX: 'hidden'}}>
                    <div style={{width: '100%',height: '100px'}}>
                            {
                                sales.map((item)=>(
                                    <div style={{width: '942px',height: '50px',margin: '10px',boxShadow: '0px 0px 5px 0px #888888',padding: '13px',borderRadius: '5px'}}>
                                        <div style={{display: 'flex',position: 'relative'}}>
                                            <h8 style={{position: 'absolute',fontFamily: 'serif'}}>{item.userEmail}</h8>

                                            {/* {item.productQuantity<=10&&<i style={{marginLeft: '690px',marginTop: '5px',position: 'absolute',cursor: 'pointer'}} className="fa-solid fa-envelope" onClick={()=>handleEmail(item)}></i>} */}

                                            <h8 style={{marginLeft: '170px',position: 'absolute',fontFamily: 'serif',fontSize: '85%',marginTop: '2px'}}>{item.productTitle}</h8>

                                            <h8 style={{marginLeft: '575px',position: 'absolute',fontFamily: 'serif'}}>{item.productPrice}</h8>

                                            <h8 style={{marginLeft: '670px',position: 'absolute',fontFamily: 'serif'}}>{item.productQuantity}</h8>

                                            <h8 style={{marginLeft: '730px',position: 'absolute',fontFamily: 'serif'}}>{item.orderDateTime}</h8>

                                            <i style={{marginLeft: '900px',marginTop: '4px',position: 'absolute',cursor: 'pointer'}} className="fa-solid fa-trash" onClick={()=>handleDelete(item._id)}></i>
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sales