import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import image_1 from "../../../src/images/carousel_1.jpg";
import image_2 from "../../../src/images/carousel_2.jpg";
import image_3 from "../../../src/images/carousel_3.jpg";

const Home = () => {
  return (
    <>
      <div className=" homeclass ui comments four column grid very relaxed">
        <Carousel slide={false}>
          <Carousel.Item>
            <img
              style={{ height: "400px" }}
              className="d-block w-100"
              src={image_1}
              alt="First slide"
            />
            <Carousel.Caption className="captionimage">
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "400px" }}
              className="d-block w-100"
              src={image_2}
              alt="Second slide"
            />
            <Carousel.Caption className="captionimage">
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "400px" }}
              className="d-block w-100"
              src={image_3}
              alt="Third slide"
            />
            <Carousel.Caption className="captionimage">
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="container-fluid" style={{ marginTop: "3rem" }}>
          <div className="row">
            <div className="col-lg-1 offset-lg-3 col-sm-12 col-12">
              <button type="button" href="/contactus" className="btnclass">
                <Link to="/contactus" className="linkstyle">
                  ContactUs
                </Link>
              </button>
            </div>
            <div className="col-lg-1 offset-lg-1 col-sm-12 col-12">
              <button type="button" className="btnclass">
                <Link to="/jobs" className="linkstyle">
                  Jobs
                </Link>
              </button>
            </div>
            <div className="col-lg-1 offset-lg-1 col-sm-12 col-12">
              <button type="button" className="btnclass">
                <Link to="/comingsoon" className="linkstyle">
                  ComingSoon
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
