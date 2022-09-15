import * as React from 'react';
import Box from '@mui/material/Box';
import { Link, Navigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Tab from '@mui/material/Tab';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { blue } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import { signoutUsers } from '../actions/Products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
export default function MenuBar() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const UserData=JSON.parse(localStorage.getItem("userData"))
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userLogout =  async() => {
    await dispatch(signoutUsers())
    localStorage.removeItem('userData')
    localStorage.removeItem('userid')
    localStorage.removeItem('role')
     navigate('/')
   }
  useEffect(() => {
   
   console.log("logout")
  }, [UserData]);



  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{UserData.name.charAt(0)}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Link style={{ textDecoration: "none" }} to='/prof'><img style={{ height: "20px", width: "20px", marginRight: "10px" }} src="https://cdn-icons-png.flaticon.com/128/3686/3686930.png" alt="" /> Profile</Link>
        </MenuItem>
        <MenuItem>
        <Link style={{ textDecoration: "none" }} to="/coupons"> <img style={{ height: "20px", width: "20px", marginRight: "10px" }} src="https://cdn-icons-png.flaticon.com/128/8199/8199085.png" alt="" /> Coupons</Link>
         
        </MenuItem>
        <MenuItem>
          <Link to="/order"> <img style={{ height: "20px", width: "20px", marginRight: "10px" }} src="https://cdn-icons-png.flaticon.com/128/2639/2639600.png" alt="" /> orders</Link>
        </MenuItem>
        <MenuItem>
          <Link style={{ textDecoration: "none" }} to="/wishlist"><img style={{ height: "20px", width: "20px", marginRight: "10px" }} src="https://cdn-icons-png.flaticon.com/128/2115/2115313.png" alt="" /> Wishlist</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <button style={{ backgroundColor: "red",color:"white",padding:"5px",borderRadius:"5px" }} onClick={userLogout}>Logout</button>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
