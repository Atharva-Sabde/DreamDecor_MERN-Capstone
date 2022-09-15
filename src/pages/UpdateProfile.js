import React, { Fragment, useState, useEffect } from "react";
import "../components/User/UpdateProfile.css";
import { UpdateUserProfile } from "../actions/WishList";
import FaceIcon from '@mui/icons-material/Face';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({user}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState(user.profilepic);
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
    const [isUpdated, setisUpdated] = useState(false)
    const updateProfileSubmit = (e) => {
        e.preventDefault();
        const obj = {
            name: name,
            email: email,
            avatar: avatar
        }
        console.log(obj)
        // dispatch(UpdateUserProfile(obj));
        navigate('/prof')
    };

    const updateProfileDataChange = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setAvatarPreview(user.profilepic);
        }

        if (isUpdated) {
            alert.success("Profile Updated Successfully");
            // dispatch(loadUser());

            //   history.push("/account");

            //   dispatch({
            //     type: UPDATE_PROFILE_RESET,
            //   });
        }
    }, [user, isUpdated]);
    return (
        <Fragment>
            <MetaData title="Update Profile" />
            <div className="updateProfileContainer">
                <div className="updateProfileBox">
                    <h2 className="updateProfileHeading">Update Profile</h2>

                    <form
                        className="updateProfileForm"
                        encType="multipart/form-data"
                        onSubmit={updateProfileSubmit}
                    >
                        <div className="updateProfileName">
                            <FaceIcon />
                            <input
                                type="text"
                                placeholder="Name"
                                required
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="updateProfileEmail">
                            <MailOutlineIcon />
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div id="updateProfileImage">
                            <img src={avatarPreview} alt="Avatar Preview" />
                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={updateProfileDataChange}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Update"
                            className="updateProfileBtn"
                        />
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default UpdateProfile;
