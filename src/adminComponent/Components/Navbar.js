import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { getOneUser, signoutUsers } from '../Slice'
import './Navbar.css'
const Navbar=()=>{
    const [flag,setFlag]=useState(false)
    const {user}=useSelector((state)=>state.info.data)
    
    // const user=JSON.parse(localStorage.getItem("userData"))
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getOneUser(localStorage.getItem('userid')))
    },[])
    const handleProfile=()=>{
        setFlag(!flag)
    }
    const handleFav=(e)=>{
        setFlag(!flag)
        if(e.target.textContent==='Profile') navigate('/admin_profile')
        if(e.target.textContent==='Log Out') {
            dispatch(signoutUsers())
            localStorage.removeItem('userid')
            localStorage.removeItem('role')
            localStorage.removeItem('item')
            localStorage.removeItem('userData')
            // localStorage.removeItem('user')
            navigate('/')
        }
    }
    const navLinkStyles = ({isActive})=>{
        return {
            // fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: 'none',
            color: isActive ? 'black' : '#C06D1F',
            fontSize: isActive ? '13px' : '13px',
            // borderStyle: isActive ? 'solid' : '',
            padding: isActive ? '26px' : '26px',
            // boxShadow: isActive ? '0px 0px 5px 0px #888888' : '',
            // borderRadius: isActive ? '5px' : '',
            borderBottom: isActive ? '3px solid #523A28' : '',
            backgroundColor: isActive ? '#E6E6E6' : ''
        }
    }
    return(

        <div>
            {console.log(user)}
            <div className="navbar">
                <div style={{display: 'flex',flexDirection: 'column',alignItems: 'flex-start',cursor: 'pointer'}}>
                    {/* <div style={{marginLeft: '545px',position: 'absolute',marginTop: '-10px', color: '#814827'}}> */}
                        {/* <div style={{display: 'flex',marginLeft: '50px'}}> */}
                            <img src='images/logo3.png' style={{width: '52px',height: '52px',position: 'absolute',marginLeft: '20px',marginTop: '-20px'}}/>
                            <h3 style={{fontFamily: 'serif',color: '#814827',position: 'absolute',marginTop: '-6px',marginLeft: '70px',fontSize: '170%'}}>DreamDecor</h3>
                        {/* </div> */}
                        {/* <div onClick={handleProfile}>
                            <img src={`${user.img}`} alt='img' style={{borderRadius: '50%',width: '45px',height: '45px',marginLeft: '645px',marginTop: '-7px',border: '1px solid grey'}}></img>
                            <i style={{color: 'black',marginLeft: '700px',fontSize: '18px',marginTop: '-32px',position: 'absolute'}} className="fa-solid fa-caret-down"></i>
                        </div> */}
                    {/* </div> */}
                    <div style={{marginLeft: '360px',marginTop: '-5px'}}>
                        <NavLink to='/admin_home' style={navLinkStyles} className="n m"><b>Home</b></NavLink>
                        {/* <NavLink to={localStorage.getItem('role')==='admin'?'/':'/admin_dashboard'} style={navLinkStyles} className="n m"><b>Products</b></NavLink> */}
                        <NavLink to='/admin_dashboard' style={navLinkStyles} className="n m"><b>Products</b></NavLink>
                        <NavLink to='/users' style={navLinkStyles} className='n m'><b>Users</b></NavLink>
                        <NavLink to='/sales' style={navLinkStyles} className='n m'><b>Sales Report</b></NavLink>
                        <NavLink to='/stocks' style={navLinkStyles} className='n m'><b>Stocks Report</b></NavLink>
                    </div>
                    <div onClick={handleProfile}>
                        <img src={`${user.img}`} alt='img' style={{borderRadius: '50%',width: '45px',height: '45px',marginLeft: '1180px',marginTop: '-32px',border: '1px solid grey',position: 'absolute'}}></img>
                        <i style={{color: 'black',marginLeft: '1230px',fontSize: '18px',marginTop: '-20px',position: 'absolute'}} className="fa-solid fa-caret-down"></i>
                    </div>
                </div>
                {/* <div onClick={handleProfile} style={{cursor: 'pointer'}}> */}
                
                {/* </div> */}
            </div>
            {
                flag&&(
                    <div className='profile-dropdown3'>
                        <div onClick={(e)=>handleFav(e)} className='profile-dropdown3-items'>
                            {/* theme,popout/toast,yes/no,edit mode on profile */}
                            <b>Profile</b>
                        </div>
                        <hr
                            style={{
                                color: '#999',
                                backgroundColor: '#999',
                                height: 1
                            }}
                        />
                        <div onClick={(e)=>handleFav(e)} className='profile-dropdown3-items'>
                            <b>Log Out</b>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Navbar