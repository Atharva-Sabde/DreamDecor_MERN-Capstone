import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { useState, useEffect } from 'react'
import { coupons } from '../components/Coupons'
import { CartItem } from '../components/CartItem'
import { useNavigate } from 'react-router-dom';
import '../components/cart.css'
import Navbartest from '../components/navbar/Navbartest';
import Subnavbar from '../components/LandingPage/Subnavbar';
import { GET_CART_ITEMS } from '../actions/CartItems'

const Cart = ({user}) => {
    
    const { cartItems } = useSelector((state) => state.cart.cart_Data)
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [coupon, setCoupon] = useState('');
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(null);
    const [oldPrice, setoldPrice] = useState(null);
    const navigate = useNavigate()
    const dispatch=useDispatch()
    
///......../////.....////
useEffect(() => {
    let items = 0;
    let price = 0;

    cartItems.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
}, [cartItems]);

// useEffect(()=>{
//     dispatch(GET_CART_ITEMS({id:localStorage.getItem('userid')}))
// },[])
//
const getText = (e) => {
    setCoupon(e.target.value)
}

////....Proceed TO Buy......////

const proceedToBuy=()=>{
    navigate('/checkout')
}

    //  ....... Applying the coupon ......    

    const ApplyCoupon = () => {
        console.log(coupon);

        let couponm = coupon.trim().toUpperCase();
        let obj = coupons[couponm];
        if (obj == undefined) {
            console.log('Coupon is not applicable')
            setSuccess(false);
            setLoading(false);
        }
        else {
            setSuccess(true);
            setLoading(false);
            console.log(obj.discount);
            let discount = (totalPrice / 100) * (obj.discount);
            let newPrice = Math.trunc(totalPrice - discount);
            setoldPrice(totalPrice);
            setTotalPrice(newPrice);
        }
    }

    //......  Reverting the Coupons to see the original price......//
    const revert = () => {
        setTotalPrice(oldPrice);
        setoldPrice(null);
        setSuccess(null);
        setLoading(true);
        setCoupon('');
    }


     //..........Try Again.......///
     const tryAgain = () => {
        setSuccess(null);
        setLoading(true);
        setCoupon('');
    }

    console.log(cartItems)
  return (
    <>
     <Navbartest 
       user={user}></Navbartest>
      <Subnavbar></Subnavbar>
    
    {cartItems.length == 0 ?
    <h1>Cart is empty</h1> :
    <div className='container-div' >
        <div className='items'>
            <div className='header'>
                <h3 style={{ paddingTop: '2%', paddingLeft: '2%', marginBottom: '3%' }}>Shopping Cart</h3>


            </div>
            <div className='added'>

                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}

            </div>
        </div>
        <div className='details-c'>
            <div className='details'>
                <h4 style={{ textAlign: 'center', paddingTop: '5%' }}>Cart Summary</h4>
                <div style={{ textAlign: 'center', marginBottom: '5%', marginTop: '5%' }} >
                    <span>Subtotal ({totalItems} items) : </span>
                    <span style={{ fontWeight: 'bold' }}>₹ {totalPrice}</span>
                </div>

                <>
                    {loading == true ? <div className='coupon'>
                        <input className='couponinput' value={coupon} style={{ marginRight: '2%',borderRadius:"5px" }} id="standard-basic" label="Enter code" onChange={getText} />
                        <button className='applycoupon' variant="outlined" size='small' style={{ marginRight: '2%',borderRadius:"5px",color:"white",padding:"5px" }} onClick={ApplyCoupon}>
                            Apply
                        </button></div>
                        : <>
                            {
                                success == true ? <div className='smsg'>
                                    <h4>Code applied !</h4>

                                    <div className='revert'>
                                        <button className='revertbtn' style={{color:"white",padding:"5px",borderRadius:"5px"}} onClick={revert} size='small' variant="contained" color="secondary"
                                        >
                                            Revert
                                        </button>
                                    </div>
                                </div>
                                    : <div className='fmsg'>
                                        <h4>Not valid !</h4>
                                        <div className='revert'>
                                            <button style={{backgroundColor:"#855E42",color:"white",padding:"5px",borderRadius:"5px"}} onClick={tryAgain} size='small' variant="contained" color="secondary"
                                            >
                                                Try Again
                                            </button>
                                        </div>
                                    </div>

                            }
                        </>
                    }
                </>

                <div className='checkout'>
                    <button className='buyitems' style={{borderRadius:"5px",padding:"5px",color:"white" }} onClick={proceedToBuy}>
                        Proceed To Buy
                    </button>
                </div>
            </div>
        </div>
    </div>}
    </>
  )
}

export default Cart