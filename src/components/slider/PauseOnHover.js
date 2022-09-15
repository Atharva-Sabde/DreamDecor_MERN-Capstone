import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: true,
    };

    return (
      <div>
        <div className="slide">
          <Slider {...settings}>
            <div>
              <img src="./images/banner1.png" alt="slider" />
            </div>
            <div>
              <img src="./images/banner2.png" alt="slider" />
            </div>
            <div>
              <img src="./images/banner3.png" alt="slider" />
            </div>
            <div>
              <img src="./images/banner4.png" alt="slider" />
            </div>
            <div>
              <img src="./images/banner5.png" alt="slider" />
            </div>
            <div>
              <img src="./images/banner2.png" alt="slider" />
              {/* <img src="https://img.freepik.com/free-vector/furniture-sale-instagram-post_52683-48084.jpg?w=1060&t=st=1662795221~exp=1662795821~hmac=71b31f35bd3896cdf5d496d23b6e9ed14a26c682c710137cd6a0ff36126378c6" alt="slider" /> */}
            </div>
          </Slider>
     
        </div>
        <br />
        <div className="hr">
          <hr></hr>
        </div>
      </div>
    );
  }
}