import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about p-0 m-0">
      <div className="container">
        <div className="text-center mt-2">
          <h1 className="abouthead">
            About<span className="text-primary">Us</span><br />
            <hr className="w-25 m-auto" />
          </h1>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1 className="mt-4 font-design">
              Know about <span className="text-primary">Dream Decor</span>
            </h1>
            <p className="mt-4">
              Our motive is to import home decor items from warehouses and
              sellers all over the world and integrate it into a user friendly
              and accessible shopping plaatform. where customers can shop as per
              their choice,while being carefree about quality and delivery
              times.
            </p>
            <div>
              Dreaam Decor is a popular Store in the market for shopping the
              home décor stuff There are 2 users on the application:
              <div className="mt-3">
                <strong>&#8226; User :</strong>
                <span>
                  {" "}
                  Able to login , wishlist and purchase items available on
                  website
                </span>
              </div>
              <div className="mt-2">
                <strong>&#8226; Admin:</strong>
                <span>
                  {" "}
                  Able to create perform CRUD on Users , products , able to get
                  bulk upload option to upload a csv for products details
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 mt-3 about-card shadow"></div>
        </div>
      </div>

      {/*-------- TEAM PROFILE -------- */}
      <profile>
        <div className="text-center mt-2">
          <h1 className="abouthead">
            Our <span className="text-primary">Team </span>
            <hr className="w-25 m-auto" />
          </h1>
        </div>
        <div className="rowp">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <figure className="figure">
                  <img  style={{height:"200px",width:"200px"}}
                    src="./images/Akash Formal Photo.jpg"
                    alt="something"
                    className="figure-img rounded-circle card"
                    height="200px"
                    width="200px"
                  />
                  <figcaption>
                    Akash Agarwal
                    <h5>
                      <strong className="figure-caption">Team Member</strong>
                    </h5>
                  </figcaption>
                </figure>
              </div>
              <div class="col-sm">
                <figure className="figure">
                  <img  style={{height:"200px",width:"200px"}}
                    src="./images/Aritry.jpg"
                    alt="something"
                    className="figure-img rounded-circle card"
                    
                  />
                  <figcaption>
                    Aritry Samaddar
                    <h5>
                      <strong className="figure-caption">Team Member</strong>
                    </h5>
                  </figcaption>
                </figure>
              </div>
              <div class="col-sm">
                <figure className="figure">
                  <img  style={{height:"200px",width:"200px"}}
                    src="./images/Atharva.png"
                    alt="something"
                    className="figure-img rounded-circle card"
                    height="200px"
                    width="200px"
                  />
                  <figcaption>
                    Atharva Sabde
                    <h5>
                      <strong className="figure-caption">Team Member</strong>
                    </h5>
                  </figcaption>
                </figure>
              </div>
              <div class="col-sm">
                <figure className="figure">
                  <img  style={{height:"200px",width:"200px"}}
                    src="./images/Brijesh.jpeg"
                    alt="something"
                    className="figure-img rounded-circle card"
                    height="200px"
                    width="200px"
                  />
                  <figcaption>
                    Brijesh Jha
                    <h5>
                      <strong className="figure-caption">Team Member</strong>
                    </h5>
                  </figcaption>
                </figure>
              </div>
              <div class="col-sm">
                <figure className="figure">
                  <img style={{heigh:"200px",width:"200px"}}
                    src="./images/Jigrisha.jpg"
                    alt="something"
                    className="figure-img rounded-circle card"
                    height="200px"
                    width="200px"
                  />
                  <figcaption>
                    Jigrisha Dixit
                    <h5>
                      <strong className="figure-caption">Team Member</strong>
                    </h5>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </profile>
    </section>
  );
}

export default About;
