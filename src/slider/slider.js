import React from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import jenkins1 from "../assets/jenkins1.svg";
import jenkins from "../assets/jenkins.png"
import jenkins2 from "../assets/jenkins2.png"

import './sliderStyle.css'
import Buttonn from "../comComponents/button";
function Slider() {
  return (
    <div className="mainn">
      <Carousel  className="sliderr">
        <Carousel.Item >
        <div className="centrr">
        <img className="t-flex" src={jenkins1} alt="First slide" />
          <div className="content">
            <h3>Jenkins Contributor Awards 2021</h3>
            <p>At cdCon we will announce the 2021 contributor awards: Most Valuable Contributor, Most Valuable Advocate, Security MVP. We will use a public nomination process this year. Please submit your nominations by May 14th.
             Any Jenkins contributor is eligible!</p>
             <Buttonn text="More info" />
          </div>
          </div>
          
        </Carousel.Item>
        <Carousel.Item >
          <div className="centrr">
        <img
            className="t-flex"
            src={jenkins2}
            alt="Second slide"
          />
          <div className="content">
            <h3>She Code Africa Contributhon</h3>
            <p>The She Code Africa Contributhon started April 1, 2021.
             Jenkins Project is mentoring women in Africa as they propose pull requests to 
             improve Pipeline help and Pipeline examples. The participants include Onyinye Ezike, Sharon Jebitok, Esther Ejidike, Cynthia Iradukunda, and Lucy Karimi
</p>
           <Buttonn text="More info" />
          </div>
          </div>
          
        </Carousel.Item>
        <Carousel.Item >
        <div className="centrr">
        <img
            className="t-flex"
            src={jenkins}
            alt="Third slide"
          />

          <div className="content">
            <h3>Jenkins is the Way!</h3>
            <p>
            We are looking for experiences of Jenkins users from around the world showcasing how they are building, deploying, and automating great software with Jenkins. 
            Check out their user stories and share yours
            </p>
            <Buttonn text="Register for cdCon" />
          </div>
          </div>
         
        </Carousel.Item>
        <Carousel.Item >
        <div className="centrr">
        <img
            className="t-flex"
            src={jenkins}
            alt="Third slide"
          />

          <div className="content">
            <h3>Participate and Contribute!</h3>
            <p>
            Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, 
            localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!
            </p>
            <Buttonn text="More info" />
          </div>
          </div>
         
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Slider;
