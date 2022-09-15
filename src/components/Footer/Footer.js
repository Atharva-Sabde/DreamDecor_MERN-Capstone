import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footerparentContainer ">
      <div className="footer mt-5">
        <div className=" footerContainer">
          <div className="card-body">
            <h5 className="card-title text-white">Get to Know Us </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#nothing">About Us</a>
              </li>
              <li>
                <a href="#nothing">Careers</a>
              </li>
              <li>
                <a href="#nothing">Press Releases</a>
              </li>
              <li>
                <a href="#nothing">Gift a Smile</a>
              </li>
              <li>
                <a href="#nothing">Dream Decors</a>
              </li>
              <li>
                <a href="#nothing">Dream Decors</a>
              </li>
            </ul>
            {/* </div>
          </div> */}
          </div>
          <div className="card-body">
            <h5 className="card-title text-white">Help</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#nothing" >Payments</a>
              </li>

              <li>
                <a href="#nothing" >Shipping</a>
              </li>
              <li>
                <a href="#nothing" >Cancellation & Returns</a>
              </li>
              <li>
                <a href="#nothing" >FAQ</a>
              </li>
              <li>
                <a href="#nothing">Track Orders</a>
              </li>
            </ul>
            {/* </div>
          </div> */}
          </div>
          <div className="card-body">
            <h5 className="card-title text-white">Connect With Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#nothing">Twitter</a>
              </li>
              <li>
                <a href="#nothing">Facebook</a>
              </li>
              <li>
                <a href="#nothing">Instagram</a>
              </li>
            </ul>

          </div>

        </div>
      </div>
      <div className="footersubcontainer " >


        <div className="desktop-appExperience" data-reactid="87" style={{backgrounColor:"black"}}>
          <p className="desktop-gInfoTitle" data-reactiid="88" style={{color:"black"}}>
            {" "}
            Experience Dream Decor APP on Mobile{" "}
          </p>
          <div className="desktop-downLinkContainer" data-reactid="89">
            <a href="#a" data-reactid="90">
              <img style={{height:"30px", width:"50px"}}
                className="desktop-androidDownLink"
                src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                alt="img4"
              />
            </a>
            <a href="https://itunes.apple.com/in/app" data-reactid="92">
              <img style={{height:"30px", width:"50px" ,marginLeft:"10px"}}
                className="desktop-iOSDownLink"
                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                alt="img5"
              />
            </a>
          </div>
        </div>
        <div className="foot_">
          <div >
            <img style={{height:"60px",width:"700px"}}
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
              alt="img"
            />
          </div>
        </div>
      </div>

    </div>
  );
}