import Navbar from "./Navbar"
import { Link, useLocation, useNavigate } from "react-router-dom"
import './Update.css'
import { useEffect, useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { updateProducts } from "../Slice"
const Update=()=>{
    const item=(JSON.parse(localStorage.getItem('item')))
    const ref=useRef()
    const location=useLocation()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [images,setImages]=useState([])
    const [imageURLs,setImageURLs]=useState(item.img)
    const [category,setCategory]=useState(item.category)
    const [title,setTitle]=useState(item.title)
    const [description,setDescription]=useState(item.description)
    const [primaryMaterial,setPrimaryMaterial]=useState(item.primaryMaterial)
    const [isReturnable,setIsReturnable]=useState(item.isReturnable)
    const [stocks,setStocks]=useState(item.stocks)
    const [price,setPrice]=useState(item.price)
    const [active,setActive]=useState(false)
    const [selected,setSelected]=useState(item.category)
    const handleChoose=()=>{
        setActive(!active)
    }
    const handleItem=(e)=>{
        setSelected(e.target.textContent)
        setActive(!active)
    }
    useEffect(()=>{
        if(images.length<1) return
        const newImageURLs=[]
        images.forEach(image=>newImageURLs.push(URL.createObjectURL(image)))
        setImageURLs(newImageURLs)
        console.log(newImageURLs)
    },[images])
    const onImageChange=(e)=>{
        e.preventDefault()
        setImages([...e.target.files])
    }
    const handleChange=(e,val)=>{
        if(val==='category') setCategory(e.target.value)
        if(val==='title') setTitle(e.target.value)
        if(val==='description') setDescription(e.target.value)
        if(val==='material') setPrimaryMaterial(e.target.value)
        if(val==='isReturnable') setIsReturnable(e.target.value)
        if(val==='stocks') setStocks(e.target.value)
        if(val==='price') setPrice(e.target.value)
    }
    const reset=()=>{
        ref.current.value="";
        setImageURLs(item.img)
    }
    const handleUpdate=(e)=>{
        e.preventDefault()
        if(!title||!description||!primaryMaterial||!isReturnable||!stocks||!price) return alert("Field empty!")
        dispatch(updateProducts({img:imageURLs,category:selected,title:title,description:description,primaryMaterial:primaryMaterial,isReturnable:isReturnable,stocks:stocks,price:price,itemid:item._id}))
        navigate('/admin_dashboard')
    }
    const refreshC=()=>{
        setSelected(item.category)
    }
    return(
        <div>
            {console.log(item)}
            {console.log(imageURLs)}
            <Navbar></Navbar>
            <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '100px',marginRight: '100px',padding: '30px',marginTop: '180px',marginBottom: '140px'}}>
                <a style={{position: 'absolute',marginLeft: '900px'}}><Link className="back" to='/admin_dashboard'><i className="fa-solid fa-arrow-left-long"></i><h8> Back</h8></Link></a>
                <h4 style={{fontSize: '18px',color: '#5a5a5a',alignSelf: 'flex-start',marginBottom: '40px',marginLeft: '10px'}}>Update Product Details</h4>
                <hr
                    style={{
                        color: 'grey',
                        backgroundColor: 'grey',
                        height: 1
                    }}
                />
                <div style={{margin: '50px',marginLeft: '100px'}}>
                    <h7><b>Choose files here to upload product images : </b></h7>
                    <input style={{fontFamily: 'serif',position: 'absolute',marginLeft: '300px',marginTop: '-22px'}} type='file' multiple accept="image/*" onChange={(e)=>onImageChange(e)} ref={ref}/>
                    {/* {imageURLs.map(imageSrc=><img src={imageSrc}/>)} */}
                    <i onClick={reset} style={{fontSize: '20px',cursor: 'pointer',marginLeft: '260px',position: 'absolute',marginTop: '2px'}} className="fa-solid fa-trash"></i>
                    <br/>
                    <br/>
                    <div className="updateP">
                    <h7 style={{margin: '20px',color: '#EA9130'}}><b>Product category : </b></h7>
                    {/* <input style={{marginBottom: '10px',fontFamily: 'serif'}} type='text' placeholder="Product category" value={category} onChange={(e)=>handleChange(e,'category')}/> */}
                    <div style={{display: 'flex'}}>
                    <div className="dropdown2">
                        <div className="dropdown2-btn" onClick={handleChoose} style={{fontFamily: 'serif'}}>{selected} <span className="fas fa-caret-down"></span></div>
                        {active&&(
                            <div className="dropdown2-content">
                                <div onClick={(e)=>handleItem(e)} style={{fontFamily: 'serif'}} className="dropdown2-item">
                                    Office
                                </div>
                                <div onClick={(e)=>handleItem(e)} style={{fontFamily: 'serif'}} className="dropdown2-item">
                                    Bed Room
                                </div>
                                <div onClick={(e)=>handleItem(e)} style={{fontFamily: 'serif'}} className="dropdown2-item">
                                    Living Room
                                </div>
                                <div onClick={(e)=>handleItem(e)} style={{fontFamily: 'serif'}} className="dropdown2-item">
                                    Dining
                                </div>
                                <div onClick={(e)=>handleItem(e)} style={{fontFamily: 'serif'}} className="dropdown2-item">
                                    Kids
                                </div>
                            </div>
                        )}
                    </div>
                    <i className="fa-solid fa-rotate-right" style={{marginLeft: '15px',marginTop: '11px',fontSize: '120%',cursor: 'pointer'}} onClick={refreshC}></i>
                    </div>
                    <br/>
                    <h7 style={{margin: '20px',color: '#EA9130'}}><b>Product title : </b></h7>
                    <input style={{marginBottom: '10px',fontFamily: 'serif'}} type='text' placeholder="Product title" value={title} onChange={(e)=>handleChange(e,'title')}/>
                    <br/>
                    <h7 style={{margin: '20px',color: '#EA9130'}}><b>Product description : </b></h7>
                    <textarea className="textP" style={{marginBottom: '10px',fontFamily: 'serif'}} placeholder="Product description" value={description} onChange={(e)=>handleChange(e,'description')}/>
                    <br/>
                    <h7 style={{margin: '20px',color: '#EA9130'}}><b>Product material : </b></h7>
                    <input style={{marginBottom: '10px',fontFamily: 'serif'}} type='text' placeholder="Product material" value={primaryMaterial} onChange={(e)=>handleChange(e,'material')}/>
                    <br/>
                    <h7 style={{margin: '20px',color: '#EA9130'}}><b>Product returnable status : </b></h7>
                    <input style={{marginBottom: '10px',fontFamily: 'serif'}} type='text' placeholder="Product returnable status" value={isReturnable} onChange={(e)=>handleChange(e,'isReturnable')}/>
                    <br/>
                    <h7 style={{margin: '20px',color: '#EA9130'}}><b>Product stocks available : </b></h7>
                    <input style={{marginBottom: '10px',fontFamily: 'serif'}} type='number' placeholder="Product stocks" value={stocks} onChange={(e)=>handleChange(e,'stocks')}/>
                    <br/>
                    <h7 style={{margin: '20px',color: '#EA9130'}}><b>Product price : </b></h7>
                    <input style={{marginBottom: '10px',fontFamily: 'serif'}} type='number' placeholder="Product price" value={price} onChange={(e)=>handleChange(e,'price')}/>
                    </div>
                    <button className="btn chng" style={{marginLeft: '675px',marginTop: '25px',cursor: 'pointer'}} onClick={(e)=>handleUpdate(e)}>Update Product</button>
                </div>
            </div>
        </div>
    )
}
export default Update