import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import { Link, Navigate } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FaceIcon from '@mui/icons-material/Face';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { LoginUser } from "../../actions/WishList";
import { SendUserData } from "../../actions/WishList";
import Snavbar from "../../spectator/Snavbar";

const LoginSignUp = () => {
  const dispatch = useDispatch();
  let UserData = JSON.parse(localStorage.getItem("userData")) || ''
  const navigate = useNavigate()
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: ""
  });
 
  const [isAuthenticated, setisAuthenticated] = useState(false)
  const { name, email, password, address, phone } = user;

  const [avatar, setAvatar] = useState("https://cdn-icons-png.flaticon.com/128/1154/1154448.png");
  const [avatarPreview, setAvatarPreview] = useState("https://cdn-icons-png.flaticon.com/128/1154/1154448.png");


  //////....OnClick User Login Method.....////
  const loginSubmit = (e) => {
    e.preventDefault();
    const obj = {
      email: loginEmail,
      password: loginPassword
    }
     dispatch(LoginUser(obj));
    if(UserData.role==='admin')  
    navigate('/admin_home')
    else if(UserData.role=='user')
    navigate('/user')
    else{
         navigate('/')
    }
  };

/////..... Onclick user register Method...//
const registerSubmit = (e) => {
  e.preventDefault();
  let role

  if (password == 'admin@123')
    role = "admin"
  else {
    role = "user"
  }
  const obj = {
    name: name,
    email: email,
    password: password,
    phone: phone,
    address: address,
    role: role,
    img:avatar
  }
  console.log(obj)
  dispatch(SendUserData(obj));
  alert('User Created SuccessFully, Now you can SignIn')
};

////.....Taking the user data from the input Field.....////
  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
          console.log("avtarurl", avatar)
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };


  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      <Snavbar></Snavbar>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <Link to="/password/forgot">Forget Password ?</Link>
            <input type="submit" value="Login" className="loginBtn" />
          </form>
          <form
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="signUpName" style={{marginTop:"5px"}}>
              <FaceIcon />
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpEmail" style={{marginTop:"5px"}}>
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpPassword" style={{marginTop:"5px"}}>
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpPhone" style={{marginTop:"5px"}}>
              <PhoneIcon />
              <input
                type="number"
                placeholder="Phone"
                required
                name="phone"
                value={phone}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpPhone" style={{marginTop:"5px"}}>
              <HomeIcon />
              <input
                type="text"
                placeholder="Address"
                required
                name="address"
                value={address}
                onChange={registerDataChange}
              />
            </div>


            <div id="registerImage">
              <img src={avatarPreview} alt="Avatar Preview" />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div>
            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginSignUp;
