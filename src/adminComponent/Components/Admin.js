import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
import { deleteProducts, getProducts } from "../Slice"
import './Admin.css'
const Admin=()=>{
    const {products}=useSelector((state)=>state.info.data)
    const [flag,setFlag]=useState(false)
    const [itemid,setItemid]=useState(-1)
    const [active,setActive]=useState(false)
    const [selected,setSelected]=useState("All Categories")
    const [search,setSearch]=useState('')
    const [searched,setSearched]=useState(false)
    const [searchList,setSearchList]=useState([])
    const [categorisedProducts,setCategorisedProducts]=useState([])
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    useEffect(()=>{
        setCategorisedProducts(products.filter((item)=>item.category===selected))
        if(searchList.length!==0) setSearchList(searchList.filter((item)=>products.includes(item)))
    },[products])
    const handleMouse=(itemid)=>{
        setFlag(!flag)
        setItemid(itemid)
    }
    const handleChoose=()=>{
        setActive(!active)
    }
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        if(!search) return alert("Empty field!")
        else {
            const arr=selected === 'All Categories' ? products.filter((item)=>item.title===search) : categorisedProducts.filter((item)=>item.title===search)
            if(arr) setSearchList(arr)
            setSearched(true)
            setSearch('')
        }
    }
    const handleKey=(e)=>{
        if(e.key==='Enter') {
            e.preventDefault()
            if(!search) return alert("Empty field!")
            else {
                setSearched(true)
                const arr=selected === 'All Categories' ? products.filter((item)=>item.title===search) : categorisedProducts.filter((item)=>item.title===search)
                if(arr) setSearchList(arr)
                setSearch('')
            }
        }
    }
    const handleItem=(e)=>{
        setSearched(false)
        setSelected(e.target.textContent)
        if(e.target.textContent!=='All Categories') setCategorisedProducts(products.filter((item)=>item.category===e.target.textContent))
        else setCategorisedProducts([])
        setActive(!active)
    }
    const handleDelete=(itemid)=>{
        dispatch(deleteProducts(itemid))
    }
    const handleUpdate=(item)=>{
        // navigate('/update_product',{state:{item:item}})
        localStorage.setItem('item',JSON.stringify(item))
        navigate('/update_product')
    }
    return(
        <div>
            <Navbar></Navbar>
            <div style={{marginTop: '85px',marginLeft: '10px',marginRight: '10px',marginBottom: '20px'}}>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img style={{height: '200px',width: '100%'}} src="https://cdn.shopify.com/s/files/1/1586/2541/files/on-the-go1-FINAL.jpg?v=1644824872" className="d-block w-100" alt="img"/>
                        </div>
                        <div className="carousel-item">
                            <img style={{height: '200px',width: '100%'}} src="https://cdn.shopify.com/s/files/1/1586/2541/files/latest-arrivals-slim.png?v=1640915413" alt="img"/>
                        </div>
                        <div className="carousel-item">
                            <img style={{height: '200px',width: '100%'}} src="https://cdn.shopify.com/s/files/1/1586/2541/files/photo_display-FINAL.jpg?v=1644831471" className="d-block w-100" alt="img"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* <img src="https://cdn.shopify.com/s/files/1/1586/2541/files/on-the-go1-FINAL.jpg?v=1644824872" style={{marginLeft: '22px',width: '1200px'}}/> */}
                {/* <div style={{display: 'flex'}}>
                    {
                        products.map((item,index)=>(
                            <>
                            {
                                index<4?<>
                                <div className="col-sm-12 col-lg-3">
                                <div className="card b" style={{width: '282px',height: '400px', margin: '7px', marginLeft: '15px'}}>
                                <img src={flag&&itemid===item._id?`${item.img[1]}`:`${item.img[0]}`} className='transform-pic' alt='image' style={{minHeight: '280px',minWidth: '280px',cursor: 'pointer'}} onMouseEnter={()=>handleMouse(item._id)} onMouseLeave={()=>handleMouse(item._id)}/>
                                <div className="card-body">
                                    <h2 style={{fontSize: '100%',fontFamily: 'serif',textOverflow: 'ellipsis',overflow: 'hidden',whiteSpace: 'nowrap'}}><b>{item.title}</b></h2>
                                    <h8 style={{fontSize: '80%',color: '#888888'}} className="card-text">{item.primaryMaterial}</h8>
                                    <br/>
                                    <h8 style={{fontSize: '80%',color: '#888888'}} className="card-text">Rs. {item.price}</h8>
                                </div>
                                </div>
                                </div>
                                </>:<></>
                            }
                            </>
                        ))
                    }
                </div> */}
                <h8 style={{marginLeft: '58px',marginTop: '35px',position: 'absolute'}}>Category <i className="fa-solid fa-angles-right"></i></h8>
                <div style={{marginTop: '60px',marginBottom: '60px',position: '-webkit-sticky',position: 'sticky',top: '133px',zIndex: '100'}}>
                    <div className="dropdown">
                        <div className="dropdown-btn" onClick={handleChoose}>{selected} <span className="fas fa-caret-down"></span></div>
                        {active&&(
                            <div className="dropdown-content">
                                <div onClick={(e)=>handleItem(e)} className="dropdown-item">
                                    Office
                                </div>
                                <div onClick={(e)=>handleItem(e)} className="dropdown-item">
                                    Bed Room
                                </div>
                                <div onClick={(e)=>handleItem(e)} className="dropdown-item">
                                    Living Room
                                </div>
                                <div onClick={(e)=>handleItem(e)} className="dropdown-item">
                                    Dining
                                </div>
                                <div onClick={(e)=>handleItem(e)} className="dropdown-item">
                                    Kids
                                </div>
                                <div onClick={(e)=>handleItem(e)} className="dropdown-item">
                                    All Categories
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="search" style={{marginLeft: '330px',width: '500px',position: 'absolute',marginTop: '-45px'}}>
                        <i className="fa fa-search"></i>
                        <input type="text" className="form-control" placeholder={`Search for ${selected}...`} onChange={(e)=>handleChange(e)} value={search} onKeyDown={(e)=>handleKey(e)}/>
                        <button className="btn" onClick={(e)=>handleSearch(e)}>Search</button>
                    </div>
                </div>
                <h5 style={{marginLeft: '1100px',color: 'grey',marginTop: '-20px',position: 'absolute',fontSize: '150%'}}><b>{searched ? searchList.length : selected === 'All Categories' ? products.length : categorisedProducts.length} results</b></h5>
                <div>
                    {
                        searched ? <>
                        {
                            searchList.length !== 0 ? <>
                            {
                            searchList.map((item)=>(
                            <>
                            <div style={{display: 'flex',marginTop: '30px',marginRight: '10px'}}>
                                <div className="hover-animation">
                                <img src={`${item.img[1]}`} className="img-back" alt='img'></img>
                                <img src={`${item.img[0]}`} className="img-front" alt='img'></img>
                                </div>
                                <div style={{marginLeft: '290px',marginTop: '15px',position: 'absolute',marginRight: '30px'}}>
                                    <h5><b>{item.title}</b></h5>
                                    <div><a style={{fontSize: '70%'}}>{item.description}</a>
                                    <br/>
                                    <a style={{fontSize: '80%',color: 'grey'}}><b>Category: </b>{item.category}</a>
                                    <br/>
                                    <a style={{fontSize: '80%',color: 'grey'}}><b>Rs. </b> {item.price}</a>
                                    <br/>
                                    <a style={{fontSize: '80%',color: 'grey'}}><b>Primary Material: </b> {item.primaryMaterial}</a>
                                    <br/>
                                    <a style={{fontSize: '80%',color: 'grey'}}><b>Stocks available: </b> {item.stocks}</a>
                                    <br/>
                                    <a style={{fontSize: '80%',color: 'grey'}}><b>Is Returnable: </b> {item.isReturnable}</a>
                                    </div>
                                </div>
                                <div style={{position: 'absolute',marginLeft: '1010px',marginTop: '235px',display: 'flex'}}>
                                    <button className="btn btn-outline-warning change-btn" style={{marginRight: '-60px'}} onClick={()=>handleUpdate(item)}>Update <i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                                    <button className="btn btn-outline-danger change-btn" onClick={()=>handleDelete(item._id)}>Delete <i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <hr
                                style={{
                                    color: 'grey',
                                    backgroundColor: 'grey',
                                    height: 1
                                }}
                                />
                            </div>
                            </>
                            ))
                            }
                            </> : <>
                            <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '103px',marginRight: '100px',padding: '30px',marginTop: '100px'}}>
                                <div style={{padding: '50px',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                                    <img style={{width: '70px'}} src="https://learnifyme.com/theme/image.php/boost/block_timeline/1658463070/activities" alt="img"></img>
                                    <br></br>
                                    <h5 style={{color: 'grey'}}><b>No Result Found!</b></h5>
                                </div>
                            </div>
                            </>
                        }
                        </> : <>
                        {
                        selected==='All Categories'?<>
                        {
                            products.length!==0 ? <>
                            {
                                products.map((item)=>(
                                    <>
                                    <div style={{display: 'flex',marginTop: '30px',marginRight: '10px'}}>
                                        <div className="hover-animation">
                                        <img src={`${item.img[1]}`} className="img-back" alt='img'></img>
                                        <img src={`${item.img[0]}`} className="img-front" alt='img'></img>
                                        </div>
                                        <div style={{marginLeft: '290px',marginTop: '15px',position: 'absolute',marginRight: '30px'}}>
                                            <h5><b>{item.title}</b></h5>
                                            <div><a style={{fontSize: '70%'}}>{item.description}</a>
                                            <br/>
                                            <a style={{fontSize: '80%',color: 'grey'}}><b>Category: </b>{item.category}</a>
                                            <br/>
                                            <a style={{fontSize: '80%',color: 'grey'}}><b>Rs. </b> {item.price}</a>
                                            <br/>
                                            <a style={{fontSize: '80%',color: 'grey'}}><b>Primary Material: </b> {item.primaryMaterial}</a>
                                            <br/>
                                            <a style={{fontSize: '80%',color: 'grey'}}><b>Stocks available: </b> {item.stocks}</a>
                                            <br/>
                                            <a style={{fontSize: '80%',color: 'grey'}}><b>Is Returnable: </b> {item.isReturnable}</a>
                                            </div>
                                        </div>
                                        <div style={{position: 'absolute',marginLeft: '1010px',marginTop: '235px',display: 'flex'}}>
                                            <button className="btn btn-outline-warning change-btn" style={{marginRight: '-60px'}} onClick={()=>handleUpdate(item)}>Update <i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                                            <button className="btn btn-outline-danger change-btn" onClick={()=>handleDelete(item._id)}>Delete <i className="fa-solid fa-trash"></i></button>
                                        </div>
                                    </div>
                                    <br/>
                                    <div>
                                        <hr
                                        style={{
                                            color: 'grey',
                                            backgroundColor: 'grey',
                                            height: 1
                                        }}
                                        />
                                    </div>
                                    </>
                                ))
                            }
                            </> : <>
                            <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '103px',marginRight: '100px',padding: '30px',marginTop: '100px'}}>
                                <div style={{padding: '50px',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                                    <img style={{width: '70px'}} src="https://learnifyme.com/theme/image.php/boost/block_timeline/1658463070/activities" alt="img"></img>
                                    <br></br>
                                    <h5 style={{color: 'grey'}}><b>No Result Found!</b></h5>
                                </div>
                            </div>
                            </>
                        }
                        </>:<>
                        {
                            // products.filter((item)=>item.category===selected)
                            categorisedProducts.length !== 0 ? <>
                            {
                                categorisedProducts.map((item)=>(
                                    <>
                                    <div style={{display: 'flex',marginTop: '30px',marginRight: '10px'}}>
                                        <div className="hover-animation">
                                        <img src={`${item.img[1]}`} className="img-back" alt='img'></img>
                                        <img src={`${item.img[0]}`} className="img-front" alt='img'></img>
                                        </div>
                                        <div style={{marginLeft: '290px',marginTop: '15px',position: 'absolute',marginRight: '30px'}}>
                                            <h5><b>{item.title}</b></h5>
                                            <div><a style={{fontSize: '70%'}}>{item.description}</a>
                                            <br/>
                                            <a style={{fontSize: '80%',color: 'grey'}}><b>Category: </b>{item.category}</a>
                                            <br/>
                                            <a style={{fontSize: '80%',color: 'grey'}}><b>Rs. </b> {item.price}</a>
                                            <br/>
                                            <a style={{fontSize: '80%',color: 'grey'}}><b>Primary Material: </b> {item.primaryMaterial}</a>
                                            <br/>
                                            <a style={{fontSize: '80%',color: 'grey'}}><b>Stocks available: </b> {item.stocks}</a>
                                            <br/>
                                            <a style={{fontSize: '80%',color: 'grey'}}><b>Is Returnable: </b> {item.isReturnable}</a>
                                            </div>
                                        </div>
                                        <div style={{position: 'absolute',marginLeft: '1010px',marginTop: '235px',display: 'flex'}}>
                                            <button className="btn btn-outline-warning change-btn" style={{marginRight: '-60px'}} onClick={()=>handleUpdate(item)}>Update <i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                                            <button className="btn btn-outline-danger change-btn" onClick={()=>handleDelete(item._id)}>Delete <i className="fa-solid fa-trash"></i></button>
                                        </div>
                                    </div>
                                    <br/>
                                    <div>
                                        <hr
                                        style={{
                                            color: 'grey',
                                            backgroundColor: 'grey',
                                            height: 1
                                        }}
                                        />
                                    </div>
                                    </>
                                ))
                            }
                            </> : <>
                            <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '103px',marginRight: '100px',padding: '30px',marginTop: '100px'}}>
                                <div style={{padding: '50px',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                                    <img style={{width: '70px'}} src="https://learnifyme.com/theme/image.php/boost/block_timeline/1658463070/activities" alt="img"></img>
                                    <br></br>
                                    <h5 style={{color: 'grey'}}><b>No Result Found!</b></h5>
                                </div>
                            </div>
                            </>
                        }
                        </>
                        }
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
export default Admin