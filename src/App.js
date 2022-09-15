import Cart from "./pages/Cart";
import OrderList from "./pages/OrderList";
import './App.css'
import Products from "./pages/Products";
import WishList from "./pages/WishList";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux';
import { useEffect } from "react";
import { useState } from "react";
import About from "./components/About/About";
import { getCart } from './LocalStorage/UseLocalStorage'
import CategoryDisplayPage from "./pages/CategoryDisplayPage";
import CheckOut from "./pages/CheckOut";
import Loader from './layout/Loader'
import LoginSignUp from './components/User/LoginSignUp'
import Profiletest from "./components/User/Profiletest";
import Successful from "./pages/Successful";
import UpdatePassword from "./pages/UpdatePassword";
import UpdateProfile from "./pages/UpdateProfile";
import Admin from './adminComponent/Components/Admin'
import Home from './adminComponent/Components/Home'
import Update from './adminComponent/Components/Update'
import Users from './adminComponent/Components/Users'
import Sales from './adminComponent/Components/Sales'
import Stocks from './adminComponent/Components/Stocks'
import Profile from './adminComponent/Components/Profile'
import { getProducts } from "./actions/Products";
import { addUserDetails } from "./actions/WishList";
import DetailsProduct from "./pages/DetailsProduct";
import Spectator from "./spectator/Spectator";
import Snavbar from "./spectator/Snavbar";
function App() {
  const user = JSON.parse(localStorage.getItem('userData')) || ""
  console.log("usersdetails",user)
  console.log(user)
  const[userD,setUserD]=useState(user)
  const checkIsSignedIn = user.status
  console.log("userstatus", checkIsSignedIn)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProducts())
 
},[])

useEffect(()=>{
  dispatch(addUserDetails(userD))

  console.log("userData",userD)
},[userD])

  const [isSignedIn, setIsSignedIn] = useState(checkIsSignedIn);
  const cartItem = getCart();

  useEffect(() => {
    if (!localStorage.getItem("cartItem"))
      localStorage.setItem("cartItem", JSON.stringify([]));
    if (!localStorage.getItem("orderItems"))
      localStorage.setItem("orderItems", JSON.stringify([]));
    if (!localStorage.getItem("wishlist"))
      localStorage.setItem("wishlist", JSON.stringify([]));
    if (!localStorage.getItem("userAddress"))
      localStorage.setItem(
        "userAddress",
        JSON.stringify({
          address: "",
          locality: "",
          city: "",
          state: "",
          pincode: "",
          landmark: "",
          isthere: false,
        })
      );
  }, []);

  function signIn() {
    setIsSignedIn(!isSignedIn);
  }

  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn);
  }, [isSignedIn]);
  return (
    <div className="App">
      <BrowserRouter>
    
        <Routes>
          <Route path="/user" element={<Products user={user} ></Products>}></Route>
          <Route path="/" element={<Spectator></Spectator>}></Route>
          <Route path="/cart" element={<Cart  user={user}></Cart>}></Route>
          <Route path='/wishlist' element={<WishList user={user}></WishList>}></Route>
          <Route path='/order' element={<OrderList user={user}></OrderList>}></Route>
          <Route path='/admin_profile' element={<Profile></Profile>}></Route>
          <Route path='/details' element={<DetailsProduct user={user}></DetailsProduct>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/catdispage" element={<CategoryDisplayPage user={user}></CategoryDisplayPage>}></Route>
          <Route path="/checkout" element={<CheckOut user={user} ></CheckOut>}></Route>
          <Route path="/load" element={<Loader></Loader>}></Route>
          <Route path="/loginsignup" element={<LoginSignUp></LoginSignUp>}></Route>
          <Route path="/prof" element={<Profiletest user={user}></Profiletest>}></Route>
          <Route path="/orderSucess" element={<Successful></Successful>}></Route>
          <Route path="/updatepassword" element={<UpdatePassword></UpdatePassword>}></Route>
          <Route path="/updateprofile" element={<UpdateProfile user={user} ></UpdateProfile>}></Route>
          <Route path="/admin_dashboard" element={<Admin></Admin>}></Route>
          <Route path="/admin_home" element={<Home></Home>}></Route>
          <Route path="/update_product" element={<Update></Update>}></Route>
          <Route path="/users" element={<Users></Users>}></Route>
          <Route path="/sales" element={<Sales></Sales>}></Route>
          <Route path="/stocks" element={<Stocks></Stocks>}></Route>
          <Route path="/admin_profile" element={<Profile></Profile>}></Route>
          <Route path="/snav" element={<Snavbar></Snavbar>}></Route>
         

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
