import React from 'react'
import { useState } from "react";
import {useDispatch } from "react-redux";
import { addToCart } from '../actions/CartItems';
import { addToWishList } from '../actions/WishList';
import Posts from '../components/Post';
import { Link } from "react-router-dom";
import Footer from '../components/Footer/Footer';
import Snavbar from '../spectator/Snavbar';
import Navbartest from '../components/navbar/Navbartest';

import Subnavbar from '../components/LandingPage/Subnavbar';

////....All the imports for the this file ....../////


const DetailsProduct = ({user}) => {
  const dispatch = useDispatch()
  const product = JSON.parse(localStorage.getItem('product')) || ""
  console.log(product)
  const { img, title, role, _id, reviews, stocks, price, category, description } = product
  const [dispImg, setDispImg] = useState(product.img[0]);
  const [formData, setformData] = useState({
    text: "",
    rate: "",
  });
  const [arrData, setarrData] = useState([]);
  const [inWishList, setInWishList] = useState(true);
  const [error, setError] = useState("");
  const [starsRating, setRating] = useState(0);
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRating(newRating);
  };
  const handleOnFormDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData((currentData) => ({ ...currentData, [name]: value }));
  };
  const increasedPrice = (strs) => {
    let res = strs
    return parseInt(res) * 1.25;
  };
  const decPrice = (str) => {
    let res = str
    return parseInt(res) - 40;
  };
  const handeleOnSubmit = (e) => {
    const { text, rate } = formData;
  
    e.preventDefault();
  
    if (!text) {
      setError("Review is required");
      return;
    }
    if (!rate) {
      setError("Rating is required");
      return;
    }
    setError("");
  
    setarrData((arrData) => [...arrData, { text, rate }]);
  
    setformData({ text: "", rate: "" });
  };
  const getDeliveryDate = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let d = new Date().getDate();
    d = parseInt(d) + Math.floor(Math.random() * 4) + 1;
    let m = new Date().getMonth();
    let a =
      d > 0
        ? ["th", "star_item", "nd", "rd"][
            (d > 3 && d < 21) || d % 10 > 3 ? 0 : d % 10
          ]
        : "";
    return `${d}${a} ${monthNames[m]}`;
  };
  const AddTocart = (e,items) => {
     
    console.log('Add to cart')
    
    dispatch(addToCart(items))
    
    }
    const AddTowishList = (items) => {
      console.log("addToWishList")
      // 1.check User is Authenticated or not
         console.log(items)
      //if Authenticated then make a post Request to backend
      dispatch(addToWishList(items))
    }
    const [itemInCart, setItemInCart] = useState(false);
  
  return (
    <> 
    <Navbartest 
       user={user}></Navbartest>
      <Subnavbar></Subnavbar>
    <div className="product_page_top">
    <div className="productPage__container">
      <div className="productPage__left">
        <div className="productPage__sideImagesContainer">
          {img.map((item, index) => (
            <div
              onClick={() => setDispImg(item)}
              className="sideImage"
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          ))}
        </div>
        <div className="productPage__displayImageContainer">
          <div
            className="productPage__displayImage"
            style={{ backgroundImage: `url(${dispImg})` }}
          ></div>
        </div>
      </div>

      <div className="productPage__right">
        <div className="productPage__right__">
          <h1 className="productPage__right__name">{title}</h1>
          <h1 className="productPage__right__rating">
            <img
              className="star"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/docomo/205/white-medium-star_2b50.png"
              alt=""
            />
          </h1>
          <div className="prod-price">
            <h1 className="productPage__right__price">{price}</h1>
            <h1 className="productPage__right__price prod-price-strike">
              ₹{increasedPrice(price)}
            </h1>
            <h1 className="productPage__right__price">( 25% OFF )</h1>
          </div>
          <h1 className="prod-taxes">inclusive of all taxes</h1>
          <div className="prodButtons">
            {itemInCart ? (
              <Link to="/cart">
                <button className="prod-addToBag">
                  <i className="fas fa-shopping-bag btnProd-icons"></i> GO TO
                  CART BAG
                </button>
              </Link>
            ) : (
              <button className="prod-addToBag" onClick={addToCart}>
                <i className="fas fa-shopping-bag btnProd-icons"></i> ADD TO
                BAG
              </button>
            )}

            {!inWishList ? (
              <button
                onClick={() => {
                  AddTowishList({
                    id: _id,
                    name: title,
                    price: price,
                    // rating: rating,
                    img: img[0],
                  });
                  setInWishList(true);
                }}
                className="prod-wishList"
              >
                <i className="far fa-heart btnProd-icons"></i> WISHLIST{" "}
              </button>
            ) : (
              <button className="prod-wishList">
                {" "}
                <i className="far fa-heart btnProd-icons fill-heart"></i>
                Already In Wishlist
              </button>
            )}
          </div>
          <hr />
          <div className="product-details">
            <h1 className="product-details-heading">
              PRODUCT DETAILS{" "}
              <i className="fas fa-newspaper prod-detail-icon"></i>
            </h1>
            <h3 className="productPage__right__description">{description}</h3>
            {/* {console.log(description)} */}
          </div>
          <br /> <br />
          <div>
            <div className="head">
              <h1 className="product-details-heading">DELIVERY OPTIONS </h1>
              <img src='https://cdn-icons-png.flaticon.com/128/71/71222.png' alt="img" />
            </div>

            <div className="Address-address-box Address-pincode-input Address-pdp-box">
              <form>
                {" "}
                <input type="number" placeholder="Enter a PIN code" />
              </form>
            </div>
            <p className="sub">
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>
            <ul className="wePromise">
              <li>100% Original Products</li>
              <li>Pay on delivery might be available</li>
              <li>Easy 30 days returns and exchanges</li>
              <li>Try & Buy might be available</li>
            </ul>
            <br />
            <div className="head">
              <h1 className="product-details-heading">BEST OFFERS </h1>
              <img src="https://cdn-icons-png.flaticon.com/128/3462/3462067.png" alt="img" />
            </div>

            <h2 className="subH">
              <b>
                {" "}
                Best Price{" "}
                <span className="offer_price">₹{decPrice(price)}</span>
              </b>
            </h2>
            <ul className="giveBullets">
              <li>
                Applicable on: Orders above Rs. 1499 (only on first purchase)
              </li>
              <li>
                Coupon code: <b>New5040</b>
              </li>
              <li>
                Coupon Discount: Rs. 40 off (check cart for final savings)
              </li>
            </ul>

            <h2 className="sub_">View Eligible Products</h2>
            <br />
            <h1 className="product-details-heading">EMI option available</h1>
            <li className="bullets">EMI starting from Rs.87/month</li>
            <h2 className="sub_">View Plan</h2>
            <br />
            <p>Product Code: 14033232</p>
            <p>
              Seller:
              <span>
                <b>Pankaj</b>
              </span>
            </p>
            <p className="sub">View Supplier Information</p>
          </div>
          <br />
          <div className="product_reviews">
            <div className="same">
              <h1 className="product-details-heading">Ratings</h1>
              <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="img" className="rate___" />
            </div>

            <div className="review_info">
              <div className="allRatings">
                <img
                  className="star_"
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/docomo/205/white-medium-star_2b50.png"
                  alt=""
                />
                <p>
                  58 ratings <br />& 12 reviews
                </p>
              </div>

              <div className="component">
                <ul className="bargraph">
                  <div className="top_star">
                    <div class="star_item">
                      <div class="star_test">5</div>
                      <div class="star_star___">★</div>
                      <li className="top"></li>
                    </div>
                   
                    <span>68</span>
                  </div>

                  <div className="top_star">
                    <div class="star_item">
                      <div class="star_test">4</div>
                      <div class="star_star">★</div>
                      <li className="midtop"></li>
                    </div>
                    
                    <span>52</span>
                  </div>

                  <div className="top_star">
                    <div class="star_item">
                      <div class="star_test">3</div>
                      <div class="star__star">★</div>
                      <li className="neutral"></li>
                    </div>
                    
                    <span>42</span>
                  </div>

                  <div className="top_star">
                    <div class="star_item">
                      <div class="star_test">2</div>
                      <div class="star_star__">★</div>
                      <li className="midbottom"></li>
                    </div>
                   
                    <span>22</span>
                  </div>

                  <div className="top_star">
                    <div class="star_item">
                      <div class="star_test">1</div>
                      <div class="star_star_">★</div>
                      <li className="bottom"></li>
                    </div>
                   
                    <span>20</span>
                  </div>
                </ul>
              </div>
            </div>

            <div className="form">
              {/* <h2>{formData}</h2> */}
              <p>Share you valuable Review :</p>
              <form>
                <input
                  className="input_text"
                  type="text"
                  value={formData.text}
                  required
                  name="text"
                  placeholder="Review"
                  onChange={handleOnFormDataChange}
                />
                <input
                  className="input_num"
                  type="number"
                  min="0"
                  max="5"
                  value={formData.rate}
                  required
                  name="rate"
                  placeholder="Rating"
                  onChange={handleOnFormDataChange}
                />

                <p>{error}</p>
                <button
                  className="submitBtn"
                  type="submit"
                  onClick={handeleOnSubmit}
                >
                  Post{" "}
                </button>
              </form>
            </div>

            <div>
              <Posts post={arrData} rating={starsRating} />
              {reviews.map((item) => (
                <div className="review__container">
                  <div className="review_post">
                    <h1 className="productPage__right__rating">
                      <img
                        className="star"
                        src="./images/Brijesh.jpeg"
                        alt=""
                      />
                      <span>4.3</span>
                    </h1>
                    <h1 className="review__text">{item}</h1>
                  </div>
                  <div className="review__rate ">
                    <img
                      className="review__avatar"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8H1cJiq2N6D8u6lQMkP_-iPVu7d2XZbevhfUNM6obwXcUkeMDvJEsak3kTjvqAr67DDY&usqp=CAU"
                      alt=""
                    />{" "}
                    <h1>Brijesh Jha| 12th September2022 </h1>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </div> */}
   
  </div>
  </>
  )
}

export default DetailsProduct