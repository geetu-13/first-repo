import React from "react";
import pic from './pic.jpg';
import './about.css';
import logo from './logo.jpg';
const About = () => (
    <div className="row">
            <div className="col">
              <img src={pic} height="700px" className="shadowimage"/>
            </div>
            <div className="col">
              <br/><br/>
              <h1>About    <img src={logo} className="moveimage" height="105px"/></h1>
              <p className="aboutpara">First of all, a big thank you from us for 
                checking out our website.
                Travelogged is for the individual 
                travellers, the group junkies, 
                the explorers, and everyone else. 
                We want to bring exciting places 
                anywhere in the world closer to our 
                audience. We're excited to take a new 
                direction with our travel blog and 
                hope you'll enjoy our work.</p>
            </div>  
          </div>

);

export default About;
