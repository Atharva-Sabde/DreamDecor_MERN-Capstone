import React, { Fragment, useState, useEffect } from "react";
import "../components/User/UpdatePassword.css";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 const [isUpdated,setisUpdated]=useState(false)
  const updatePasswordSubmit = (e) => {
    e.preventDefault();

     const obj={
        oldPassword:oldPassword,
        newPassword:newPassword,
        confirmPassword:confirmPassword
     }
 console.log("passwords",obj)
    // dispatch(updatePassword(myForm));
  };

  useEffect(() => {

    if (isUpdated) {
      alert.success("Profile Updated Successfully");

    //   history.push("/account");

    //   dispatch({
    //     type: UPDATE_PASSWORD_RESET,
    //   });
    }
  }, [isUpdated]);

  return (
    <Fragment>
    <MetaData title="Change Password" />
    <div className="updatePasswordContainer">
      <div className="updatePasswordBox">
        <h2 className="updatePasswordHeading">Update Profile</h2>

        <form
          className="updatePasswordForm"
          onSubmit={updatePasswordSubmit}
        >
          <div className="loginPassword">
            <VpnKeyIcon />
            <input
              type="password"
              placeholder="Old Password"
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="loginPassword">
            <LockOpenIcon />
            <input
              type="password"
              placeholder="New Password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="loginPassword">
            <LockIcon />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Change"
            className="updatePasswordBtn"
          />
        </form>
      </div>
    </div>
  </Fragment>
  )
};

export default UpdatePassword;