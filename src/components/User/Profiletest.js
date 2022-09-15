import React, { Fragment, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../../layout/MetaData";
import Navbartest from '../navbar/Navbartest'
import "./Profiletest.css";

const Profiletest = ({user}) => {

console.log("profile,user",user)
const {role,name,email,status,createAt,profilepic}=user
  const navigate = useNavigate()
  useEffect(() => {
    if (user === "") {
      navigate("/loginsignup");
    }
  }, [status]);
  return (
    <Fragment>
    <MetaData title={`${name}'s Profile`} />
    <Navbartest></Navbartest>
    <div className="profileContainer">
      <div>
        <h1>My Profile</h1>
        <img src={profilepic} alt={name} />
        <Link to="/updateprofile">Edit Profile</Link>
      </div>
      <div>
        <div>
          <h4>Full Name</h4>
          <p>{name}</p>
        </div>
        <div>
          <h4>Email</h4>
          <p>{email}</p>
        </div>
        <div>
          <h4>Joined On</h4>
          <p>{String(createAt).substr(0, 10)}</p>
        </div>

        <div>
          <Link to="/order">My Orders</Link>
          <Link to="/updatePassword">Change Password</Link>
        </div>
      </div>
    </div>
  </Fragment>
  );
};

export default Profiletest;