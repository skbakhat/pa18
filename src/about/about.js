
import Buttonn from '../comComponents/button/index';
import React from "react";
import jenkins from '../assets/jenkins.png'

import './aboutStyle.css'


function About() {
  return (
    <>
    <div className="main">
      <div> <img src={jenkins} alt="Logo" /></div>
      <div className="main1">
          <h1>
          Jenkins
          </h1>
          <h4>
          Build great things at any scale
          </h4>
          <p>
          The leading open source automation server, Jenkins provides 
          hundreds of plugins to support building, deploying and automating any project.
          </p>
          <div className="buttons">
          <Buttonn text ="Documentation" />
          <Buttonn text ="Download" />
          </div>
      </div>
      </div>  
    </>
  );
}

export default About;
